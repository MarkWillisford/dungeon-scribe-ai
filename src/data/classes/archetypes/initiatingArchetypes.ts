// Martial initiating archetypes — Path of War and Path of War: Expanded
//
// Two categories:
//   1. Grant-initiating archetypes: add the full initiating system to a standard PF1e class
//   2. Discipline-swap archetypes: modify the discipline list of an existing initiating class
//
// Sources:
//   dsp-pow   — Path of War (Dreamscarred Press)
//   dsp-powe  — Path of War: Expanded (Dreamscarred Press)
//
// MERGE DEPENDENCY: This branch targets main and must be merged AFTER MW/initiating-phase-2.
// The progressionTableKey values below (e.g. 'myrmidon', 'hidden-blade-pow') reference tables
// that live in initiatingProgressionTables.ts, which is introduced in Phase 2.
//
// NAME CONFLICTS:
//   - 'Hidden Blade (Path of War)' — a separate PoW archetype for Rogue distinct from the
//     PF1e 'Hidden Blade' (weapon-concealment focus) already in rogueArchetypes.ts.
//   - 'Monk of the Silver Fist' — distinct from the PF1e 'Silver Fist' in monkArchetypes.ts.
//     The PoW version grants initiating; the PF1e version is a divine-channeling archetype.
//
// TODO: All class features need verification against physical source books.

import { ArchetypeData } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// PART 1 — GRANT-INITIATING ARCHETYPES
// These archetypes add the full initiating system to a non-initiating PF1e class.
// ─────────────────────────────────────────────────────────────────────────────

