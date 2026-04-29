import { ArchetypeData } from '../types';

export const WARDER_WARLORD_POW_ARCHETYPES: ArchetypeData[] = [
  // ─── WARDER ARCHETYPES ───────────────────────────────────────────────

  {
    name: 'Sworn Protector',
    className: 'Warder',
    description:
      'The sworn protector is a warder who focuses her defensive talents on protecting a single chosen ward, replacing broad battlefield control with intense personal guardianship. She selects individuals to protect and gains powerful abilities to intercept attacks and share her defensive counters with those she guards.',
    replacedFeatures: ['Aegis', 'Bonus Feat (3rd)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Guardianship',
        level: 1,
        description:
          'At 1st level, the sworn protector may select a ward, a person whom she must protect no matter what the cost. When in combat within 10 feet of the ward, the ward gains a +1 morale bonus to their AC and saving throws. This bonus increases by +1 at 5th, 9th, 13th, and 17th levels. The sworn protector adds her guardianship bonus to attack and damage rolls while within range of her ward. The range of guardianship increases by 10 feet at 6th and 12th levels. The sworn protector can have one ward at 1st level, a second at 8th level, and a third at 15th level. Establishing a ward relationship requires ten minutes of discussion and practice. This ability replaces aegis.',
      },
      {
        name: 'Defensive Intercept',
        level: 1,
        description:
          "The sworn protector can use this ability a number of times per day equal to 1 + the sworn protector's warder initiation modifier. As an immediate action, the sworn protector moves up to her base speed to a space within 10 feet of a ward being attacked, subject to attacks of opportunity.",
      },
      {
        name: 'Shared Counter',
        level: 3,
        description:
          'At 3rd level, the sworn protector can use readied counters with a range of personal to protect another as long as he is adjacent to their position. The sworn protector may use this ability with the extended defense class feature and may combine it with defensive intercept as part of the same immediate action. This ability replaces the bonus feat gained at 3rd level.',
      },
    ],
    // Sworn Protector does not swap any disciplines from the base Warder list.
    source: 'Path of War',
  },

  // ─── WARLORD ARCHETYPES ──────────────────────────────────────────────

  {
    name: 'Bannerman',
    className: 'Warlord',
    description:
      'The bannerman is a warlord archetype that combines martial prowess with inspirational leadership. Wielding a banner alongside weapons to inspire allies while engaging enemies in combat, the bannerman embodies a commander who balances direct combat participation with tactical influence.',
    replacedFeatures: ['Bonus Feat (1st)', 'Battle Prowess', 'Dual Boost'],
    modifiedFeatures: ['Tactical Presence'],
    newFeatures: [
      {
        name: 'Courageous Defense',
        level: 1,
        description:
          'At 1st level, when fighting with ranged weapons, one-handed or light weapons, or a banner with a buckler in medium or lighter armor, the bannerman gains a +1 dodge bonus to his Armor Class per four warlord levels. This ability replaces the 1st-level bonus feat.',
      },
      {
        name: 'Tactical Presence (Bannerman)',
        level: 2,
        description:
          "The bannerman modifies the warlord's tactical presence ability with the following options: Diplomat's Presence (2nd level) grants a +4 competence bonus to Bluff, Diplomacy, Intimidate, and Sense Motive rolls. Fearsome Presence (13th level) causes enemies within 30 feet to be filled with dread as if under a fear spell. Commander's Presence (17th level) allows the bannerman to lend a readied maneuver to an ally within 30 feet as a swift action.",
      },
      {
        name: 'Inspiring Banner',
        level: 5,
        description:
          "At 5th level, when the bannerman's banner is visible and he is using a Golden Lion stance, all allies within 60 feet receive a +2 morale bonus on saving throws against fear and fatigue and a +2 morale bonus on attack and damage rolls. These bonuses increase by +1 at 12th and 19th levels. This ability replaces battle prowess.",
      },
      {
        name: 'Share Boost',
        level: 6,
        description:
          'At 6th level, the bannerman may once per day initiate a boost as an immediate action to utilize a boost for an ally initiating a maneuver. He gains additional uses at 12th and 18th levels. This ability replaces dual boost.',
      },
    ],
    disciplineSwaps: {
      // Bannerman forces Piercing Thunder as the 6th discipline choice,
      // removing the option of Tempest Gale. No base 5 disciplines are changed.
      gained: ['piercing-thunder'],
      lost: ['tempest-gale'],
    },
    source: 'Path of War',
  },

  {
    name: 'Bushi',
    className: 'Warlord',
    description:
      "Honorable and noble warriors who specialize in Iaijutsu, the art of the draw cut. Bushi follow the code of bushido and exemplify the virtues of righteousness, courage, benevolence, respect, honesty, honor, and loyalty. The bushi is a martial class template suitable for use with the Stalker, Warlord, and Warder classes. When applied to a Stalker, it trades standard action recovery, blending/improved blending, and the 1st-level stalker art. When applied to a Warder, it trades standard action recovery, bonus feats (3rd/8th), heavy armor proficiency, and clad in steel/steel defense/born of steel. When applied to a Warlord (shown here), it trades standard action recovery, bonus feats (1st/6th), and tactical presence/dual presence/warlord's presence.",
    replacedFeatures: [
      'Standard Action Recovery',
      'Bonus Feat (1st)',
      'Bonus Feat (6th)',
      'Tactical Presence',
      'Dual Tactical Presence',
      "Warlord's Presence",
    ],
    modifiedFeatures: ['Maneuver Recovery', 'Maneuvers'],
    newFeatures: [
      {
        name: 'Iaido Training',
        level: 1,
        description:
          'At 1st level, the bushi gains Exotic Weapon Proficiency (katana) and Exotic Weapon Proficiency (wakizashi) as bonus feats without needing to meet their prerequisites.',
      },
      {
        name: 'Quick Draw',
        level: 1,
        description:
          'At 1st level, the bushi gains the Quick Draw feat as a bonus feat. Additionally, the bushi may sheathe his weapon without provoking attacks of opportunity.',
      },
      {
        name: 'Iaido',
        level: 1,
        description:
          'Alongside normal recovery, the bushi may sheathe a weapon as a move action to recover one expended maneuver per round. The bushi cannot use a maneuver in the same round it was recovered this way.',
      },
      {
        name: 'Mixed Combat',
        level: 6,
        description:
          'At 6th level, the bushi gains the Mixed Combat feat. The bushi is considered to be threatening all adjacent squares even if his weapon is sheathed, and can draw his weapon when making any attack.',
      },
      {
        name: 'Bushido',
        level: 1,
        description:
          'The bushi gains access to seven supernatural bushido abilities selectable at specific level intervals: Benevolence (swift action grants allies within 30 feet temporary hit points equal to initiator level for 1 minute), Courage (immunity to non-magical fear, +4 bonus on fear saves, can grant bonus to allies within 60 feet), Honesty (discern lies spell-like ability, usable rounds per day equal to initiation modifier), Honor (after hitting a creature, gain +1 bonus on attack and damage rolls against that creature, increasing by +1 per four initiator levels), Loyalty (standard action to mark an ally with deathwatch and status awareness), Respect (aid another grants bonus equal to initiation modifier instead of normal bonus), and Righteousness (at-will detect chaos, detect evil, detect good, and detect law).',
      },
    ],
    // Bushi trades one of the base class's available disciplines (player choice) for Mithral Current.
    // Also gains Perform as a class skill.
    disciplineSwaps: {
      gained: ['mithral-current'],
      lost: [], // player chooses which base discipline to trade — no fixed loss
    },
    source: 'Path of War',
  },

  {
    name: 'Steelfist Commando',
    className: 'Warlord',
    description:
      'Steelfist commandos are known to be leaders of tactical operative groups who rely on their bodies as weapons rather than heavy armaments, making them suitable for espionage and stealth missions. They specialize in unarmed combat and covert operations.',
    replacedFeatures: [
      'Weapon and Armor Proficiency',
      'Bonus Feat (1st)',
      'Bonus Feat (10th)',
      'Battle Prowess',
    ],
    modifiedFeatures: ['Maneuvers', 'Bonus Feats'],
    newFeatures: [
      {
        name: 'Weapon and Armor Proficiency (Steelfist Commando)',
        level: 1,
        description:
          'The steelfist commando is proficient with simple and martial weapons, monk weapons, and light armor only. She is not proficient with shields. This replaces the standard warlord weapon and armor proficiencies.',
      },
      {
        name: 'Unarmed Combat',
        level: 1,
        description:
          'At 1st level, the steelfist commando gains Improved Unarmed Strike as a bonus feat. At 3rd level, she gains Greater Unarmed Strike. Her unarmed strikes function as both manufactured and natural weapons for the purpose of enhancement. This ability replaces the 1st-level bonus feat.',
      },
      {
        name: 'Dodge Bonus',
        level: 2,
        description:
          'At 2nd level, the steelfist commando gains a +1 dodge bonus to AC. This bonus increases at 6th, 10th, 14th, and 18th levels to a maximum of +5.',
      },
      {
        name: 'Commando Prowess',
        level: 5,
        description:
          'At 5th level, while in a martial stance, the steelfist commando gains a +1 competence bonus to attack and damage rolls, a +2 bonus to CMB and CMD, and adds her initiation modifier to Stealth checks. These bonuses improve at 12th and 19th levels. This ability replaces battle prowess.',
      },
      {
        name: 'Powerful Pugilist',
        level: 8,
        description:
          "At 8th level, the steelfist commando's unarmed strikes treat her as one size larger for determining damage and for CMB and CMD. She also deals an additional 2d6 precision damage against flat-footed targets. This ability replaces the 10th-level bonus feat.",
      },
    ],
    disciplineSwaps: {
      gained: ['broken-blade', 'steel-serpent', 'riven-hourglass'],
      lost: ['primal-fury', 'scarlet-throne', 'tempest-gale'],
      // Riven Hourglass replaces the Piercing Thunder/Tempest Gale choice;
      // Broken Blade and Steel Serpent replace Primal Fury and Scarlet Throne.
    },
    source: 'Path of War',
  },

  {
    name: 'Vanguard Commander',
    className: 'Warlord',
    description:
      'The vanguard commander leads the front of the assault with heavier armor and the protection of a shield. These warriors are known for their bravery, marching in first and waving the flag to victory.',
    replacedFeatures: [
      'Weapon and Armor Proficiency',
      'Bonus Feat (1st)',
      'Force of Personality',
      'Battle Prowess',
      'Dual Boost',
      'Tactical Assistance',
    ],
    modifiedFeatures: ['Maneuvers', 'Gambits'],
    newFeatures: [
      {
        name: 'Weapon and Armor Proficiency (Vanguard Commander)',
        level: 1,
        description:
          'The vanguard commander is proficient with all simple and martial weapons, all armor, and shields (except tower shields). This replaces the standard warlord weapon and armor proficiencies.',
      },
      {
        name: 'Improved Shield Bash',
        level: 1,
        description:
          'At 1st level, the vanguard commander gains Improved Shield Bash as a bonus feat. This replaces the standard 1st-level bonus feat.',
      },
      {
        name: "Guardian's Gambit",
        level: 1,
        description:
          'The vanguard commander adds a new gambit option: Risk — a successful charging shield bash attack. Reward — the warlord and all allies within 30 feet may make a free 5-foot step, even if they have already made one this turn.',
      },
      {
        name: 'Daring Defense',
        level: 1,
        description:
          'The vanguard commander adds his warlord initiation modifier to his Reflex save bonus. This ability replaces force of personality.',
      },
      {
        name: 'Defensive Prowess',
        level: 5,
        description:
          'While in a Golden Lion or Iron Tortoise stance, the vanguard commander reduces his armor check penalty by 1, and gains a +1 competence bonus to his shield bonus and CMD. These bonuses improve at 12th and 19th levels. This ability replaces battle prowess.',
      },
      {
        name: 'Heightened Defenses',
        level: 6,
        description:
          'The vanguard commander may use this ability a number of times per day equal to 1 + his initiation modifier. He may initiate counters without using an immediate action, though he may only do so a maximum of once per round. This ability replaces dual boost.',
      },
      {
        name: "Vanguard's Shield",
        level: 10,
        description:
          'The vanguard commander may make a shield bash as a free action at his full base attack bonus when initiating melee strikes or counters against adjacent foes. This ability replaces tactical assistance.',
      },
    ],
    disciplineSwaps: {
      gained: ['iron-tortoise', 'eternal-guardian'],
      lost: ['solar-wind', 'tempest-gale'],
      // Iron Tortoise replaces Solar Wind; Eternal Guardian replaces the
      // Piercing Thunder/Tempest Gale choice.
    },
    source: 'Path of War',
  },
];
