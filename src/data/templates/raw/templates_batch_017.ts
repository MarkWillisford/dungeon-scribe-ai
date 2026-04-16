// Batch 017 | first: 'Wizard Creature (CR +1, +2, or +3)' | last: 'Simple Template: Dark Creature (CR +0 or +1)' | count: 25
// NOTE: Entry 402 (Simple Corruption Templates index page) was skipped — it is a navigation index only, with no standalone template definition.

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_017: TemplateDefinition[] = [
  // 401. Wizard Creature (CR +1, +2, or +3)
  {
    id: 'wizard-creature',
    name: 'Wizard Creature',
    description:
      'A wizard creature is a simple class template that can be applied to any creature, representing one that has developed arcane magical abilities akin to a wizard. The creature gains access to wizard spellcasting, an arcane school, and an arcane bond. The CR increases by +1 for creatures with 7 or fewer HD, +2 for 8–12 HD, and +3 for 13+ HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 7,
        crValue: 1,
        label: '1–7 HD',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 8,
        maxHD: 12,
        crValue: 2,
        label: '8–12 HD',
        features: [],
      },
      {
        tierIndex: 2,
        minHD: 13,
        crValue: 3,
        label: '13+ HD',
        features: [],
      },
    ],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'INT', change: 4 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Arcane School',
        description:
          'The wizard creature chooses an arcane school and gains its abilities, using its HD – 2 as its wizard level for determining the effects and DCs of those abilities (minimum 1).',
      },
      {
        scalingType: 'flat',
        name: 'Wizard Spellcasting',
        description:
          'The wizard creature can cast a small number of wizard spells per the Cleric, Druid, and Wizard Spell Slots table, using its HD as its caster level. Typically only the three highest available spell levels are granted; lower-level spells may be added for balance purposes (maximum two per level).',
      },
      {
        scalingType: 'flat',
        name: 'Arcane Bond',
        description:
          'The wizard creature can designate one item as its arcane bond and use that item to cast any one spell it knows once per day.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 403. Simple Corruption Template: Accursed Creature (CR +1)
  {
    id: 'simple-corruption-accursed-creature',
    name: 'Simple Corruption Template: Accursed Creature',
    description:
      'An accursed creature is under a particular curse chosen by the GM that does not alter its statistics, but its natural attacks transmit that curse to those it strikes. The creature gains two claw attacks and the ability to bestow curses through its natural attacks.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    features: [
      {
        scalingType: 'flat',
        name: 'Cursed Natural Attacks',
        description:
          'The accursed creature gains two claw attacks dealing 1d4 damage each (for Medium creatures). On a successful hit with a natural attack, the creature can trigger a bestow curse effect. The save DC equals 10 + 1/2 the creature\'s HD + the creature\'s Charisma modifier, and the caster level equals the creature\'s HD. This ability can inflict any bestow curse effect the GM deems appropriate, or can transmit the creature\'s personal curse.',
      },
      {
        scalingType: 'flat',
        name: 'Personal Curse',
        description:
          'The accursed creature is under a particular curse selected by the GM. This curse does not mechanically alter the creature\'s statistics, but is a defining narrative aspect of the template.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 404. Simple Corruption Template: Deep Creature (CR +1)
  {
    id: 'simple-corruption-deep-creature',
    name: 'Simple Corruption Template: Deep Creature',
    description:
      'A deep creature has been twisted by the deep ones, whether through interbreeding or foul rituals. It gains aquatic features, enhanced physical attributes, and the ability to survive and thrive in underwater environments.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['aquatic', 'deep one'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'WIS', change: 2 },
    ],
    naturalArmorChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Swim Speed',
        description:
          'The deep creature gains a swim speed equal to its base land speed, a +8 racial bonus on Swim checks, and can always take 10 on Swim checks.',
      },
      {
        scalingType: 'flat',
        name: 'Amphibious',
        description: 'The deep creature can breathe both air and water.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks',
        description:
          'The deep creature gains two claw attacks dealing 1d4 damage each (for Medium creatures).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Toughness',
        description:
          'The deep creature gains +1 bonus to AC and +1 hit point per Hit Die.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 405. Simple Corruption Template: Ghoulish Creature (CR +1)
  {
    id: 'simple-corruption-ghoulish-creature',
    name: 'Simple Corruption Template: Ghoulish Creature',
    description:
      'A ghoulish creature has been transformed by ghoul fever into an undead horror that retains much of its former appearance but craves living flesh. It gains the undead type, paralytic claws and bite, and the ability to spread ghoul fever.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 1,
    immunities: ['undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The ghoulish creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Claw and Bite Attacks',
        description:
          'The ghoulish creature gains two claw attacks dealing 1d4 damage each and one bite attack dealing 1d6 damage (for Medium creatures), plus +1 bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Ghoul Fever (Disease)',
        description:
          'Bite—injury; save Fort DC = 10 + 1/2 HD + Cha modifier; onset 1 day; frequency 1/day; effect 1d3 Con and 1d3 Dex damage; cure 2 consecutive saves.',
      },
      {
        scalingType: 'flat',
        name: 'Paralysis',
        description:
          'Any creature struck by the ghoulish creature\'s claw or bite attacks must succeed at a Fortitude save (DC = 10 + 1/2 HD + Cha modifier) or be paralyzed for 1d4+1 rounds. Elves are immune to this paralysis.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 406. Simple Corruption Template: Hellbound Creature (CR +1)
  {
    id: 'simple-corruption-hellbound-creature',
    name: 'Simple Corruption Template: Hellbound Creature',
    description:
      'A hellbound creature has consigned its soul to Hell in exchange for infernal power, granting it devilish abilities including the power to summon devils, enhanced physical and social attributes, and the ability to see in total darkness.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and See in Darkness',
        description:
          'The hellbound creature gains darkvision and the ability to see perfectly in darkness of any kind, including that created by deeper darkness spells.',
      },
      {
        scalingType: 'flat',
        name: 'Gore Attack',
        description:
          'The hellbound creature gains a gore melee attack dealing 1d4 damage (for Medium creatures), plus +1 bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Contract Bound (Weakness)',
        description:
          "The hellbound creature's soul is bound to Hell by contract. This weakness may be exploited by certain abilities or spells that interact with planar contracts or soul binding.",
      },
      {
        scalingType: 'flat',
        name: 'Summon Devils (Sp)',
        description:
          'The hellbound creature can summon devils at will (100% success). The type of devil summoned and the effective spell level of the summon ability depend on the creature\'s HD: 8 or fewer HD = lemure (2nd-level spell); 9–12 HD = bearded devil (4th-level spell); 13–16 HD = horned devil (7th-level spell); 17+ HD = ice devil (9th-level spell). Alternatively, the creature may summon 1d3 devils one category weaker, or 1d4+1 two categories weaker.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 407. Simple Corruption Template: Hive Creature (CR +1)
  {
    id: 'simple-corruption-hive-creature',
    name: 'Simple Corruption Template: Hive Creature',
    description:
      'A hive creature has been absorbed into a hive mind collective, losing its individual senses in exchange for a shared consciousness and powerful corrosive biology. It becomes blind but gains blindsense, blindsight, and immunity to acid.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['hive'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -6 },
    ],
    naturalArmorChange: 2,
    immunities: ['acid'],
    features: [
      {
        scalingType: 'flat',
        name: 'Blindness',
        description: 'The hive creature becomes permanently blind.',
      },
      {
        scalingType: 'flat',
        name: 'Blindsense and Blindsight',
        description:
          'The hive creature gains blindsense 60 feet and blindsight 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Corrosive Blood',
        description:
          "The hive creature's blood is corrosive. Any creature that deals piercing or slashing damage to the hive creature with a non-reach melee weapon takes acid damage from the splash of corrosive blood.",
      },
      {
        scalingType: 'flat',
        name: 'Hive Mind',
        description:
          'The hive creature is connected to a hive intelligence. It shares senses and basic coordination with others of its hive, granting it immunity to flanking and providing enhanced tactical awareness.',
      },
      {
        scalingType: 'flat',
        name: 'Claw and Bite Attacks',
        description:
          'The hive creature gains two claw attacks dealing 1d4 damage each and one bite attack dealing 1d6 damage (for Medium creatures), plus +3 bonus to AC, and +1 hit point per HD.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 408. Simple Corruption Template: Lich Creature (CR +1)
  {
    id: 'simple-corruption-lich-creature',
    name: 'Simple Corruption Template: Lich Creature',
    description:
      'A lich creature has undergone an incomplete or corrupted version of the transformation into lichdom, gaining undead traits, enhanced mental faculties, a paralyzing touch, and a fear aura, along with the ability to rejuvenate unless its phylactery is destroyed.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    immunities: ['cold', 'electricity', 'undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The lich creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation',
        description:
          'The lich creature can survive as an undead indefinitely, returning each time its foes destroy it unless they can also destroy its phylactery. As long as the phylactery exists, a destroyed lich creature reforms in 1d10 days.',
      },
      {
        scalingType: 'flat',
        name: 'Paralyzing Touch',
        description:
          'The lich creature has a touch attack that deals 1d8 + 1/2 HD damage and paralyzes the target unless it succeeds on a Fortitude save.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura',
        description:
          'The lich creature radiates an aura of fear. Creatures within range must succeed on a Will save or become shaken. The range and save DC are determined by the GM based on the creature\'s HD.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 409. Simple Corruption Template: Lycanthropic Creature (CR +1)
  {
    id: 'simple-corruption-lycanthropic-creature',
    name: 'Simple Corruption Template: Lycanthropic Creature',
    description:
      'A lycanthropic creature is a simple template representing an incomplete or corruption-based form of lycanthropy. The base creature gains the shapechanger subtype, physical enhancements, low-light vision, scent, and the ability to transmit its lycanthropy through its bite. Unlike full lycanthropes, this template only represents the hybrid form.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    subtypeGains: ['shapechanger'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
    ],
    naturalArmorChange: 1,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'silver' },
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision and Scent',
        description:
          'The lycanthropic creature gains low-light vision and the scent ability. These abilities are retained even in the creature\'s ordinary (non-hybrid) form.',
      },
      {
        scalingType: 'flat',
        name: 'Bite Attack',
        description:
          'The lycanthropic creature gains a bite attack dealing 1d6 damage (for Medium creatures) plus the curse of lycanthropy. The creature also gains +1 bonus to AC and +1 hit point per HD.',
      },
      {
        scalingType: 'flat',
        name: 'Curse of Lycanthropy',
        description:
          'Any creature of the same type as the lycanthropic creature that is bitten by it must succeed at a Fortitude save (DC 15) or contract lycanthropy appropriate to the specific lycanthrope type.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape',
        description:
          'The lycanthropic creature can switch between its normal form and its hybrid form as a standard action (as polymorph). It cannot assume a full animal form. Change shape is retained even in the creature\'s ordinary form.',
      },
      {
        scalingType: 'flat',
        name: 'Lycanthropic Empathy',
        description:
          'The lycanthropic creature gains an empathy ability appropriate to its specific lycanthrope type (e.g., empathy with wolves for a werewolf). This ability is retained in its ordinary form.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 410. Simple Corruption Template: Possessed Creature (CR +1)
  {
    id: 'simple-corruption-possessed-creature',
    name: 'Simple Corruption Template: Possessed Creature',
    description:
      'A possessed creature is inhabited by a spirit that shares control of the body. It gains enhanced willpower, always acts in the surprise round, and benefits from the spirit\'s force of personality — but the possessing spirit may seize control when the creature\'s will falters.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Willpower',
        description:
          'The possessed creature gains a +4 bonus on Will saves. When it fails a save against a mind-affecting effect, it may reroll the save — but if the second save succeeds, the possessing spirit takes control instead of the creature\'s normal personality.',
      },
      {
        scalingType: 'flat',
        name: 'Always Acts on Surprise Round',
        description:
          'The possessed creature always acts on the surprise round, regardless of whether it notices opponents. The possessing spirit\'s alertness ensures it is never caught completely off guard.',
      },
      {
        scalingType: 'flat',
        name: "Spirit's Influence",
        description:
          'The possessed creature gains a +2 bonus on all rolls based on Charisma, representing the force of the inhabiting spirit.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 411. Simple Corruption Template: Promethean Creature (CR +1)
  {
    id: 'simple-corruption-promethean-creature',
    name: 'Simple Corruption Template: Promethean Creature',
    description:
      'A promethean creature has had parts of its body replaced with golem components, becoming a living construct hybrid. It gains tremendous physical strength and natural armor, immunity to most emotional effects, enhanced resilience against poison and disease, and the ability to automatically stabilize when dying.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'STR', change: 4 }],
    naturalArmorChange: 4,
    immunities: [
      'emotion effects (except rage, hatred, or anger)',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          'The promethean creature gains a slam attack that deals 1d6 points of damage (for Medium creatures).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Fortitude',
        description:
          'The promethean creature gains a +4 bonus on saving throws against poison and disease effects.',
      },
      {
        scalingType: 'flat',
        name: 'Automatic Stabilization',
        description:
          'The promethean creature automatically stabilizes when reduced below 0 hit points and does not need to make Constitution checks to avoid dying.',
      },
      {
        scalingType: 'flat',
        name: 'Biological Independence',
        description:
          'The promethean creature does not need to eat, sleep, or drink, as its partially constructed body sustains itself through alchemical and mechanical processes.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 412. Simple Corruption Template: Shadowbound Creature (CR +1)
  {
    id: 'simple-corruption-shadowbound-creature',
    name: 'Simple Corruption Template: Shadowbound Creature',
    description:
      'A shadowbound creature is bound to the Plane of Shadow, gaining enhanced constitution, extended darkvision, and a deflection bonus to AC. However, it is weakened by light and cannot benefit from morale bonuses, and its regretful gaze can shake those who meet its eyes.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'CON', change: 4 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The shadowbound creature gains darkvision 120 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Deflection Bonus to AC',
        description:
          'The shadowbound creature gains a deflection bonus to AC equal to 1/4 its CR (minimum +1), as shadows cling to its form.',
      },
      {
        scalingType: 'flat',
        name: 'Light Blindness',
        description:
          'The shadowbound creature is blinded for 1 round when exposed to bright light. On subsequent rounds in bright light, it is dazzled.',
      },
      {
        scalingType: 'flat',
        name: 'Morale Immunity',
        description:
          'The shadowbound creature cannot gain morale bonuses of any kind, as its connection to shadow suppresses such positive emotional reinforcement.',
      },
      {
        scalingType: 'flat',
        name: 'Regretful Gaze',
        description:
          'A shadowbound creature\'s gaze fills observers with regret and sorrow. Any creature within 30 feet that meets its gaze is shaken for 1 round unless it succeeds at a Will save (DC = 10 + 1/2 HD + Charisma modifier).',
      },
      {
        scalingType: 'flat',
        name: 'Shadow Surge',
        description:
          'When the shadowbound creature takes 3 or more points of damage per HD from a single attack, it gains a +2 profane bonus on attack rolls, damage rolls, saving throws, and skill checks for 1 round as the shadow energy surges in response to pain. It also gains +2 hit points per HD.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 413. Simple Corruption Template: Vampiric Creature (CR +1)
  {
    id: 'simple-corruption-vampiric-creature',
    name: 'Simple Corruption Template: Vampiric Creature',
    description:
      'A vampiric creature has undergone a partial or corruption-based vampiric transformation, gaining undead traits, enhanced physical and social attributes, energy drain, and classic vampiric abilities such as blood drain, spider climb, gaseous form, and fast healing.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 1,
    immunities: ['undead traits'],
    fastHealing: '1',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The vampiric creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack with Energy Drain',
        description:
          'The vampiric creature gains a slam attack dealing 1d6 damage (for Medium creatures) plus energy drain. The energy drain inflicts 1 negative level; the DC to remove the negative level is 10 + 1/2 HD + Charisma modifier. The creature also gains +1 bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Drain',
        description:
          'The vampiric creature can drain blood from a grappled opponent. If the vampiric creature pins the foe, it can drain blood, dealing Constitution damage and granting the vampiric creature temporary hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Gaseous Form',
        description:
          'When reduced to 0 hit points, the vampiric creature assumes gaseous form (as the spell) and attempts to return to its resting place (coffin or similar). It regains 1 hit point per hour while in gaseous form and returns to its normal form after resting.',
      },
      {
        scalingType: 'flat',
        name: 'Shadowless',
        description: 'The vampiric creature casts no shadow.',
      },
      {
        scalingType: 'flat',
        name: 'Spider Climb',
        description:
          'The vampiric creature can climb walls and ceilings as though under the effects of a spider climb spell.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 414. Simple Template: Advanced (CR +1)
  {
    id: 'simple-advanced',
    name: 'Simple Template: Advanced',
    description:
      'Creatures with the advanced template are fiercer and more powerful than their ordinary cousins. This simple inherited template adds +4 to all ability scores (except Intelligence scores of 2 or less), increases natural armor by +2, and grants +2 on all rolls and special ability DCs.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4, condition: 'only if base score is 3 or higher' },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'All Ability Scores +4',
        description:
          'The advanced creature gains +4 to all ability scores. Creatures with an Intelligence score of 2 or lower do not gain the +4 bonus to Intelligence.',
      },
      {
        scalingType: 'flat',
        name: 'Attack, Save, and Skill Bonuses',
        description:
          'The advanced creature gains +2 on all rolls (including damage rolls) and special ability DCs, as well as +4 to AC and CMD.',
      },
      {
        scalingType: 'flat',
        name: 'Hit Points',
        description: 'The advanced creature gains +2 hit points per Hit Die.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 415. Simple Template: Aerial Creature (CR +0 or +1) [Paizo]
  {
    id: 'simple-aerial-creature',
    name: 'Simple Template: Aerial Creature',
    description:
      'An aerial creature is a non-outsider that has adapted to life in the sky, gaining the air subtype, a fly speed, electricity resistance, and — for more powerful versions — damage reduction and bonus electricity damage on attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Electricity Resistance 10 and Bonus Damage',
            description:
              'The aerial creature gains electricity resistance 10. Its natural weapon and metal weapon attacks deal +1 point of electricity damage.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Electricity Resistance 15, DR 3/—, and Bonus Damage',
            description:
              'The aerial creature gains electricity resistance 15 and damage reduction 3/—. Its natural weapon and metal weapon attacks deal +1d6 electricity damage.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Electricity Resistance 20, DR 5/—, and Bonus Damage',
            description:
              'The aerial creature gains electricity resistance 20 and damage reduction 5/—. Its natural weapon and metal weapon attacks deal +2d6 electricity damage.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'creature_type_excluded',
        excluded: ['outsider'],
      },
      {
        type: 'special',
        description:
          'Cannot have the air, cold, earth, fire, or water subtype',
      },
    ],
    subtypeGains: ['air'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The aerial creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Fly Speed',
        description:
          'The aerial creature gains a fly speed equal to its highest base speed with perfect maneuverability, to a maximum of 10 feet per HD.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: "Pathfinder Player Companion: Monster Summoner's Handbook",
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 416. Simple Template: Aerial Creature (CR +varies) [3pp]
  {
    id: 'simple-aerial-creature-legendary',
    name: 'Simple Template: Aerial Creature (Legendary)',
    description:
      'A third-party variant of the aerial creature simple template from Legendary Summoners, granting the air subtype, a fly speed, electricity resistance, damage reduction, and bonus electricity damage on attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Electricity Resistance 10 and Bonus Damage',
            description:
              'The aerial creature gains electricity resistance 10. Natural and metal weapon attacks deal +1 point of electricity damage.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Electricity Resistance 15, DR 3/—, and Bonus Damage',
            description:
              'The aerial creature gains electricity resistance 15 and damage reduction 3/—. Natural and metal weapon attacks deal +1d6 electricity damage.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Electricity Resistance 20, DR 5/—, and Bonus Damage',
            description:
              'The aerial creature gains electricity resistance 20 and damage reduction 5/—. Natural and metal weapon attacks deal +2d6 electricity damage.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['air'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The aerial creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Fly Speed',
        description:
          'The aerial creature gains a fly speed equal to its highest base speed with perfect maneuverability, to a maximum of 10 feet per HD.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Legendary Summoners',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 417. Simple Template: Aqueous Creature (CR +0 or +1) [Paizo]
  {
    id: 'simple-aqueous-creature',
    name: 'Simple Template: Aqueous Creature',
    description:
      'An aqueous creature is a non-outsider that has adapted to life in the water, gaining the water subtype, a swim speed, cold resistance, and — for more powerful versions — damage reduction and bonus cold damage on attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold Resistance 10 and Bonus Damage',
            description:
              'The aqueous creature gains cold resistance 10. Its natural weapon and metal weapon attacks deal +1 point of cold damage.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold Resistance 15, DR 3/—, and Bonus Damage',
            description:
              'The aqueous creature gains cold resistance 15 and damage reduction 3/—. Its natural weapon and metal weapon attacks deal +1d6 cold damage.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold Resistance 20, DR 5/—, and Bonus Damage',
            description:
              'The aqueous creature gains cold resistance 20 and damage reduction 5/—. Its natural weapon and metal weapon attacks deal +2d6 cold damage.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'creature_type_excluded',
        excluded: ['outsider'],
      },
      {
        type: 'special',
        description:
          'Cannot have the air, cold, earth, fire, or water subtype',
      },
    ],
    subtypeGains: ['water'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The aqueous creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Swim Speed',
        description:
          'The aqueous creature gains a swim speed equal to its highest base speed +10 feet.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: "Pathfinder Player Companion: Monster Summoner's Handbook",
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 418. Simple Template: Aqueous Creature (CR +varies) [3pp]
  {
    id: 'simple-aqueous-creature-legendary',
    name: 'Simple Template: Aqueous Creature (Legendary)',
    description:
      'A third-party variant of the aqueous creature simple template from Legendary Summoners, granting the water subtype, a swim speed, cold resistance, damage reduction, and bonus cold damage on attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold Resistance 10 and Bonus Damage',
            description:
              'The aqueous creature gains cold resistance 10. Natural and metal weapon attacks deal +1 point of cold damage.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold Resistance 15, DR 3/—, and Bonus Damage',
            description:
              'The aqueous creature gains cold resistance 15 and damage reduction 3/—. Natural and metal weapon attacks deal +1d6 cold damage.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold Resistance 20, DR 5/—, and Bonus Damage',
            description:
              'The aqueous creature gains cold resistance 20 and damage reduction 5/—. Natural and metal weapon attacks deal +2d6 cold damage.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['water'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The aqueous creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Swim Speed',
        description:
          'The aqueous creature gains a swim speed equal to its highest base speed +10 feet.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Legendary Summoners',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 419. Simple Template: Celestial (CR +0 or +1)
  {
    id: 'simple-celestial',
    name: 'Simple Template: Celestial',
    description:
      'The celestial template is applied to creatures conjured via summon monster or planar ally spells to represent good-aligned outsiders. The creature gains darkvision, energy resistances, damage reduction against evil weapons, spell resistance, and the ability to smite evil once per day. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Energy Resistance 5',
            description:
              'The celestial creature gains resistance 5 to acid, cold, and electricity. No damage reduction.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Energy Resistance 10 and DR 5/evil',
            description:
              'The celestial creature gains resistance 10 to acid, cold, and electricity, and damage reduction 5/evil.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Energy Resistance 15 and DR 10/evil',
            description:
              'The celestial creature gains resistance 15 to acid, cold, and electricity, and damage reduction 10/evil.',
          },
        ],
      },
    ],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    srFormula: 'new CR + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The celestial creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Smite Evil (Su)',
        description:
          'Once per day as a swift action, the celestial creature can smite evil. It adds its Charisma bonus to attack rolls and a bonus equal to its HD to damage rolls against evil foes. The smite persists until the target is dead or the celestial creature rests.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 420. Simple Template: Chthonic Creature (CR +0 or +1) [Paizo]
  {
    id: 'simple-chthonic-creature',
    name: 'Simple Template: Chthonic Creature',
    description:
      'A chthonic creature is a non-outsider that has adapted to life underground, gaining the earth subtype, a burrow speed, acid resistance, and — for more powerful versions — damage reduction and bonus acid damage on attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Resistance 10 and Bonus Damage',
            description:
              'The chthonic creature gains acid resistance 10. Its natural weapon attacks deal +1 point of acid damage.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Resistance 15, DR 3/—, and Bonus Damage',
            description:
              'The chthonic creature gains acid resistance 15 and damage reduction 3/—. Its natural weapon attacks deal +1d6 acid damage.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Resistance 20, DR 5/—, and Bonus Damage',
            description:
              'The chthonic creature gains acid resistance 20 and damage reduction 5/—. Its natural weapon attacks deal +2d6 acid damage.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'creature_type_excluded',
        excluded: ['outsider'],
      },
      {
        type: 'special',
        description:
          'Cannot have the air, cold, earth, fire, or water subtype',
      },
    ],
    subtypeGains: ['earth'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The chthonic creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow Speed',
        description:
          'The chthonic creature gains a burrow speed equal to half its highest base speed. Its tunnels always collapse behind it and never leave behind a usable passage.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: "Pathfinder Player Companion: Monster Summoner's Handbook",
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 421. Simple Template: Chthonic Creature (CR +varies) [3pp]
  {
    id: 'simple-chthonic-creature-legendary',
    name: 'Simple Template: Chthonic Creature (Legendary)',
    description:
      'A third-party variant of the chthonic creature simple template from Legendary Summoners, granting the earth subtype, a burrow speed, acid resistance, damage reduction, and bonus acid damage on attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Resistance 10 and Bonus Damage',
            description:
              'The chthonic creature gains acid resistance 10. Natural weapon attacks deal +1 point of acid damage.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Resistance 15, DR 3/—, and Bonus Damage',
            description:
              'The chthonic creature gains acid resistance 15 and damage reduction 3/—. Natural weapon attacks deal +1d6 acid damage.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Resistance 20, DR 5/—, and Bonus Damage',
            description:
              'The chthonic creature gains acid resistance 20 and damage reduction 5/—. Natural weapon attacks deal +2d6 acid damage.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['earth'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The chthonic creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow Speed',
        description:
          'The chthonic creature gains a burrow speed equal to half its highest base speed. Its tunnels always collapse behind it and never leave behind a usable passage.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Legendary Summoners',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 422. Simple Template: Cold Iron Elemental (CR +0)
  {
    id: 'simple-cold-iron-elemental',
    name: 'Simple Template: Cold Iron Elemental',
    description:
      'A cold iron elemental is an earth elemental whose body is composed entirely of cold iron rather than ordinary earth and stone. It loses earth glide and earth mastery but gains spell resistance and the ability to overcome damage reduction as though its attacks were made with cold iron weapons.',
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['elemental'] },
      { type: 'special', description: 'Must be an earth elemental' },
    ],
    srFormula: 'HD + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Iron Composition',
        description:
          'The cold iron elemental is composed entirely of cold iron. All of its natural attacks count as cold iron weapons for the purposes of overcoming damage reduction and other resistances.',
      },
      {
        scalingType: 'flat',
        name: 'Loses Earth Glide',
        description:
          "The cold iron elemental loses the earth glide special ability possessed by standard earth elementals, as the cold iron does not flow through earth as naturally as mundane stone.",
      },
      {
        scalingType: 'flat',
        name: 'Loses Earth Mastery',
        description:
          "The cold iron elemental loses the earth mastery special ability possessed by standard earth elementals.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: "Adventurer's Handbook: Genius Guide Volume 1",
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 423. Simple Template: Colour-Blighted (CR +0)
  {
    id: 'simple-colour-blighted',
    name: 'Simple Template: Colour-Blighted',
    description:
      'A colour-blighted creature has been fed upon by a Colour out of Space, leaving it drained and warped. It becomes strangely aggressive toward creatures that do not exude the colours of a Colour out of Space, and faces a slow death via crumbling to ash unless its ability scores are restored.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description: 'Must have been fed upon by a Colour out of Space creature',
      },
    ],
    immunities: [
      'feed attacks from Colours out of Space (until template is removed)',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Ability Score Drain',
        description:
          "The colour-blighted creature has had ability scores drained by the Colour out of Space's feed attack. Charisma cannot be drained below 1.",
      },
      {
        scalingType: 'flat',
        name: 'Aggressive Behavior',
        description:
          'The colour-blighted creature becomes strangely aggressive toward creatures that do not exude the colors of a Colour out of Space, and gains a +1 bonus on attack rolls and weapon damage rolls against such targets.',
      },
      {
        scalingType: 'flat',
        name: 'Crumbling Death',
        description:
          'Every 24 hours, the colour-blighted creature must make a DC 12 Fortitude save or crumble into fine white ash — instant death. The template is removed if all drained ability scores are restored to their normal values.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #46: Wake of the Watcher',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 424. Simple Template: Copycat Plant (CR +varies)
  {
    id: 'simple-copycat-plant',
    name: 'Simple Template: Copycat Plant',
    description:
      'A copycat plant is an animal that has been transformed into a plant creature, taking on plant-like characteristics including slowed movement, plant immunities, damage reduction against non-slashing weapons, and bleed-inflicting natural attacks. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Bleed 1',
            description:
              'The copycat plant\'s natural attacks inflict 1 point of bleed damage. Bleed from multiple attacks does not stack.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'DR 5/slashing and Bleed 1d6',
            description:
              'The copycat plant gains damage reduction 5/slashing and its natural attacks inflict 1d6 bleed damage. Bleed from multiple attacks does not stack.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'DR 10/slashing and Bleed 2d6',
            description:
              'The copycat plant gains damage reduction 10/slashing and its natural attacks inflict 2d6 bleed damage. Bleed from multiple attacks does not stack.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    typeChange: 'plant',
    typeChangeNote:
      'Gains the plant type but does not alter BAB, saves, or skill points.',
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description:
          'The copycat plant suffers a -10-foot penalty to all speeds as plant tissue replaces its flexible animal musculature.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Legendary Summoners',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 425. Simple Template: Dark Creature (CR +0 or +1)
  {
    id: 'simple-dark-creature',
    name: 'Simple Template: Dark Creature',
    description:
      'A dark creature is a non-outsider touched by the energies of the Plane of Shadow, gaining shadow-blending concealment, darkvision, low-light vision, cold and electricity resistance, spell resistance, and — at higher HD — significant damage reduction. CR increases by +1 only if the base creature has 5 or more HD.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (CR +0)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold and Electricity Resistance 5',
            description:
              'The dark creature gains resistance 5 to cold and electricity. No damage reduction.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold and Electricity Resistance 10, DR 5/magic',
            description:
              'The dark creature gains resistance 10 to cold and electricity, and damage reduction 5/magic.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 1,
        label: '11+ HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Cold and Electricity Resistance 15, DR 10/magic',
            description:
              'The dark creature gains resistance 15 to cold and electricity, and damage reduction 10/magic.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'creature_type_excluded',
        excluded: ['outsider'],
      },
      {
        type: 'special',
        description:
          'Cannot have the air, cold, earth, fire, or water subtype',
      },
    ],
    srFormula: 'new CR + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and Low-Light Vision',
        description:
          'The dark creature gains darkvision 60 feet and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Shadow Blend (Su)',
        description:
          'In any illumination other than bright light, a dark creature blends into the shadows, giving it concealment (20% miss chance). A dark creature that already has concealment has a 50% miss chance instead. This ability does not function in areas of bright light. The dark creature can suspend or resume this ability as a free action.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: "Pathfinder Player Companion: Monster Summoner's Handbook",
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