export const GRANT_INITIATING_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Primal Disciple (Barbarian — Path of War: Expanded)
  // ──────────────────────────────────────────────
  {
    name: 'Primal Disciple',
    className: 'Barbarian',
    description:
      'The primal disciple channels the barbarian\'s savage fury through formal martial training, replacing instinctual rage with disciplined initiating. Where a normal barbarian erupts into berserking violence, the primal disciple directs that same energy through studied martial disciplines.',
    replacedFeatures: [
      'Fast Movement',
      'Rage Powers (alternate list)',
      'Damage Reduction',
      'Tireless Rage',
      'Mighty Rage',
    ],
    modifiedFeatures: ['Rage (reduced uses per day, modified benefits)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The primal disciple gains access to the initiating system using Wisdom as her initiating ability. She gains access to the Golden Lion, Piercing Thunder, Primal Fury, and Thrashing Dragon disciplines. Her initiator level equals her barbarian level.',
      },
      {
        name: 'Primal Surge',
        level: 2,
        description:
          'The primal disciple can channel the energy of rage into her maneuvers. When she enters a rage, she recovers all expended maneuvers as a free action. Her rage bonuses to Strength and Constitution also apply to maneuver attack rolls and damage.',
      },
      {
        name: 'Martial Resilience',
        level: 7,
        description:
          'The primal disciple\'s martial training hardens her body. She gains damage reduction 1/— that increases by 1 every 3 levels. Unlike standard barbarian DR, this is always active and does not require raging.',
      },
      {
        name: 'Savage Maneuver',
        level: 11,
        description:
          'The primal disciple can initiate a strike as part of a rage. When she does so, she may add her rage bonus to damage to the strike\'s damage as a morale bonus.',
      },
      {
        name: 'Primal Mastery',
        level: 20,
        description:
          'The primal disciple reaches the pinnacle of martial rage. She gains the benefits of her highest-level stance and lowest-level stance simultaneously.',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['golden-lion', 'piercing-thunder', 'primal-fury', 'thrashing-dragon'],
      progressionTableKey: 'primal-disciple',
      recoveryMechanics: {
        primary: { type: 'full_round_all' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────
  // 2. Rubato (Bard — Path of War: Expanded)
  // ──────────────────────────────────────────────
  {
    name: 'Rubato',
    className: 'Bard',
    description:
      'The rubato replaces bardic performance\'s inspirational effects with martial rhythm — a fighting style that turns the flow of combat into a kind of music. Where the bard inspires allies with song, the rubato inspires them with perfectly-timed strikes and disciplined movement.',
    replacedFeatures: [
      'Bardic Performance (inspire courage)',
      'Bardic Performance (inspire competence)',
      'Bardic Performance (inspire greatness)',
      'Bardic Performance (inspire heroics)',
      'Well-Versed',
    ],
    modifiedFeatures: ['Bardic Performance (reduced spellcasting advancement)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The rubato gains access to the initiating system using Charisma as her initiating ability. She gains access to the Elemental Flux, Golden Lion, and Mithral Current disciplines. Her initiator level equals her bard level.',
      },
      {
        name: 'Martial Rhythm',
        level: 1,
        description:
          'The rubato can use bardic performance to grant allies within 30 feet a bonus on attack rolls equal to 1/2 her Charisma modifier (minimum +1) instead of the normal inspire courage effect. This functions like a bardic performance and uses rounds of bardic performance.',
      },
      {
        name: 'Combat Cadence',
        level: 5,
        description:
          'When the rubato initiates a strike, she can grant one ally within 30 feet who can see her an immediate free attack at their highest base attack bonus as part of the same action.',
      },
      {
        name: 'Perfect Tempo',
        level: 14,
        description:
          'The rubato\'s martial rhythm reaches perfection. All allies within 30 feet who can see her gain a +2 bonus on damage rolls and may reroll one attack roll per round (taking the better result).',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'CHA',
      ilProgression: 'full',
      disciplines: ['elemental-flux', 'golden-lion', 'mithral-current'],
      progressionTableKey: 'rubato',
      recoveryMechanics: {
        primary: { type: 'gambit' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────
  // 3. Myrmidon (Fighter — Path of War: Expanded)
  // ──────────────────────────────────────────────
  {
    name: 'Myrmidon',
    className: 'Fighter',
    description:
      'The myrmidon forgoes the fighter\'s bonus feat progression in favor of formal initiating training, trading raw martial versatility for the structured power of martial disciplines. A myrmidon is less versatile than a standard fighter but far more dangerous within her chosen disciplines.',
    replacedFeatures: [
      'Bonus Feat (2nd)',
      'Bonus Feat (6th)',
      'Bonus Feat (10th)',
      'Bonus Feat (14th)',
      'Bonus Feat (18th)',
    ],
    modifiedFeatures: ['Bonus Feat (1st, 4th, 8th, 12th, 16th, 20th — non-initiating only)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The myrmidon gains access to the initiating system using Wisdom as her initiating ability. At 1st level, she chooses 4 disciplines from: Broken Blade, Golden Lion, Iron Tortoise, Mithral Current, Piercing Thunder, Primal Fury, Scarlet Throne, Tempest Gale, and Thrashing Dragon. Her initiator level equals her fighter level.',
      },
      {
        name: 'Discipline Selection',
        level: 1,
        description:
          'The myrmidon selects four disciplines from the available list at character creation. This selection is permanent. Her weapon and armor proficiencies from the fighter class count as the associated weapon groups for her chosen disciplines.',
      },
      {
        name: 'Fighter Training',
        level: 5,
        description:
          'The myrmidon\'s martial training and initiating blend seamlessly. She may use her fighter level as her BAB for the purpose of meeting prerequisites for combat feats.',
      },
      {
        name: 'Disciplined Strike',
        level: 9,
        description:
          'When the myrmidon initiates a strike, she may add her Wisdom modifier (minimum +0) to the damage roll as a morale bonus.',
      },
      {
        name: 'Combat Supremacy',
        level: 20,
        description:
          'The myrmidon achieves supreme mastery of both martial disciplines and fighter techniques. Once per round, she may initiate a maneuver as a swift action.',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      // Player chooses 4 at character creation from: broken-blade, golden-lion, iron-tortoise,
      // mithral-current, piercing-thunder, primal-fury, scarlet-throne, tempest-gale, thrashing-dragon
      disciplines: [],
      progressionTableKey: 'myrmidon',
      recoveryMechanics: {
        primary: { type: 'full_round_all' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────
  // 4. Monk of the Silver Fist (Monk — Path of War: Expanded)
  // NOTE: distinct from 'Silver Fist' (divine-themed) in monkArchetypes.ts
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Silver Fist',
    className: 'Monk',
    description:
      'The monk of the silver fist integrates formal martial disciplines into the monk\'s meditative training, replacing ki-based mystical abilities with the structured power of the Eternal Guardian, Iron Tortoise, and Mithral Current schools.',
    replacedFeatures: [
      'Slow Fall',
      'High Jump',
      'Wholeness of Body',
      'Abundant Step',
      'Quivering Palm',
      'Timeless Body',
      'Tongue of the Sun and Moon',
    ],
    modifiedFeatures: ['Ki Pool (reduced — only fuels initiating, not original ki powers)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The monk of the silver fist gains access to the initiating system using Wisdom as her initiating ability. She gains access to the Eternal Guardian, Iron Tortoise, and Mithral Current disciplines. Her initiator level equals her monk level.',
      },
      {
        name: 'Iron Fist',
        level: 3,
        description:
          'The monk of the silver fist\'s unarmed strikes count as silver and cold iron for the purpose of overcoming damage reduction. Her unarmed strike damage die increases by one step when she is in a stance from her disciplines.',
      },
      {
        name: 'Disciplined Body',
        level: 5,
        description:
          'The monk of the silver fist adds her Wisdom modifier to CMD against all combat maneuvers, in addition to her normal modifiers.',
      },
      {
        name: 'Fist of the Guardian',
        level: 11,
        description:
          'The monk of the silver fist can protect adjacent allies as an immediate action. When an adjacent ally would be hit by a melee attack, she may attempt to interpose herself, becoming the target of the attack instead.',
      },
      {
        name: 'Perfect Fist',
        level: 20,
        description:
          'The monk of the silver fist reaches perfect martial attainment. Her unarmed strikes deal damage as if she were two size categories larger, and she may initiate two counters per round instead of one.',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['eternal-guardian', 'iron-tortoise', 'mithral-current'],
      progressionTableKey: 'monk-silver-fist',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────
  // 5. Knight Disciple (Paladin — Path of War: Expanded)
  // ──────────────────────────────────────────────
  {
    name: 'Knight Disciple',
    className: 'Paladin',
    description:
      'The knight disciple trades the paladin\'s divine spellcasting and many of her mercy-based abilities for the martial disciplines of Golden Lion, Iron Tortoise, and Silver Crane, becoming a warrior whose divine power flows through precise martial techniques rather than prayer.',
    replacedFeatures: [
      'Spells',
      'Lay on Hands',
      'Divine Bond',
      'Smite Evil (3rd use)',
      'Mercies (3rd, 6th, 9th, 12th)',
      'Channel Positive Energy',
      'Aura of Justice',
    ],
    modifiedFeatures: ['Smite Evil (2 uses instead of increasing progression)', 'Aura of Courage (halved range)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The knight disciple gains access to the initiating system using Charisma as her initiating ability. She gains access to the Golden Lion, Iron Tortoise, and Silver Crane disciplines. Her initiator level equals her paladin level.',
      },
      {
        name: 'Martial Grace',
        level: 2,
        description:
          'The knight disciple adds her Charisma modifier (minimum +0) as a bonus on saving throws against fear and on Intimidate checks. She also adds it as a dodge bonus to AC when wearing medium or lighter armor.',
      },
      {
        name: 'Divine Strike',
        level: 5,
        description:
          'The knight disciple can channel divine energy through her maneuvers. Once per day per 5 paladin levels, when she initiates a strike, she may add 2d6 points of divine damage. This damage is of no particular energy type and bypasses all energy resistance.',
      },
      {
        name: 'Holy Stance',
        level: 8,
        description:
          'While in a stance from Silver Crane or Golden Lion, the knight disciple radiates a holy aura. Evil creatures within 10 feet take a -2 penalty on attack rolls against her and her allies.',
      },
      {
        name: 'Champion\'s Resolve',
        level: 20,
        description:
          'The knight disciple becomes a paragon of martial devotion. All her stances are always active simultaneously, and her smite evil applies to all attacks in a round rather than one per round.',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'CHA',
      ilProgression: 'full',
      disciplines: ['golden-lion', 'iron-tortoise', 'silver-crane'],
      progressionTableKey: 'knight-disciple',
      recoveryMechanics: {
        primary: { type: 'full_round_all' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────
  // 6. Ambush Hunter (Ranger — Path of War: Expanded)
  // ──────────────────────────────────────────────
  {
    name: 'Ambush Hunter',
    className: 'Ranger',
    description:
      'The ambush hunter replaces the ranger\'s studied enemy tracking with martial disciplines, becoming a deadly striker who uses formal combat techniques instead of favored terrain and favored enemy bonuses.',
    replacedFeatures: [
      'Favored Enemy (1st, 5th, 10th, 15th, 20th)',
      'Spells',
      'Hunter\'s Bond',
      'Quarry',
      'Improved Quarry',
      'Master Hunter',
    ],
    modifiedFeatures: ['Favored Terrain (retained)', 'Track (retained)', 'Swift Tracker (retained)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The ambush hunter gains access to the initiating system using Wisdom as her initiating ability. She gains access to the Golden Lion and Primal Fury disciplines, and may choose one additional discipline from those available to the Stalker or Warlord. Her initiator level equals her ranger level.',
      },
      {
        name: 'Studied Prey',
        level: 1,
        description:
          'As a swift action, the ambush hunter designates one creature she can see as her studied prey. She gains a +2 bonus on Perception checks against the prey and on attack rolls when initiating maneuvers against it. Only one creature can be studied at a time.',
      },
      {
        name: 'Hunter\'s Strike',
        level: 4,
        description:
          'When the ambush hunter initiates a strike against her studied prey, she deals additional damage equal to 1d6 per 4 ranger levels.',
      },
      {
        name: 'Terrain Advantage',
        level: 8,
        description:
          'In her favored terrain, the ambush hunter can initiate maneuvers as a move action instead of a standard action once per round.',
      },
      {
        name: 'Perfect Ambush',
        level: 20,
        description:
          'The ambush hunter achieves perfect synergy between terrain mastery and martial disciplines. She is always treated as flanking her studied prey, and may always act in the surprise round regardless of Perception checks.',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['golden-lion', 'primal-fury'],
      progressionTableKey: 'ambush-hunter',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────
  // 7. Hidden Blade (Path of War) (Rogue — Path of War: Expanded)
  // NOTE: distinct from PF1e 'Hidden Blade' (weapon-concealment) in rogueArchetypes.ts
  // ──────────────────────────────────────────────
  {
    name: 'Hidden Blade (Path of War)',
    className: 'Rogue',
    description:
      'The hidden blade replaces the rogue\'s talent-based progression with formal martial disciplines, becoming a deadly initiating striker who uses the Mithral Current, Thrashing Dragon, and Veiled Moon disciplines to eliminate targets with precision.',
    replacedFeatures: [
      'Rogue Talents (4th)',
      'Rogue Talents (8th)',
      'Rogue Talents (12th)',
      'Rogue Talents (16th)',
      'Master Strike',
    ],
    modifiedFeatures: ['Sneak Attack (retained but modified by maneuver options)'],
    newFeatures: [
      {
        name: 'Initiating',
        level: 1,
        description:
          'The hidden blade gains access to the initiating system using Intelligence as her initiating ability. She gains access to the Mithral Current, Thrashing Dragon, and Veiled Moon disciplines, and may choose one additional bonus discipline from those available to the Stalker or Harbinger. Her initiator level equals her rogue level.',
      },
      {
        name: 'Deadly Technique',
        level: 2,
        description:
          'The hidden blade can apply her sneak attack damage to strikes she initiates when the conditions for sneak attack are met. She may also deliver sneak attack damage on the first attack of a full-attack sequence even if the target is not flanked or denied its Dexterity bonus, provided she initiated a boost this round.',
      },
      {
        name: 'Shadow Step',
        level: 6,
        description:
          'As a swift action, the hidden blade can teleport up to 10 feet to an unoccupied space she can see. This does not provoke attacks of opportunity and counts as movement for the purpose of maneuver prerequisites.',
      },
      {
        name: 'Perfect Infiltration',
        level: 10,
        description:
          'The hidden blade\'s mastery of veiled disciplines allows her to pass through any barrier. She can move through solid objects for up to 5 feet during her movement once per round.',
      },
      {
        name: 'Death Strike',
        level: 20,
        description:
          'The hidden blade replaces master strike with a truly lethal technique. Once per encounter, when she initiates a strike and the target fails a Fortitude save (DC 10 + 1/2 her level + her Intelligence modifier), the target is killed outright. Creatures immune to death effects take 10d6 precision damage instead.',
      },
    ],
    initiating: {
      type: 'Martial',
      initiatingAbility: 'INT',
      ilProgression: 'full',
      disciplines: ['mithral-current', 'thrashing-dragon', 'veiled-moon'],
      progressionTableKey: 'hidden-blade-pow',
      recoveryMechanics: {
        primary: { type: 'swift_one' },
      },
    },
    source: 'dsp-powe',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PART 2 — DISCIPLINE-SWAP ARCHETYPES
// These archetypes modify the discipline list of an existing initiating class.
// They use the disciplineSwaps field; all other class mechanics remain unchanged.
// Entries marked TODO need source book verification for exact gained/lost disciplines.
// ─────────────────────────────────────────────────────────────────────────────

export const DISCIPLINE_SWAP_ARCHETYPES: ArchetypeData[] = [
  // ── STALKER ARCHETYPES ───────────────────────────────────────────────────

  {
    name: 'Brutal Slayer',
    className: 'Stalker',
    description:
      'The brutal slayer trades the stalker\'s subtle veiled-moon techniques and thrashing-dragon aggression for the dark power of Black Seraph and the primal fury of Primal Fury disciplines.',
    replacedFeatures: ['Discipline Access (Thrashing Dragon)'],
    modifiedFeatures: ['Discipline Access'],
    newFeatures: [],
    disciplineSwaps: {
      gained: ['black-seraph', 'primal-fury'],
      lost: ['thrashing-dragon', 'veiled-moon'],
    },
    source: 'dsp-pow',
  },

  // ── WARDER ARCHETYPES ────────────────────────────────────────────────────

  {
    name: 'Fiendbound Marauder',
    className: 'Warder',
    description:
      'The fiendbound marauder makes a pact with fiendish forces, replacing the warder\'s protective disciplines with the dark arts of Black Seraph, Cursed Razor, and Eternal Guardian.',
    replacedFeatures: ['Discipline Access (Golden Lion, Iron Tortoise)'],
    modifiedFeatures: ['Discipline Access', 'Warder\'s Aegis (fiend-aligned flavor)'],
    newFeatures: [],
    disciplineSwaps: {
      gained: ['black-seraph', 'cursed-razor', 'eternal-guardian'],
      lost: ['golden-lion', 'iron-tortoise'],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Ordained Defender',
    className: 'Warder',
    description:
      'The ordained defender dedicates herself to a divine cause, adding Eternal Guardian and Black Seraph or Silver Crane to her discipline list based on alignment. Evil-aligned ordained defenders gain Black Seraph; good-aligned gain Silver Crane.',
    replacedFeatures: ['Discipline Access (varies by alignment)'],
    modifiedFeatures: ['Discipline Access', 'Warder\'s Aegis (alignment-based restrictions)'],
    newFeatures: [
      {
        name: 'Divine Discipline',
        level: 1,
        description:
          'Good-aligned ordained defenders add Silver Crane and Eternal Guardian to their discipline list. Evil-aligned ordained defenders add Black Seraph and Eternal Guardian instead. The exact disciplines replaced depend on the character\'s alignment — TODO: verify against source book.',
      },
    ],
    disciplineSwaps: {
      gained: ['eternal-guardian'],
      lost: [],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Dervish Defender',
    className: 'Warder',
    description:
      'The dervish defender trades some of the warder\'s heavy defensive discipline access for the fluid speed of Mithral Current, becoming a mobile guardian rather than a static fortress.',
    replacedFeatures: ['Discipline Access (varies — TODO: verify)'],
    modifiedFeatures: ['Discipline Access', 'Armored Rebuke (can trigger on movement)'],
    newFeatures: [],
    disciplineSwaps: {
      gained: ['mithral-current'],
      lost: [],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Zweihander Sentinel',
    className: 'Warder',
    description:
      'The zweihander sentinel wields massive two-handed weapons instead of a sword and shield, adding the Piercing Thunder discipline to her repertoire.',
    replacedFeatures: ['Proficiency with Tower Shields', 'Discipline Access (varies — TODO: verify)'],
    modifiedFeatures: ['Discipline Access', 'Defensive Focus (modified for two-handed weapons)'],
    newFeatures: [
      {
        name: 'Two-Handed Defense',
        level: 1,
        description:
          'The zweihander sentinel\'s two-handed weapon technique grants her a bonus to AC equal to 1/2 her Strength modifier (minimum +0) when wielding a two-handed weapon. She cannot benefit from shield bonuses.',
      },
    ],
    disciplineSwaps: {
      gained: ['piercing-thunder'],
      lost: [],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Hawkguard',
    className: 'Warder',
    description:
      'The hawkguard specializes in ranged defensive combat, watching over allies at distance. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Discipline Access — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Sworn Defender',
    className: 'Warder',
    description:
      'The sworn defender binds herself to a single ward target above all others. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Warder\'s Aegis (single target only, enhanced) — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-pow',
  },

  // ── WARLORD ARCHETYPES ───────────────────────────────────────────────────

  {
    name: 'Bannerman',
    className: 'Warlord',
    description:
      'The bannerman fights beneath a rallying standard, inspiring allies through its presence. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Gambits (banner-themed variants) — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Bushi',
    className: 'Warlord',
    description:
      'The bushi follows a warrior\'s code of honor, fighting with discipline and tradition. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Gambits (honor-based conditions) — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-pow',
  },

  {
    name: 'Steelfist Commando',
    className: 'Warlord',
    description:
      'The steelfist commando leads from the front with an aggressive, unarmed combat style. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Discipline Access — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-powe',
  },

  {
    name: 'Vanguard Commander',
    className: 'Warlord',
    description:
      'The vanguard commander leads charges and breakthrough assaults. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Tactical Presence (charge-focused) — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-pow',
  },

  // ── ZEALOT ARCHETYPES ────────────────────────────────────────────────────

  {
    name: 'Discordant Crusader',
    className: 'Zealot',
    description:
      'The discordant crusader channels chaotic conviction, replacing the zealot\'s ordered devotion with anarchic fervor. TODO: Exact discipline swaps need source book verification.',
    replacedFeatures: [],
    modifiedFeatures: ['Conviction Pool (chaos-aligned flavor) — TODO: verify'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: [],
    },
    source: 'dsp-powe',
  },

  {
    name: 'Void Prophet',
    className: 'Zealot',
    description:
      'The void prophet embraces the power of emptiness and annihilation, trading Silver Crane\'s healing focus for an alternate discipline. TODO: Exact discipline swap needs source book verification.',
    replacedFeatures: ['Discipline Access (Silver Crane)'],
    modifiedFeatures: ['Discipline Access — TODO: verify exact replacement'],
    newFeatures: [],
    disciplineSwaps: {
      gained: [],
      lost: ['silver-crane'],
    },
    source: 'dsp-powe',
  },
];

export const INITIATING_ARCHETYPES: ArchetypeData[] = [
  ...GRANT_INITIATING_ARCHETYPES,
  ...DISCIPLINE_SWAP_ARCHETYPES,
];
