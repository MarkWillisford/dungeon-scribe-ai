import { ArchetypeData } from '../types';

export const FIGHTER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Archer
  // ──────────────────────────────────────────────
  {
    name: 'Archer',
    className: 'Fighter',
    description:
      'The archer dedicates his skills and training to the mastery of bows, perfecting his aim through countless hours of practice on ranges, in the hunt, and on the battlefield.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Weapon Mastery (must select a type of bow)'],
    newFeatures: [
      {
        name: 'Hawkeye',
        level: 2,
        description:
          'The archer gains a +1 bonus on Perception checks, and the range increment for any bow he uses increases by 5 feet. These bonuses increase by +1 and 5 feet for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Trick Shot',
        level: 3,
        description:
          'At 3rd level, an archer can choose one of the following combat maneuvers or actions: disarm, feint, or sunder. He can perform this action with a bow against any target within 30 feet, with a -4 penalty to his CMB. Every 4 levels beyond 3rd, he may choose an additional trick shot. At 11th level, he may also choose from bull rush, grapple, and trip.',
        effects: [],
      },
      {
        name: 'Expert Archer',
        level: 5,
        description:
          'At 5th level, an archer gains a +1 bonus on attack and damage rolls with bows. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Safe Shot',
        level: 9,
        description:
          'At 9th level, an archer does not provoke attacks of opportunity when making ranged attacks with a bow.',
        effects: [],
      },
      {
        name: 'Evasive Archer',
        level: 13,
        description:
          'At 13th level, an archer gains a +2 dodge bonus to AC against ranged attacks. This bonus increases to +4 at 17th level.',
        effects: [],
      },
      {
        name: 'Volley',
        level: 17,
        description:
          'At 17th level, as a full-round action, an archer can make a single bow attack at his highest base attack bonus against any number of creatures in a 15-foot-radius burst, making separate attack and damage rolls for each creature.',
        effects: [],
      },
      {
        name: 'Ranged Defense',
        level: 19,
        description:
          'At 19th level, an archer gains DR 5/- against ranged attacks. In addition, as an immediate action, he can catch an arrow fired at him and shoot it back at the attacker, using the original attack roll to determine the result.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Armor Master
  // ──────────────────────────────────────────────
  {
    name: 'Armor Master',
    className: 'Fighter',
    description:
      'The armor master focuses on mastering heavy armor and shields, becoming an unstoppable bulwark who turns defense into an art form.',
    replacedFeatures: [
      'Bravery',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deflective Shield',
        level: 2,
        description:
          'At 2nd level, an armor master gains a +1 bonus to his touch AC. This bonus increases by +1 for every 4 levels beyond 2nd, to a maximum of +6 at 18th level. However, this bonus cannot exceed the sum of the armor and enhancement bonuses of the shield he is currently carrying.',
        effects: [],
      },
      {
        name: 'Armored Defense',
        level: 5,
        description:
          'At 5th level, an armor master gains DR 1/- when wearing light armor, DR 2/- when wearing medium armor, and DR 3/- when wearing heavy armor. At 19th level, this DR increases to 4/-, 8/-, and 12/- respectively. This DR stacks with that provided by adamantine armor.',
        effects: [],
      },
      {
        name: 'Fortification',
        level: 9,
        description:
          'At 9th level, the armor master gains light fortification (25% chance to negate critical hits and sneak attacks). At 13th level, this increases to moderate fortification (50%). This does not stack with the fortification armor special ability.',
        effects: [],
      },
      {
        name: 'Indestructible',
        level: 20,
        description:
          'At 20th level, an armor master gains complete immunity to critical hits and sneak attacks while wearing armor. In addition, unless his armor has the fragile quality, it cannot be sundered while he is wearing it.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 3. Brawler (Fighter)
  // ──────────────────────────────────────────────
  {
    name: 'Brawler (Fighter)',
    className: 'Fighter',
    description:
      'The brawler is a close-combat specialist who excels at aggressive, in-your-face tactics, using close weapons and combat maneuvers to forcefully control opponents on the battlefield.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Weapon Mastery (must select a close weapon)'],
    newFeatures: [
      {
        name: 'Close Control',
        level: 2,
        description:
          'At 2nd level, a brawler gains a +1 bonus on bull rush, drag, and reposition combat maneuver checks and a +1 bonus to CMD when defending against those maneuvers. These bonuses increase by +1 for every 4 levels after 2nd, to a maximum of +5 at 18th level.',
        effects: [],
      },
      {
        name: 'Close Combatant',
        level: 3,
        description:
          'At 3rd level, a brawler gains a +1 bonus on attack rolls and a +3 bonus on damage rolls with weapons in the close weapon group. Both of these bonuses increase by +1 for every 4 levels beyond 3rd, to a maximum of +5 on attack and +7 on damage at 19th level.',
        effects: [],
      },
      {
        name: 'Menacing Stance',
        level: 7,
        description:
          'At 7th level, a brawler constantly harries and threatens his enemies. As long as he is adjacent to them, they suffer a -1 penalty on attack rolls and a -4 penalty on concentration checks. These penalties increase by -1 for every 4 levels after 7th.',
        effects: [],
      },
      {
        name: 'No Escape',
        level: 9,
        description:
          "At 9th level, taking a 5-foot step out of the brawler's threatened area or using the withdraw action from a square he threatens provokes an attack of opportunity from the brawler.",
        effects: [],
      },
      {
        name: 'Stand Still',
        level: 13,
        description:
          'At 13th level, a brawler gains Stand Still as a bonus feat, even if he does not have the Combat Reflexes feat. He adds half his fighter level to combat maneuver checks made using the Stand Still feat.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 4. Cad
  // ──────────────────────────────────────────────
  {
    name: 'Cad',
    className: 'Fighter',
    description:
      'The cad eschews honor and order in favor of victory by any means necessary, using underhanded tactics and dirty tricks to overcome his opponents.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 1',
      'Weapon Training 3',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dirty Maneuvers',
        level: 2,
        description:
          'At 2nd level, a cad gains a +1 bonus on disarm, dirty trick, steal, and trip combat maneuver checks and a +1 bonus to CMD when defending against those maneuvers. These bonuses increase by +1 for every 4 levels after 2nd.',
        effects: [],
      },
      {
        name: 'Catch Off-Guard',
        level: 3,
        description:
          'At 3rd level, a cad gains the Catch Off-Guard feat as a bonus feat. At 7th level, he gains the Improvised Weapon Mastery feat as a bonus feat. He need not meet the prerequisites for these feats.',
        effects: [],
      },
      {
        name: 'Payback',
        level: 5,
        description:
          'At 5th level, a cad gains a +1 bonus on attack and damage rolls against any creature that has attacked the cad since the beginning of his last turn. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Deadly Surprise',
        level: 7,
        description:
          'At 7th level, when a cad successfully performs a dirty trick combat maneuver, he can deal weapon damage to the target as a swift action. The target must be within melee reach and the cad must be wielding a weapon.',
        effects: [],
      },
      {
        name: 'Razor-Sharp Chair Leg',
        level: 9,
        description:
          'At 9th level, a cad can use an improvised weapon with the same critical threat range and critical multiplier as the manufactured weapon it most closely resembles.',
        effects: [],
      },
      {
        name: 'Craven Combatant',
        level: 11,
        description:
          'At 11th level, when a cad uses the withdraw action, he can make a single melee attack at his highest base attack bonus at any point during his movement. He also gains a +2 dodge bonus to AC against attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Sweeping Prank',
        level: 13,
        description:
          'At 13th level, a cad can use a dirty trick combat maneuver in place of a melee attack at his highest base attack bonus during a full attack action. If the maneuver succeeds, the cad can immediately attempt to trip the target as a free action.',
        effects: [],
      },
      {
        name: 'Treacherous Blow',
        level: 15,
        description:
          'At 15th level, when a cad confirms a critical hit, the target must succeed on a Fortitude save (DC 10 + 1/2 fighter level + Strength modifier) or be stunned for 1 round.',
        effects: [],
      },
      {
        name: 'Ultimate Payback',
        level: 20,
        description:
          'At 20th level, when a cad makes an attack against a creature that has attacked him since the start of his last turn, the critical threat range of the attack is doubled. This stacks with Improved Critical and similar effects.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 5. Corsair
  // ──────────────────────────────────────────────
  {
    name: 'Corsair',
    className: 'Fighter',
    description:
      'A corsair is a fighter trained in the art of shipboard combat, comfortable fighting on heaving decks and using the tight quarters of a ship to her advantage.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Pirate Weapons',
        level: 1,
        description:
          'A corsair gains proficiency with the cutlass (treat as scimitar), hook hand, and boarding pike. She adds these weapons to her close weapon group for weapon training purposes.',
        effects: [],
      },
      {
        name: 'Deck Fighting',
        level: 3,
        description:
          'At 3rd level, a corsair gains a +1 bonus on attack and damage rolls while aboard a ship or in any aquatic environment. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Armored Pirate',
        level: 7,
        description:
          'At 7th level, a corsair gains a +1 bonus to AC when wearing light or no armor. This bonus increases by +1 for every 4 levels beyond 7th. She also does not take armor check penalties on Acrobatics, Climb, and Swim checks while wearing light armor.',
        effects: [],
      },
      {
        name: 'Improved Deck Fighting',
        level: 11,
        description:
          'At 11th level, a corsair does not suffer any penalties for fighting in difficult terrain on a ship. She can also move at full speed on a ship without needing to make Acrobatics checks, and she gains a +2 bonus to CMD against bull rush and trip attempts while aboard a ship.',
        effects: [],
      },
    ],
    source: 'Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 6. Crossbowman
  // ──────────────────────────────────────────────
  {
    name: 'Crossbowman',
    className: 'Fighter',
    description:
      'The crossbowman has honed his skill with the crossbow to deadly effect, able to reload with astonishing speed and strike targets with lethal precision at extreme range.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Weapon Mastery (must select a type of crossbow)'],
    newFeatures: [
      {
        name: 'Deadshot',
        level: 3,
        description:
          'At 3rd level, when a crossbowman attacks with a crossbow as a readied action, he may add half his Dexterity bonus (minimum +1) to his damage roll. This extra damage is precision damage.',
        effects: [],
      },
      {
        name: 'Crossbow Expert',
        level: 5,
        description:
          'At 5th level, a crossbowman gains a +1 bonus on attack and damage rolls with crossbows. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Improved Deadshot',
        level: 7,
        description:
          'At 7th level, when a crossbowman attacks with a crossbow as a readied action, he adds his full Dexterity bonus to his damage roll (instead of half).',
        effects: [],
      },
      {
        name: 'Quick Sniper',
        level: 9,
        description:
          'At 9th level, a crossbowman gains a +2 bonus on Stealth checks when sniping, and the penalty on Stealth checks from sniping is reduced to -10 (from -20).',
        effects: [],
      },
      {
        name: 'Greater Deadshot',
        level: 11,
        description:
          'At 11th level, when a crossbowman attacks with a crossbow as a readied action, he adds twice his Dexterity bonus to his damage roll.',
        effects: [],
      },
      {
        name: 'Safe Shot',
        level: 13,
        description:
          'At 13th level, a crossbowman does not provoke attacks of opportunity when making ranged attacks with a crossbow.',
        effects: [],
      },
      {
        name: 'Pinpoint Targeting',
        level: 15,
        description:
          "At 15th level, as a standard action, the crossbowman can make a single attack with a crossbow that ignores the target's armor, natural armor, and shield bonuses to AC (including enhancement bonuses to those values).",
        effects: [],
      },
      {
        name: 'Meteor Shot',
        level: 17,
        description:
          'At 17th level, as a standard action, the crossbowman can fire a single bolt at a target within range. If the bolt hits, it deals normal damage and strikes all creatures in a line behind the target within 15 feet, requiring separate attack rolls for each.',
        effects: [],
      },
      {
        name: 'Penetrating Shot',
        level: 19,
        description:
          "At 19th level, the crossbowman's ranged attacks with crossbows ignore all damage reduction, except DR/-. In addition, when he confirms a critical hit, the target must make a Fortitude save or be stunned for 1 round.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 7. Dirty Fighter
  // ──────────────────────────────────────────────
  {
    name: 'Dirty Fighter',
    className: 'Fighter',
    description:
      'The dirty fighter specializes in underhanded combat maneuvers, using dirty tricks to blind, sicken, and entangle foes rather than relying solely on raw martial prowess.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sidestep',
        level: 2,
        description:
          'At 2nd level, a dirty fighter gains a +1 dodge bonus to AC against attacks of opportunity provoked by performing a dirty trick combat maneuver. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Dirty Trick Training',
        level: 3,
        description:
          'At 3rd level, a dirty fighter gains a +1 bonus on CMB checks and to CMD for dirty trick combat maneuvers. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Dirty Trick Expert',
        level: 7,
        description:
          'At 7th level, a dirty fighter can perform a dirty trick combat maneuver in place of a melee attack at his highest base attack bonus during a full attack action. He does not provoke attacks of opportunity when performing dirty tricks.',
        effects: [],
      },
      {
        name: 'Dirty Trick Master',
        level: 11,
        description:
          'At 11th level, a dirty fighter can apply two conditions simultaneously when he successfully performs a dirty trick combat maneuver. The target must spend a separate action to remove each condition.',
        effects: [],
      },
      {
        name: 'Devastating Dirty Trick',
        level: 15,
        description:
          "At 15th level, when a dirty fighter successfully performs a dirty trick combat maneuver that exceeds the target's CMD by 5 or more, the duration of the condition increases by 1d4 rounds.",
        effects: [],
      },
      {
        name: 'Supreme Dirty Trick',
        level: 19,
        description:
          'At 19th level, a dirty fighter can perform a dirty trick as a swift action once per round. Any conditions he applies via dirty tricks require a standard action (instead of a move action) to remove.',
        effects: [],
      },
    ],
    source: 'Villain Codex',
  },

  // ──────────────────────────────────────────────
  // 8. Dragoon
  // ──────────────────────────────────────────────
  {
    name: 'Dragoon',
    className: 'Fighter',
    description:
      'A dragoon is a mounted fighter trained in the art of spear and lance combat, combining cavalry charges with devastating polearm techniques.',
    replacedFeatures: [
      'Bravery',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Training 1',
      'Armor Training 2',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Skilled Rider',
        level: 2,
        description:
          'At 2nd level, a dragoon gains a +1 bonus on Ride checks and to the DC of Ride checks attempted against his mount. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Spear Training',
        level: 5,
        description:
          'At 5th level, a dragoon gains a +1 bonus on attack and damage rolls with spears and polearms. This bonus increases by +1 for every 4 levels beyond 5th. He also gains the benefit of the Mounted Combat feat when wielding a spear or lance while mounted.',
        effects: [],
      },
      {
        name: 'Spinning Lance',
        level: 7,
        description:
          'At 7th level, a dragoon can use a lance one-handed even when not mounted. He can also use a spear or lance to attack foes on any side of him while mounted, rather than only in front of him.',
        effects: [],
      },
      {
        name: 'Banner',
        level: 9,
        description:
          'At 9th level, a dragoon can fly a banner from his lance or spear. As long as the banner is visible, allies within 60 feet gain a +2 morale bonus on saving throws against fear and a +1 morale bonus on attack rolls made during a charge.',
        effects: [],
      },
      {
        name: 'Piercing Lance',
        level: 11,
        description:
          'At 11th level, when a dragoon confirms a critical hit with a spear or lance on a mounted charge, the attack deals triple damage (or quadruple damage with a lance). The target must also succeed on a Fortitude save or be stunned for 1 round.',
        effects: [],
      },
      {
        name: 'Leaping Lance',
        level: 15,
        description:
          "At 15th level, the dragoon and his mount can make a charge over difficult terrain. He can leap from his mount at the end of a charge, adding the mount's speed to his own charge distance and making a single devastating attack at the end of the leap.",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 9. Eldritch Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Guardian',
    className: 'Fighter',
    description:
      'An eldritch guardian has bonded with a familiar, sharing his combat feats and martial knowledge with a magical companion that fights alongside him in battle.',
    replacedFeatures: ['Bonus Feats (1st)', 'Bravery', 'Armor Training 1', 'Armor Training 3'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Familiar',
        level: 1,
        description:
          'At 1st level, an eldritch guardian gains a familiar as per the wizard class feature, treating his fighter level as his wizard level for this purpose. The familiar does not grant the Alertness feat or any other special ability normally granted by a familiar.',
        effects: [],
      },
      {
        name: 'Share Training',
        level: 1,
        description:
          "At 1st level, the eldritch guardian's familiar shares all of the fighter's combat feats, even if the familiar does not normally meet the prerequisites. The familiar uses its own ability scores and the fighter's base attack bonus.",
        effects: [],
      },
      {
        name: 'Steel Will',
        level: 2,
        description:
          'At 2nd level, an eldritch guardian gains a +1 bonus on Will saves. This bonus increases by +1 for every 4 levels beyond 2nd, to a maximum of +5 at 18th level.',
        effects: [],
      },
      {
        name: 'Familiar Training',
        level: 3,
        description:
          "At 3rd level, the eldritch guardian's familiar benefits from the fighter's armor training class feature, reducing armor check penalties and increasing maximum Dexterity bonus for any armor it wears.",
        effects: [],
      },
      {
        name: 'Eldritch Armor Training',
        level: 11,
        description:
          'At 11th level, the eldritch guardian can move at normal speed while wearing medium armor. At 15th level, he can move at normal speed while wearing heavy armor.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Free Hand Fighter
  // ──────────────────────────────────────────────
  {
    name: 'Free Hand Fighter',
    className: 'Fighter',
    description:
      'The free hand fighter specializes in one-handed combat with the other hand free, using clever feints and disarming techniques to outmaneuver opponents.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deceptive Strike',
        level: 2,
        description:
          'At 2nd level, a free hand fighter gains a +1 bonus on CMB and to CMD against disarm, steal, and feint attempts when he has one hand free. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Elusive',
        level: 3,
        description:
          'At 3rd level, a free hand fighter gains a +1 dodge bonus to AC when wielding a melee weapon in one hand and keeping the other hand free. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Singleton',
        level: 5,
        description:
          'At 5th level, a free hand fighter gains a +1 bonus on attack and damage rolls when fighting with a melee weapon in one hand and the other hand free. This bonus increases by +1 for every 6 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Timely Tip',
        level: 9,
        description:
          'At 9th level, a free hand fighter can make a disarm combat maneuver as an attack of opportunity. He gains a +2 bonus on this combat maneuver check.',
        effects: [],
      },
      {
        name: 'Interference',
        level: 13,
        description:
          "At 13th level, when an opponent adjacent to the free hand fighter makes an attack against an ally, the free hand fighter can make an attack of opportunity against that opponent. If the attack hits, the opponent's attack takes a -4 penalty.",
        effects: [],
      },
      {
        name: 'Reversal',
        level: 19,
        description:
          'At 19th level, when an opponent misses the free hand fighter with a melee attack, the free hand fighter can make a disarm or trip combat maneuver against the opponent as an immediate action.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 11. Gladiator
  // ──────────────────────────────────────────────
  {
    name: 'Gladiator',
    className: 'Fighter',
    description:
      'The gladiator has learned the art of fighting in the arena, combining martial prowess with performance and crowd-pleasing combat displays.',
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Performance Weapon Mastery',
        level: 1,
        description:
          'The gladiator adds Perform (act, comedy, or dance) to his list of class skills. He treats all weapons in his chosen weapon training groups as performance weapons.',
        effects: [],
      },
      {
        name: 'Fame',
        level: 5,
        description:
          'At 5th level, a gladiator gains a +1 bonus on Intimidate checks and can demoralize foes as a move action instead of a standard action. This bonus increases by +1 for every 4 levels beyond 5th. At 9th level, he can demoralize foes as a swift action during a performance combat.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 12. High Guardian
  // ──────────────────────────────────────────────
  {
    name: 'High Guardian',
    className: 'Fighter',
    description:
      'A high guardian is a fighter devoted to the protection of a single charge, using bodyguard techniques and defensive stances to keep his ward safe from harm.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 1',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Duty-Bound',
        level: 2,
        description:
          'At 2nd level, a high guardian gains a +1 morale bonus on saving throws against mind-affecting effects. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Bodyguard Style',
        level: 3,
        description:
          "At 3rd level, a high guardian gains Bodyguard and Combat Reflexes as bonus feats. When he uses the aid another action to improve an ally's AC, the bonus increases by +1. This additional bonus increases by +1 for every 4 levels beyond 3rd.",
        effects: [],
      },
      {
        name: 'Intervention',
        level: 5,
        description:
          'At 5th level, when an adjacent ally is the target of an attack, the high guardian can take a 5-foot step and become the target of the attack as an immediate action. He must declare this before the attack roll is made.',
        effects: [],
      },
      {
        name: "Defender's Reflexes",
        level: 7,
        description:
          'At 7th level, a high guardian gains an additional attack of opportunity each round. At 11th level and every 4 levels thereafter, he gains another additional attack of opportunity.',
        effects: [],
      },
      {
        name: 'Shield Ward',
        level: 9,
        description:
          'At 9th level, as an immediate action, the high guardian can extend his shield bonus to AC to an adjacent ally until the beginning of his next turn.',
        effects: [],
      },
      {
        name: 'Vigilant Guardian',
        level: 11,
        description:
          'At 11th level, the high guardian can take attacks of opportunity even while flat-footed. He also gains a +2 bonus on Perception checks to notice threats.',
        effects: [],
      },
      {
        name: 'Shielding Word',
        level: 15,
        description:
          'At 15th level, as an immediate action, the high guardian can grant an ally within 30 feet a bonus on a saving throw equal to his shield bonus to AC. He must declare this before the saving throw is rolled.',
        effects: [],
      },
      {
        name: 'Supreme Intervention',
        level: 19,
        description:
          'At 19th level, when an ally within 30 feet is hit by an attack, the high guardian can move up to his speed as an immediate action and take the hit instead. He must end this movement adjacent to the ally.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 13. Lore Warden
  // ──────────────────────────────────────────────
  {
    name: 'Lore Warden',
    className: 'Fighter',
    description:
      'The lore warden is a fighter who supplements martial training with scholarly study, using superior knowledge and tactical acumen to exploit enemy weaknesses.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [
      'Armor Proficiency (medium and heavy)',
      'Shield Proficiency (tower shields)',
    ],
    newFeatures: [
      {
        name: 'Scholastic',
        level: 1,
        description:
          'The lore warden gains 2 additional skill ranks per level. She adds all Knowledge skills to her list of class skills. She loses proficiency with medium armor, heavy armor, and tower shields.',
        effects: [],
      },
      {
        name: 'Expertise',
        level: 2,
        description:
          'At 2nd level, the lore warden gains Combat Expertise as a bonus feat even if she does not meet the Intelligence prerequisite.',
        effects: [],
      },
      {
        name: 'Maneuver Mastery',
        level: 3,
        description:
          'At 3rd level, the lore warden gains a +2 bonus on all CMB checks and to CMD. This bonus increases by +2 at 7th level and every 4 levels thereafter, to a maximum of +12 at 19th level.',
        effects: [],
      },
      {
        name: 'Know Thy Enemy',
        level: 7,
        description:
          'At 7th level, as a move action, the lore warden can study a single foe she can see. She gains a +2 bonus on attack rolls, weapon damage rolls, and a +2 dodge bonus to AC against that foe. These bonuses last for a number of rounds equal to half her fighter level.',
        effects: [],
      },
      {
        name: "Hair's Breadth",
        level: 11,
        description:
          'At 11th level, the lore warden gains a +2 dodge bonus to AC when using Combat Expertise. This bonus increases by +1 for every 4 levels beyond 11th.',
        effects: [],
      },
      {
        name: 'Swift Assessment',
        level: 19,
        description:
          'At 19th level, the lore warden can use Know Thy Enemy as a swift action instead of a move action. In addition, she gains a +4 bonus on all Knowledge checks to identify creature abilities and weaknesses.',
        effects: [],
      },
    ],
    source: 'Pathfinder Society Field Guide',
  },

  // ──────────────────────────────────────────────
  // 14. Mobile Fighter
  // ──────────────────────────────────────────────
  {
    name: 'Mobile Fighter',
    className: 'Fighter',
    description:
      'The mobile fighter emphasizes speed, footwork, and mobility over heavy armor, striking swiftly and repositioning to maintain tactical advantage on the battlefield.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Agility',
        level: 3,
        description:
          'At 3rd level, a mobile fighter gains a +1 dodge bonus to AC when wearing light or no armor. This bonus increases by +1 for every 4 levels beyond 3rd. He also gains a +1 bonus on saving throws against effects that would cause him to become paralyzed, slowed, or entangled.',
        effects: [],
      },
      {
        name: 'Leaping Attack',
        level: 11,
        description:
          'At 11th level, when the mobile fighter charges, he can make a DC 20 Acrobatics check to leap over difficult terrain or obstacles during the charge. If he succeeds, he ignores all difficult terrain during the charge and gains a +2 bonus on the attack roll.',
        effects: [],
      },
      {
        name: 'Rapid Attack',
        level: 15,
        description:
          'At 15th level, a mobile fighter can combine a full-attack action with a single move. He must forgo his attack at his highest base attack bonus but can move up to his speed either before or after making the remaining attacks.',
        effects: [],
      },
      {
        name: 'Fleet Footed',
        level: 17,
        description:
          "At 17th level, a mobile fighter's base speed increases by 10 feet when wearing light or no armor. He can also take a 10-foot step instead of a 5-foot step once per round.",
        effects: [],
      },
      {
        name: 'Whirlwind Blitz',
        level: 20,
        description:
          'At 20th level, as a full-round action, a mobile fighter can move up to his speed and make a single melee attack at his highest attack bonus against every creature he passes. He does not provoke attacks of opportunity during this movement.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Mutation Warrior
  // ──────────────────────────────────────────────
  {
    name: 'Mutation Warrior',
    className: 'Fighter',
    description:
      'The mutation warrior discovers the secrets of extravagant physical mutation, gaining the ability to brew and consume mutagens that temporarily enhance his physical prowess.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mutagen',
        level: 3,
        description:
          'At 3rd level, a mutation warrior gains the ability to create a mutagen as an alchemist equal to his fighter level. The mutagen grants a +2 alchemical bonus to one physical ability score and a +2 natural armor bonus, but imposes a -2 penalty to the corresponding mental ability score. It lasts for 10 minutes per fighter level.',
        effects: [],
      },
      {
        name: 'Mutagen Discovery',
        level: 7,
        description:
          'At 7th level, a mutation warrior can select one of the following alchemist discoveries that affect mutagens: feral mutagen, preserve organs, or spontaneous healing. He must meet the level prerequisite using his fighter level.',
        effects: [],
      },
      {
        name: 'Greater Mutagen',
        level: 11,
        description:
          "At 11th level, the mutation warrior's mutagen now grants a +4 alchemical bonus to one physical ability score and a +2 bonus to a second. The natural armor bonus increases to +4. He takes a -2 penalty to two corresponding mental ability scores.",
        effects: [],
      },
      {
        name: 'Advanced Mutagen Discovery',
        level: 15,
        description:
          'At 15th level, the mutation warrior can select an additional alchemist mutagen discovery from an expanded list, including grand mutagen, greater mutagen, and other options. He must meet the alchemist level prerequisite using his fighter level.',
        effects: [],
      },
      {
        name: 'Grand Mutagen',
        level: 19,
        description:
          "At 19th level, the mutation warrior's mutagen now grants a +6 alchemical bonus to one physical ability score, +4 to a second, and +2 to a third. The natural armor bonus increases to +6. He takes a -2 penalty to all three mental ability scores.",
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 16. Phalanx Soldier
  // ──────────────────────────────────────────────
  {
    name: 'Phalanx Soldier',
    className: 'Fighter',
    description:
      'The phalanx soldier specializes in fighting with a shield and polearm simultaneously, combining the reach of a long weapon with the protection of a heavy shield.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 1',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Stand Firm',
        level: 3,
        description:
          'At 3rd level, a phalanx soldier gains a +1 bonus to CMD against bull rush, drag, overrun, reposition, and trip attempts while wielding a shield. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Phalanx Fighting',
        level: 5,
        description:
          'At 5th level, when a phalanx soldier wields a shield, he can also wield a two-handed polearm or spear of his size category in one hand. The weapon is treated as a one-handed weapon for all purposes while he uses it this way.',
        effects: [],
      },
      {
        name: 'Ready Pike',
        level: 5,
        description:
          'At 5th level, a phalanx soldier can ready a weapon against a charge attack as an immediate action, gaining an attack of opportunity against the charging creature before it resolves its charge attack.',
        effects: [],
      },
      {
        name: 'Deft Shield',
        level: 7,
        description:
          'At 7th level, the armor check penalty from any shield the phalanx soldier uses is reduced by 1 (to a minimum of 0). This reduction increases by 1 for every 4 levels beyond 7th.',
        effects: [],
      },
      {
        name: 'Shield Ally',
        level: 9,
        description:
          'At 9th level, when a phalanx soldier is adjacent to an ally, as an immediate action he can grant that ally his shield bonus to AC until the beginning of his next turn. He loses his own shield bonus while providing this benefit.',
        effects: [],
      },
      {
        name: 'Irresistible Advance',
        level: 15,
        description:
          'At 15th level, a phalanx soldier gains a bonus on bull rush and overrun combat maneuver checks equal to half his shield bonus to AC. He can bull rush or overrun creatures up to two size categories larger than himself.',
        effects: [],
      },
      {
        name: 'Shielded Fortress',
        level: 20,
        description:
          'At 20th level, a phalanx soldier gains evasion while carrying a shield. He also adds his shield bonus to AC on Reflex saves. Allies adjacent to the phalanx soldier gain the benefit of his shield bonus on Reflex saves as well.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 17. Polearm Master
  // ──────────────────────────────────────────────
  {
    name: 'Polearm Master',
    className: 'Fighter',
    description:
      'The polearm master has devoted herself to mastering the reach and versatility of polearms, controlling the battlefield by keeping foes at bay with sweeping strikes.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Pole Fighting',
        level: 3,
        description:
          'At 3rd level, as an immediate action, a polearm master can shorten the grip on her polearm or spear with the reach feature and use it against adjacent foes. This attack suffers a -4 penalty, which decreases by -1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Steadfast Pike',
        level: 5,
        description:
          'At 5th level, a polearm master gains a +1 bonus on attack and damage rolls with readied attacks and attacks of opportunity made with polearms and spears. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Polearm Training',
        level: 7,
        description:
          'At 7th level, a polearm master gains a +1 bonus on attack and damage rolls with spears and polearms. This bonus increases by +1 for every 4 levels beyond 7th. She also applies these bonuses to CMB checks made with polearms and spears.',
        effects: [],
      },
      {
        name: 'Flexible Flanker',
        level: 11,
        description:
          'At 11th level, a polearm master can flank foes from any square she threatens with a reach weapon, rather than only from the traditional flanking position.',
        effects: [],
      },
      {
        name: 'Sweeping Fend',
        level: 15,
        description:
          "At 15th level, when the polearm master makes an attack of opportunity with a polearm or spear against a foe moving through her threatened area, if the attack hits, the foe's movement immediately stops in the last square before entering her threatened area.",
        effects: [],
      },
      {
        name: 'Step Aside',
        level: 17,
        description:
          'At 17th level, when a foe moves adjacent to the polearm master, she can take a 5-foot step as an immediate action. She can then make an attack of opportunity against the foe with her polearm.',
        effects: [],
      },
      {
        name: 'Polearm Parry',
        level: 19,
        description:
          "At 19th level, a polearm master can use her polearm to parry melee attacks. Once per round as an immediate action, she can make an attack roll at her highest base attack bonus. If the result exceeds the opponent's attack roll, the attack misses.",
        effects: [],
      },
      {
        name: 'Polearm Supremacy',
        level: 20,
        description:
          'At 20th level, the polearm master threatens both adjacent squares and squares within her reach. Opponents that take a 5-foot step within her threatened area provoke attacks of opportunity from her.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 18. Roughrider
  // ──────────────────────────────────────────────
  {
    name: 'Roughrider',
    className: 'Fighter',
    description:
      'The roughrider excels at mounted combat, forming a powerful bond with a trained mount and becoming a devastating cavalryman who can fight effectively in any terrain.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 2',
      'Weapon Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Steadfast Mount',
        level: 3,
        description:
          'At 3rd level, the roughrider gains a +1 bonus on Ride checks and to the DC of Ride checks attempted against his mount. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Armored Charger',
        level: 7,
        description:
          "At 7th level, when the roughrider charges while mounted, his mount's speed is not reduced by wearing barding. The roughrider and his mount gain a +2 bonus to AC against attacks of opportunity provoked by the charge.",
        effects: [],
      },
      {
        name: 'Mounted Mettle',
        level: 9,
        description:
          "At 9th level, the roughrider's mount gains a morale bonus on Fortitude and Reflex saves equal to the roughrider's bonus from bravery.",
        effects: [],
      },
      {
        name: 'Leap from the Saddle',
        level: 11,
        description:
          'At 11th level, the roughrider can dismount as a swift action during a mounted charge and make a full attack on foot. He does not take penalties for dismounting during a charge.',
        effects: [],
      },
      {
        name: 'Relentless Steed',
        level: 15,
        description:
          "At 15th level, the roughrider's mount gains the benefits of the Endurance and Diehard feats while the roughrider is mounted.",
        effects: [],
      },
      {
        name: 'Ride Them Down',
        level: 17,
        description:
          'At 17th level, when the roughrider makes an overrun combat maneuver while mounted, he gains a bonus equal to half his fighter level. Foes knocked prone by the overrun provoke attacks of opportunity from both the roughrider and his mount.',
        effects: [],
      },
      {
        name: 'Unavoidable Onslaught',
        level: 18,
        description:
          'At 18th level, when the roughrider charges while mounted, the charge cannot be stopped. He and his mount can move through difficult terrain and squares occupied by creatures without penalty during the charge.',
        effects: [],
      },
      {
        name: 'Indomitable Steed',
        level: 19,
        description:
          "At 19th level, the roughrider's mount is immune to fear effects and gains DR 5/-. When the mount takes damage that would reduce it below 0 hit points, it can make a Fortitude save (DC = damage dealt) to remain at 1 hit point.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Savage Warrior
  // ──────────────────────────────────────────────
  {
    name: 'Savage Warrior',
    className: 'Fighter',
    description:
      'The savage warrior draws upon primal instincts and natural ferocity, specializing in fighting with natural weapons and the crude but effective weapons of uncivilized peoples.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spark of Life',
        level: 3,
        description:
          'At 3rd level, the savage warrior gains a +1 bonus on saving throws against energy drain and death effects. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Natural Savagery',
        level: 5,
        description:
          'At 5th level, the savage warrior gains a +1 bonus on attack and damage rolls with natural weapons and weapons in the close or tribal weapon groups. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Savage Charge',
        level: 7,
        description:
          'At 7th level, when the savage warrior charges, he does not take the -2 penalty to AC normally imposed by a charge. At 11th level, he gains a +4 bonus on attack rolls during a charge instead of the normal +2.',
        effects: [],
      },
      {
        name: 'Careful Claw',
        level: 11,
        description:
          'At 11th level, the savage warrior can use natural weapons to make attacks of opportunity. He also gains a +2 bonus on critical confirmation rolls with natural weapons.',
        effects: [],
      },
      {
        name: 'Greater Savage Charge',
        level: 15,
        description:
          'At 15th level, when the savage warrior confirms a critical hit during a charge, he can attempt a free bull rush or trip combat maneuver against the target as a free action without provoking attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Natural Weapon Mastery',
        level: 20,
        description:
          'At 20th level, the savage warrior chooses one natural weapon. The critical multiplier for that weapon increases by 1 (x2 becomes x3, etc.). In addition, he cannot be disarmed of that natural weapon.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 20. Sensate (Fighter)
  // ──────────────────────────────────────────────
  {
    name: 'Sensate (Fighter)',
    className: 'Fighter',
    description:
      'The sensate relies on heightened senses and extraordinary perception to anticipate danger, read opponents, and react to threats with preternatural awareness.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, a sensate gains the uncanny dodge ability as the barbarian class feature. He cannot be caught flat-footed and retains his Dexterity bonus to AC even when the attacker is invisible or he has not yet acted in combat.',
        effects: [],
      },
      {
        name: 'Sensate Awareness',
        level: 3,
        description:
          'At 3rd level, a sensate gains a +1 bonus on Perception checks and initiative rolls. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 7,
        description:
          'At 7th level, the sensate gains improved uncanny dodge as the barbarian class feature. He can no longer be flanked unless the attacker has at least 4 more rogue levels than the sensate has fighter levels.',
        effects: [],
      },
      {
        name: 'Sensory Acuity',
        level: 11,
        description:
          'At 11th level, the sensate gains blindsense with a range of 10 feet. At 15th level, this range increases to 20 feet.',
        effects: [],
      },
      {
        name: 'Reactive Senses',
        level: 15,
        description:
          'At 15th level, the sensate can always act in the surprise round even if he fails to make a Perception check to notice a foe. He also gains a +2 bonus on saving throws against illusion spells and effects.',
        effects: [],
      },
      {
        name: 'Blindsight',
        level: 19,
        description:
          'At 19th level, the sensate gains blindsight with a range of 30 feet, allowing him to perceive his surroundings without relying on sight. He is immune to gaze attacks and visual illusions within this range.',
        effects: [],
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 21. Shielded Fighter
  // ──────────────────────────────────────────────
  {
    name: 'Shielded Fighter',
    className: 'Fighter',
    description:
      'The shielded fighter focuses on mastering shields as both defensive tools and offensive weapons, turning shield bash techniques into a devastating combat art.',
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Active Defense',
        level: 5,
        description:
          'At 5th level, a shielded fighter gains a +1 dodge bonus to AC when wielding a shield and fighting defensively, using Combat Expertise, or using the total defense action. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Shield Fighter',
        level: 5,
        description:
          'At 5th level, a shielded fighter gains a +1 bonus on attack and damage rolls when making a shield bash. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Shield Buffet',
        level: 9,
        description:
          'At 9th level, as a move action, a shielded fighter can make a single shield bash attack. If the attack is successful, in addition to dealing damage, the opponent is staggered for 1 round. At 13th level, the target is also knocked prone.',
        effects: [],
      },
      {
        name: 'Shield Guard',
        level: 13,
        description:
          'At 13th level, a shielded fighter gains evasion while using a shield. He adds his shield bonus to AC on Reflex saving throws. If he already has evasion, he instead gains improved evasion.',
        effects: [],
      },
      {
        name: 'Shield Mastery',
        level: 17,
        description:
          'At 17th level, a shielded fighter gains DR 5/- when wielding a shield. His shield cannot be disarmed or sundered.',
        effects: [],
      },
      {
        name: 'Shield Ward',
        level: 20,
        description:
          'At 20th level, a shielded fighter adds his shield bonus to AC to his touch AC. He also applies his full shield bonus to his CMD and to saving throws against targeted spells and spell-like abilities.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },
  // ─── 1. Skirmisher (Fighter) ───────────────────────────────────────
  {
    name: 'Skirmisher',
    className: 'Fighter',
    description:
      'A mobile warrior who excels at hit-and-run tactics, trading heavy armor mastery for superior battlefield mobility and the ability to strike effectively while on the move.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Combat Skirmisher',
        level: 3,
        description:
          'The skirmisher gains a +1 bonus on attack rolls and a +2 bonus on damage rolls when he moves at least 10 feet before making a melee attack. This bonus increases by +1/+2 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Skirmisher Mobility',
        level: 7,
        description:
          'The skirmisher does not provoke attacks of opportunity when he moves out of a threatened square, as long as he has already attacked the threatening creature this round.',
        effects: [],
      },
      {
        name: 'Rapid Skirmish',
        level: 11,
        description:
          'When the skirmisher makes a full attack action after moving at least 10 feet, he may make one additional attack at his highest base attack bonus, but all attacks that round take a -2 penalty.',
        effects: [],
      },
      {
        name: 'Master Skirmisher',
        level: 15,
        description:
          'The skirmisher can move up to his speed as a swift action once per round. This movement provokes attacks of opportunity as normal.',
        effects: [],
      },
      {
        name: 'Unstoppable Momentum',
        level: 19,
        description:
          'The skirmisher is treated as if under the effects of freedom of movement whenever he moves at least 10 feet on his turn. This is an extraordinary ability.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Melee Tactics Toolbox',
  },

  // ─── 2. Steelbound Fighter ─────────────────────────────────────────
  {
    name: 'Steelbound Fighter',
    className: 'Fighter',
    description:
      'A fighter who forms a supernatural bond with a specific weapon that grows in power alongside him, eventually awakening as an intelligent item with its own personality.',
    replacedFeatures: [
      'Bonus Feats (1st)',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bonded Weapon',
        level: 1,
        description:
          'The steelbound fighter selects a specific weapon to bond with. The weapon must be a masterwork or magical melee weapon. He gains a +1 bonus on attack and damage rolls with this weapon. If the weapon is destroyed, he can bond with a new weapon after 24 hours of meditation.',
        effects: [],
      },
      {
        name: 'Weapon Bond Enhancement',
        level: 5,
        description:
          'The bonded weapon gains a +1 enhancement bonus. This bonus increases by +1 at 9th, 13th, and 17th level. The steelbound fighter can apply weapon special abilities in place of enhancement bonuses.',
        effects: [],
      },
      {
        name: 'Awakened Weapon',
        level: 9,
        description:
          'The bonded weapon becomes semi-intelligent with an Ego score of 5. It can communicate empathically with its bonded fighter and provides a +2 bonus on Will saves against mind-affecting effects while wielded.',
        effects: [],
      },
      {
        name: 'Greater Bond',
        level: 13,
        description:
          "The bonded weapon can use a spell-like ability once per day chosen from a list appropriate to the weapon type. The caster level equals the fighter's level.",
        effects: [],
      },
      {
        name: 'Living Weapon',
        level: 17,
        description:
          "The bonded weapon is fully intelligent with telepathic communication, senses (60 ft.), and can fly up to 30 feet and fight independently using the fighter's base attack bonus.",
        effects: [],
      },
      {
        name: 'Steel Soul',
        level: 20,
        description:
          'The steelbound fighter can merge with his weapon as a swift action, gaining DR 10/adamantine and immunity to critical hits and sneak attacks while merged. He can separate as a free action.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Haunted Heroes Handbook',
  },

  // ─── 3. Tactician (Fighter) ────────────────────────────────────────
  {
    name: 'Tactician',
    className: 'Fighter',
    description:
      'A battlefield commander who directs allies with superior tactical acumen, sharing teamwork feats and granting strategic bonuses in place of personal weapon mastery.',
    replacedFeatures: [
      'Bonus Feats (1st)',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tactical Awareness',
        level: 1,
        description:
          'The tactician gains a bonus equal to half his fighter level (minimum +1) on initiative checks and Sense Motive checks. He can always act in a surprise round even if he fails to notice enemies.',
        effects: [],
      },
      {
        name: 'Strategic Training',
        level: 5,
        description:
          'As a standard action, the tactician can grant a teamwork feat he knows to all allies within 30 feet for a number of rounds equal to 3 + his Intelligence modifier. He can use this a number of times per day equal to 3 + his Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Tactical Flanker',
        level: 9,
        description:
          'The tactician and one designated ally are considered flanking an opponent as long as they are both threatening that opponent, regardless of positioning. He can designate one ally as a free action each round.',
        effects: [],
      },
      {
        name: 'Battle Insight',
        level: 13,
        description:
          'As a move action, the tactician can study the battlefield and grant all allies within 30 feet a +2 insight bonus on attack rolls, damage rolls, or saving throws (his choice) until the start of his next turn.',
        effects: [],
      },
      {
        name: 'Master Tactician',
        level: 17,
        description:
          'Strategic Training can now be activated as a swift action. The duration of granted teamwork feats increases to 1 minute, and the tactician can grant two teamwork feats simultaneously.',
        effects: [],
      },
      {
        name: 'Supreme Strategist',
        level: 20,
        description:
          'Once per day as a full-round action, the tactician can grant all allies within 60 feet a +4 morale bonus on attack rolls, damage rolls, saving throws, and skill checks for 1 minute.',
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ─── 4. Thunderstriker ─────────────────────────────────────────────
  {
    name: 'Thunderstriker',
    className: 'Fighter',
    description:
      'A specialist in wielding a one-handed weapon alongside a buckler, combining offense and defense by using the buckler as both a shield and an impromptu bashing weapon.',
    replacedFeatures: [
      'Bravery',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Buckler Bash',
        level: 2,
        description:
          "The thunderstriker can shield bash with a buckler, treating it as a light weapon dealing 1d3 bludgeoning damage. He does not lose the buckler's AC bonus when making a shield bash.",
        effects: [],
      },
      {
        name: 'Knockback Smash',
        level: 5,
        description:
          'When the thunderstriker hits with a buckler bash, he can attempt a free bull rush against the target without provoking attacks of opportunity. He gains a +2 bonus on this bull rush attempt.',
        effects: [],
      },
      {
        name: 'Thunderclap',
        level: 9,
        description:
          'Once per round when the thunderstriker hits with a buckler bash, the target must succeed at a Fortitude save (DC 10 + half fighter level + Strength modifier) or be dazed for 1 round.',
        effects: [],
      },
      {
        name: 'Shield and Weapon',
        level: 13,
        description:
          'The thunderstriker treats his buckler as a heavy shield for shield bonus to AC. He also gains the benefits of the Two-Weapon Fighting feat when attacking with a one-handed weapon and buckler bash.',
        effects: [],
      },
      {
        name: 'Resounding Blow',
        level: 17,
        description:
          "The thunderstriker's Thunderclap ability now affects all enemies within 10 feet of the struck target. Affected creatures are also deafened for 1 minute on a failed save.",
        effects: [],
      },
      {
        name: 'Storm of Blows',
        level: 20,
        description:
          'Whenever the thunderstriker makes a full attack, he may make an additional buckler bash at his highest base attack bonus. This does not stack with haste or similar extra-attack effects.',
        effects: [],
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ─── 5. Titan Fighter ──────────────────────────────────────────────
  {
    name: 'Titan Fighter',
    className: 'Fighter',
    description:
      'A fighter who wields weapons sized for creatures larger than himself, suffering penalties that diminish as he grows in skill and physical power.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Giant Weapon Wielder',
        level: 1,
        description:
          'The titan fighter can wield two-handed melee weapons intended for creatures one size category larger, treating them as two-handed weapons with an additional -2 penalty on attack rolls.',
        effects: [],
      },
      {
        name: 'Incredible Heft',
        level: 3,
        description:
          'The penalty for wielding oversized weapons is reduced by 1. This reduction increases by 1 at 7th level and every 4 levels thereafter, to a minimum penalty of 0.',
        effects: [],
      },
      {
        name: 'Unstoppable Force',
        level: 7,
        description:
          'The titan fighter gains a +1 bonus on damage rolls with oversized weapons. This bonus increases by +1 at 11th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Devastating Blow',
        level: 11,
        description:
          'Once per round when the titan fighter confirms a critical hit with an oversized weapon, the target must succeed at a Fortitude save (DC 10 + half level + Strength modifier) or be staggered for 1 round.',
        effects: [],
      },
      {
        name: 'Titanic Reach',
        level: 15,
        description:
          "When wielding an oversized weapon, the titan fighter's reach increases by 5 feet. This does not affect whether he can threaten adjacent foes.",
        effects: [],
      },
      {
        name: "Titan's Grip",
        level: 19,
        description:
          'The titan fighter can wield weapons intended for creatures two size categories larger. He takes a -2 penalty on attack rolls (subject to Incredible Heft reduction).',
        effects: [],
      },
    ],
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
  },

  // ─── 6. Tower Shield Specialist ────────────────────────────────────
  {
    name: 'Tower Shield Specialist',
    className: 'Fighter',
    description:
      'A defensive expert who masters the tower shield, steadily reducing its drawbacks and eventually turning it into an impenetrable mobile wall on the battlefield.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: ['Armor Mastery'],
    newFeatures: [
      {
        name: 'Burst Barrier',
        level: 3,
        description:
          'The specialist gains a +1 bonus on Reflex saves against effects that deal hit point damage while using a tower shield. This bonus increases by +1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Tower Shield Training',
        level: 5,
        description:
          'The armor check penalty of tower shields is reduced by 1, and the maximum Dexterity bonus increases by 1. These adjustments improve by an additional 1 at 9th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Tower Shield Specialist',
        level: 7,
        description:
          'The specialist no longer takes the -2 attack roll penalty when using a tower shield. He also gains +2 to CMD against bull rush, overrun, and trip attempts while using one.',
        effects: [],
      },
      {
        name: 'Immediate Repositioning',
        level: 9,
        description:
          'As an immediate action, the specialist can provide total cover with his tower shield against a single attack or spell. He must be aware of the attack to use this ability.',
        effects: [],
      },
      {
        name: 'Tower Shield Defense',
        level: 11,
        description:
          'When granting total cover with a tower shield, the specialist can extend the cover to one adjacent ally. At 15th level, he can extend it to all adjacent allies.',
        effects: [],
      },
      {
        name: 'Impenetrable Wall',
        level: 13,
        description:
          'The specialist gains DR 5/-- when using a tower shield while fighting defensively or using total defense. This increases to DR 10/-- at 17th level.',
        effects: [],
      },
      {
        name: 'Tower Shield Mastery',
        level: 19,
        description:
          'The specialist gains evasion while using a tower shield. If he already has evasion, he gains improved evasion instead. He can grant total cover as a free action once per round.',
        effects: [],
      },
      {
        name: 'Indomitable Barrier',
        level: 20,
        description:
          'The specialist gains DR 10/-- at all times while wielding a tower shield and is immune to bull rush, overrun, and trip attempts while using total defense with a tower shield.',
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ─── 7. Trench Fighter ─────────────────────────────────────────────
  {
    name: 'Trench Fighter',
    className: 'Fighter',
    description:
      'A fighter trained in modern firearms warfare, adding Dexterity to firearm damage and gaining abilities that make him a devastating ranged combatant from fortified positions.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Trench Warfare',
        level: 3,
        description:
          'The trench fighter can add his Dexterity modifier to damage rolls made with firearms, replacing the normal Strength-based damage modifier.',
        effects: [],
      },
      {
        name: 'Fortified Position',
        level: 7,
        description:
          'When the trench fighter has cover, he gains an additional +2 bonus to AC and +2 on Reflex saves. He can drop prone as a free action and stand from prone as a swift action.',
        effects: [],
      },
      {
        name: 'Defensive Position',
        level: 11,
        description:
          'The trench fighter does not provoke attacks of opportunity when firing or reloading firearms while threatened.',
        effects: [],
      },
      {
        name: 'Volley Fire',
        level: 15,
        description:
          'As a standard action, the trench fighter can make a single firearm attack against each enemy within his first range increment, taking a -4 penalty on each attack roll.',
        effects: [],
      },
      {
        name: "No Man's Land",
        level: 19,
        description:
          'The trench fighter can designate a 30-foot cone as a kill zone as a swift action. Any enemy entering or moving through this area provokes an attack of opportunity from his firearm.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
  },

  // ─── 8. Two-Handed Fighter ─────────────────────────────────────────
  {
    name: 'Two-Handed Fighter',
    className: 'Fighter',
    description:
      'A fighter who specializes in devastating two-handed weapon attacks, multiplying Strength bonuses and gaining powerful single-strike abilities that send foes reeling.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: ['Weapon Training 1'],
    newFeatures: [
      {
        name: 'Shattering Strike',
        level: 2,
        description:
          'The two-handed fighter gains a +1 bonus to CMB and CMD on sunder attempts. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Overhand Chop',
        level: 3,
        description:
          'When the two-handed fighter makes a single attack (as a standard action) with a two-handed weapon, he applies double his Strength bonus on the damage roll.',
        effects: [],
      },
      {
        name: 'Weapon Training',
        level: 5,
        description:
          'As normal weapon training, but the bonus only applies when wielding a two-handed melee weapon from the selected group. Additional groups are gained at 9th, 13th, and 17th level.',
        effects: [],
      },
      {
        name: 'Backswing',
        level: 7,
        description:
          'When making a full attack with a two-handed weapon, the two-handed fighter adds double his Strength bonus on damage rolls for all attacks after the first.',
        effects: [],
      },
      {
        name: 'Piledriver',
        level: 11,
        description:
          'As a standard action, the two-handed fighter can make a single melee attack with a two-handed weapon. If it hits, he may attempt a free bull rush or trip combat maneuver without provoking attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Greater Power Attack',
        level: 15,
        description:
          'When using Power Attack with a two-handed weapon, the fighter gains a +1 bonus on melee attack rolls that offsets the Power Attack penalty. This increases to +2 at 19th level.',
        effects: [],
      },
      {
        name: 'Devastating Blow',
        level: 19,
        description:
          'As a standard action, the two-handed fighter makes a single attack at a -5 penalty with a two-handed weapon. If it hits, it is treated as a critical threat. If confirmed, the critical multiplier increases by 1.',
        effects: [],
      },
      {
        name: 'Unstoppable Strike',
        level: 20,
        description:
          "The two-handed fighter's attacks with two-handed melee weapons ignore all damage reduction and hardness, including DR/--.",
        effects: [],
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ─── 9. Two-Weapon Warrior ─────────────────────────────────────────
  {
    name: 'Two-Weapon Warrior',
    className: 'Fighter',
    description:
      'A fighter who masters dual-wielding combat, reducing two-weapon fighting penalties and gaining abilities that enhance fighting with a weapon in each hand.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: ['Weapon Training 1'],
    newFeatures: [
      {
        name: 'Defensive Flurry',
        level: 3,
        description:
          'When making a full attack with both weapons, the two-weapon warrior gains a +1 dodge bonus to AC against melee attacks until the beginning of his next turn. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Twin Blades',
        level: 5,
        description:
          'The two-weapon warrior gains weapon training, but the bonus applies to both primary and off-hand weapons if they belong to the same group. Further groups are gained at 9th, 13th, and 17th level.',
        effects: [],
      },
      {
        name: 'Deft Doublestrike',
        level: 9,
        description:
          'When the two-weapon warrior hits the same opponent with both weapons in a round, he can attempt a free disarm or sunder combat maneuver against that opponent without provoking attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Equal Opportunity',
        level: 11,
        description:
          'When the two-weapon warrior makes an attack of opportunity, he may attack once with each weapon. Normal two-weapon fighting penalties apply.',
        effects: [],
      },
      {
        name: 'Perfect Balance',
        level: 15,
        description:
          "The two-weapon warrior's penalties for two-weapon fighting are reduced by 1 (minimum 0). This stacks with reductions from Two-Weapon Fighting and similar feats.",
        effects: [],
      },
      {
        name: 'Deft Doublestrike, Improved',
        level: 17,
        description:
          'Deft Doublestrike can now trigger a free trip or bull rush attempt in addition to disarm or sunder. The warrior gains a +2 bonus on these combat maneuver checks.',
        effects: [],
      },
      {
        name: 'Deadly Defense',
        level: 19,
        description:
          "When fighting defensively or using Combat Expertise, the two-weapon warrior's first successful attack each round deals bonus damage equal to his Defensive Flurry bonus.",
        effects: [],
      },
      {
        name: 'Twin Weapon Mastery',
        level: 20,
        description:
          "The two-weapon warrior's critical multiplier with both weapons increases by 1 when fighting with two weapons. He automatically confirms all critical threats with both weapons.",
        effects: [],
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ─── 10. Unarmed Fighter ───────────────────────────────────────────
  {
    name: 'Unarmed Fighter',
    className: 'Fighter',
    description:
      'A fighter who masters unarmed combat techniques, gaining improved unarmed damage, damage reduction, and expertise in close-range combat maneuvers.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: ['Weapon Training 1'],
    newFeatures: [
      {
        name: 'Unarmed Style',
        level: 1,
        description:
          'The unarmed fighter gains Improved Unarmed Strike as a bonus feat. He may use his fighter level in place of monk level to qualify for feats with an Improved Unarmed Strike prerequisite.',
        effects: [],
      },
      {
        name: 'Tough Guy',
        level: 3,
        description:
          'The unarmed fighter gains DR 1/-- when wearing no armor or light armor. This DR increases by 1 at 7th level and every 4 levels thereafter, to a maximum of DR 5/-- at 19th level.',
        effects: [],
      },
      {
        name: 'Weapon Training (Close)',
        level: 5,
        description:
          'The unarmed fighter gains weapon training in the close weapon group (including unarmed strikes). He does not gain additional groups, but the bonus increases at 9th, 13th, and 17th level.',
        effects: [],
      },
      {
        name: 'Clever Wrestler',
        level: 7,
        description:
          'The unarmed fighter gains a +2 bonus on grapple CMB checks and does not provoke attacks of opportunity when attempting grapple, trip, or reposition maneuvers while unarmed.',
        effects: [],
      },
      {
        name: 'Trick Throw',
        level: 11,
        description:
          'When the unarmed fighter successfully trips or grapples an opponent, he can immediately make a single unarmed strike against that opponent as a free action.',
        effects: [],
      },
      {
        name: 'Takedown',
        level: 15,
        description:
          'When the unarmed fighter hits a flat-footed or flanked opponent with an unarmed strike, he can attempt a free trip combat maneuver that does not provoke attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Eye Gouge',
        level: 19,
        description:
          'When confirming a critical hit or succeeding at a grapple check, the unarmed fighter can blind the target in one eye permanently unless it succeeds at a Fortitude save (DC 10 + half level + Strength modifier).',
        effects: [],
      },
      {
        name: 'Master of the Close Fight',
        level: 20,
        description:
          "The unarmed fighter's unarmed strikes deal damage as if he were two size categories larger. He gains a +4 bonus on all combat maneuver checks and to his CMD.",
        effects: [],
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ─── 11. Unbreakable ───────────────────────────────────────────────
  {
    name: 'Unbreakable',
    className: 'Fighter',
    description:
      'A stubbornly tough fighter who shrugs off conditions and punishment that would fell lesser warriors, gaining enhanced saves, endurance, and the ability to fight through debilitating effects.',
    replacedFeatures: [
      'Bonus Feats (1st)',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Bravery'],
    newFeatures: [
      {
        name: 'Tough as Nails',
        level: 1,
        description: 'The unbreakable gains Endurance and Die Hard as bonus feats at 1st level.',
        effects: [],
      },
      {
        name: 'Unflinching',
        level: 2,
        description:
          'The unbreakable gains a +1 bonus on Will saves against mind-affecting effects. This bonus increases by +1 for every 4 levels beyond 2nd. This replaces bravery.',
        effects: [],
      },
      {
        name: 'Heroic Recovery',
        level: 3,
        description:
          'Once per day as a swift action, the unbreakable can attempt a new saving throw against a single ongoing condition or effect, using his original save bonus. He gains an additional daily use at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Heroic Defiance',
        level: 7,
        description:
          'Once per day as an immediate action, the unbreakable can delay the onset of one harmful condition or affliction (such as paralysis or ability damage) for 1 round after it would normally take effect.',
        effects: [],
      },
      {
        name: 'Stalwart',
        level: 11,
        description:
          'When the unbreakable succeeds on a Fortitude or Will save that would normally have a partial effect on a success, he instead suffers no effect. This functions as evasion for Fortitude and Will saves.',
        effects: [],
      },
      {
        name: 'Unbreakable Mind',
        level: 15,
        description:
          'The unbreakable gains immunity to fear effects and a +4 bonus on saving throws against enchantment effects.',
        effects: [],
      },
      {
        name: 'Impossible to Kill',
        level: 19,
        description:
          'Once per day when the unbreakable would be reduced below 0 hit points by damage, he is instead reduced to 1 hit point. He can act normally on his next turn.',
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ─── 12. Venomblade ─────────────────────────────────────────────────
  {
    name: 'Venomblade',
    className: 'Fighter',
    description:
      'A fighter who specializes in the use of poisons, learning to apply toxins safely and efficiently while enhancing their potency and duration through martial expertise.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Poison Use',
        level: 2,
        description:
          'The venomblade is trained in poison use and cannot accidentally poison himself when applying poison to a weapon. He gains a +2 bonus on Craft (alchemy) checks to create poisons.',
        effects: [],
      },
      {
        name: 'Toxic Strike',
        level: 3,
        description:
          'The venomblade can apply poison to a weapon as a move action instead of a standard action. At 7th level, he can apply poison as a swift action.',
        effects: [],
      },
      {
        name: 'Venom Resistance',
        level: 5,
        description:
          'The venomblade gains a +2 bonus on saving throws against poison. This bonus increases by +2 at 9th level and every 4 levels thereafter. At 17th level, he becomes immune to poison.',
        effects: [],
      },
      {
        name: 'Concentrated Poison',
        level: 7,
        description:
          'When the venomblade applies poison to a weapon, it remains potent for a number of successful hits equal to 1 + his Intelligence modifier (minimum 2), instead of expiring on the first hit.',
        effects: [],
      },
      {
        name: 'Virulent Poison',
        level: 11,
        description:
          'The save DC of any poison the venomblade applies increases by 2. The frequency of the poison is also extended by 1 round.',
        effects: [],
      },
      {
        name: 'Toxic Mastery',
        level: 15,
        description:
          'The venomblade can combine two different poisons into a single application. The target must save against each poison independently. He can do this a number of times per day equal to his Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Lethal Toxin',
        level: 19,
        description:
          'Once per day, the venomblade can create a supernatural poison (DC 10 + half fighter level + Intelligence modifier) that deals 1d4 Con drain per round for 6 rounds. Two consecutive saves are required to cure it.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
  },

  // ─── 13. Viking (Fighter) ──────────────────────────────────────────
  {
    name: 'Viking',
    className: 'Fighter',
    description:
      'A fierce northern warrior who enters a rage-like battle frenzy and excels at intimidation, trading disciplined armor training for shield defense and primal fury.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fearsome',
        level: 2,
        description:
          'The viking gains a +1 bonus on Intimidate checks and can demoralize opponents as a move action instead of a standard action. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Shield Defense',
        level: 3,
        description:
          'When using a shield, the viking gains a +1 dodge bonus to AC. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Berserker',
        level: 7,
        description:
          'The viking can rage as a barbarian for a number of rounds per day equal to 4 + his Constitution modifier, plus 2 rounds per fighter level beyond 7th. He does not gain rage powers.',
        effects: [],
      },
      {
        name: 'Intimidating Prowess',
        level: 11,
        description:
          'The viking can demoralize all enemies within 30 feet as a standard action with a single Intimidate check. Enemies demoralized by the viking remain shaken for an additional round beyond normal.',
        effects: [],
      },
      {
        name: 'Greater Berserker',
        level: 15,
        description:
          "The viking's rage grants a +6 morale bonus to Strength and Constitution and a +3 morale bonus on Will saves, as greater rage.",
        effects: [],
      },
      {
        name: 'Fearless Rage',
        level: 19,
        description:
          'While raging, the viking is immune to fear, paralysis, and the shaken and frightened conditions. Allies within 10 feet gain a +2 morale bonus on saves against fear.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: People of the North',
  },

  // ─── 14. Weapon Master ─────────────────────────────────────────────
  {
    name: 'Weapon Master',
    className: 'Fighter',
    description:
      'A fighter who devotes himself entirely to a single chosen weapon, unlocking unparalleled skill and devastating critical hits with that weapon above all others.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Weapon Training 1', 'Weapon Mastery'],
    newFeatures: [
      {
        name: 'Chosen Weapon',
        level: 1,
        description:
          'At 1st level, the weapon master selects one specific weapon type (such as longsword or shortbow). All weapon master class abilities apply only to that chosen weapon.',
        effects: [],
      },
      {
        name: 'Weapon Guard',
        level: 2,
        description:
          'The weapon master gains a +1 bonus to CMD against disarm and sunder attempts targeting his chosen weapon, and on saves against effects that target the weapon. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Weapon Training (Chosen)',
        level: 3,
        description:
          'The weapon master gains a +1 bonus on attack and damage rolls with his chosen weapon. This bonus increases by +1 at 7th level and every 4 levels thereafter, to a maximum of +5 at 19th level.',
        effects: [],
      },
      {
        name: 'Reliable Strike',
        level: 5,
        description:
          'As a swift action, the weapon master can reroll an attack roll, critical confirmation roll, miss chance check, or damage roll with his chosen weapon. He must accept the second result. Usable once per day, plus once more at 10th and 15th level.',
        effects: [],
      },
      {
        name: 'Mirror Move',
        level: 9,
        description:
          'When attacked by a weapon of the same type as his chosen weapon, the weapon master gains a +2 insight bonus to AC and a +2 bonus on attack and damage rolls against the wielder.',
        effects: [],
      },
      {
        name: 'Deadly Critical',
        level: 13,
        description:
          'When the weapon master confirms a critical hit with his chosen weapon, he can increase the critical multiplier by 1. Usable once per day, plus one additional time at 17th level.',
        effects: [],
      },
      {
        name: 'Critical Specialist',
        level: 17,
        description:
          'The weapon master gains a +2 bonus on critical confirmation rolls with his chosen weapon and can apply any known critical feat to each critical hit without declaring it beforehand.',
        effects: [],
      },
      {
        name: 'Unstoppable Weapon',
        level: 19,
        description:
          'The chosen weapon overcomes all damage reduction except DR/--. Critical hits with the chosen weapon cannot be negated by fortification or similar effects.',
        effects: [],
      },
      {
        name: 'Perfect Weapon',
        level: 20,
        description:
          'All critical threats with the chosen weapon are automatically confirmed. The critical multiplier of the chosen weapon permanently increases by 1.',
        effects: [],
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ─── 15. Child of Acavna and Amaznen ───────────────────────────────
  {
    name: 'Child of Acavna and Amaznen',
    className: 'Fighter',
    description:
      'An Azlanti-inspired warrior who blends swordplay with arcane magic, reducing arcane spell failure from armor and eventually casting spells through weapon strikes.',
    replacedFeatures: [
      'Bonus Feats (1st)',
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Eldritch Armor Training',
        level: 1,
        description:
          'The child of Acavna and Amaznen reduces arcane spell failure from armor and shields by 15%. This reduction increases by 5% at 5th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Arcane Bond',
        level: 1,
        description:
          'The fighter selects a weapon as a bonded object, as the wizard class feature. Once per day, he can use this bond to cast any one spell he has prepared (or already expended) without expending it.',
        effects: [],
      },
      {
        name: 'Cantrips',
        level: 2,
        description:
          'The child of Acavna and Amaznen can cast detect magic and read magic at will as spell-like abilities, with a caster level equal to his fighter level.',
        effects: [],
      },
      {
        name: 'Arcane Defense',
        level: 3,
        description:
          'The fighter gains a +1 bonus on saving throws against arcane spells and spell-like abilities. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Spellcasting',
        level: 5,
        description:
          'The child of Acavna and Amaznen can cast a small number of arcane spells from the wizard spell list, as a wizard of half his fighter level using Intelligence. He gains access to spells up to 4th level.',
        effects: [],
      },
      {
        name: 'Eldritch Strike',
        level: 7,
        description:
          'Once per day per 4 fighter levels, the fighter can channel a spell through his bonded weapon as part of a melee attack. If the attack hits, the target is also affected by the spell. A miss wastes the spell.',
        effects: [],
      },
      {
        name: 'Arcane Mastery',
        level: 19,
        description:
          "The fighter's Arcane Defense bonus doubles. He can use Eldritch Strike as a free action and can channel two spells through his bonded weapon in a single round.",
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ─── 16. Dragonheir Scion ──────────────────────────────────────────
  {
    name: 'Dragonheir Scion',
    className: 'Fighter',
    description:
      'A fighter who manifests draconic heritage, developing energy resistance, natural attacks, a breath weapon, and eventually wings and draconic transformation.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dragon Type',
        level: 1,
        description:
          'The dragonheir scion selects one type of chromatic or metallic dragon. This choice determines his energy type for resistance, breath weapon, and draconic strike abilities.',
        effects: [],
      },
      {
        name: 'Dragon Senses',
        level: 2,
        description:
          'The dragonheir scion gains low-light vision. At 6th level, he gains darkvision 60 feet. If he already has darkvision, its range increases by 30 feet.',
        effects: [],
      },
      {
        name: 'Energy Resistance',
        level: 3,
        description:
          'The dragonheir scion gains energy resistance 5 to the energy type of his chosen dragon. This increases to 10 at 7th, 15 at 11th, and 20 at 15th level.',
        effects: [],
      },
      {
        name: 'Draconic Strike',
        level: 5,
        description:
          'The dragonheir scion can add 1d6 energy damage (matching his dragon type) to melee weapon attacks for a number of rounds per day equal to his fighter level. Activating this is a swift action.',
        effects: [],
      },
      {
        name: 'Natural Armor',
        level: 7,
        description:
          'The dragonheir scion gains a +1 natural armor bonus to AC. This increases by +1 at 11th and 15th level.',
        effects: [],
      },
      {
        name: 'Breath Weapon',
        level: 9,
        description:
          "The dragonheir scion can use a breath weapon once per day matching his dragon type's shape and energy. It deals 1d6 damage per 2 fighter levels (Reflex DC 10 + half level + Con modifier). Additional daily uses are gained at 14th and 19th level.",
        effects: [],
      },
      {
        name: 'Wings',
        level: 13,
        description:
          'The dragonheir scion sprouts draconic wings, gaining a fly speed of 30 feet with average maneuverability. At 17th level, his fly speed increases to 60 feet with good maneuverability.',
        effects: [],
      },
      {
        name: 'Dragon Form',
        level: 17,
        description:
          'Once per day, the dragonheir scion can transform as per form of the dragon I. At 20th level, this improves to form of the dragon II.',
        effects: [],
      },
      {
        name: 'Draconic Might',
        level: 20,
        description:
          'The dragonheir scion gains immunity to his chosen energy type, blindsense 30 feet, and frightful presence (30-foot radius, Will save negates).',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Legacy of Dragons',
  },

  // ─── 17. Foehammer ─────────────────────────────────────────────────
  {
    name: 'Foehammer',
    className: 'Fighter',
    description:
      'A dwarven-inspired fighter who specializes in hammers, excelling at sunder and bull rush maneuvers while delivering crushing blows that stagger and stun opponents.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: ['Weapon Training 1'],
    newFeatures: [
      {
        name: 'Hammer to the Ground',
        level: 2,
        description:
          'When the foehammer succeeds at a bull rush combat maneuver, he can attempt a free trip against the same target at the same CMB, without provoking attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Steadfast Pike',
        level: 3,
        description:
          'The foehammer gains a +1 bonus on attack and damage rolls with hammers and similar bludgeoning weapons. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Weapon Training (Hammers)',
        level: 5,
        description:
          'The foehammer gains weapon training in the hammers weapon group. He does not gain additional groups, but his hammer bonus increases at the normal weapon training intervals.',
        effects: [],
      },
      {
        name: 'Rhythmic Blows',
        level: 7,
        description:
          'During a full attack with a hammer weapon, the foehammer gains a cumulative +1 bonus on damage rolls for each consecutive hit on the same opponent, up to a maximum equal to his weapon training bonus.',
        effects: [],
      },
      {
        name: 'Sledgehammer',
        level: 9,
        description:
          'As a standard action, the foehammer makes a single hammer attack at a -5 penalty. On a hit, the target must succeed at a Fortitude save (DC 10 + half level + Strength modifier) or be staggered for 1 round.',
        effects: [],
      },
      {
        name: 'Ground Breaker',
        level: 11,
        description:
          'As a standard action, the foehammer strikes the ground to create a 10-foot-radius area of difficult terrain. Creatures in the area must succeed at a Reflex save or fall prone.',
        effects: [],
      },
      {
        name: 'Hammer Master',
        level: 15,
        description:
          "The foehammer's critical multiplier with hammer weapons increases by 1. He also gains a +4 bonus on sunder combat maneuver checks with hammers.",
        effects: [],
      },
      {
        name: 'Devastating Smash',
        level: 19,
        description:
          'When the foehammer confirms a critical hit with a hammer, the target must succeed at a Fortitude save or be stunned for 1 round. On a successful save, the target is still staggered for 1 round.',
        effects: [],
      },
      {
        name: 'Earthshaker',
        level: 20,
        description:
          'As a full-round action, the foehammer strikes the ground to create a 30-foot-radius shockwave. All enemies in the area take weapon damage plus double Strength modifier and must save or fall prone.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Dwarves of Golarion',
  },

  // ─── 18. Gloomblade ────────────────────────────────────────────────
  {
    name: 'Gloomblade',
    className: 'Fighter',
    description:
      'A fighter who channels the Plane of Shadow to conjure weapons from shadowstuff, creating and enhancing shadowy armaments that can take any form he desires.',
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: ['Bonus Feats (1st)'],
    newFeatures: [
      {
        name: 'Shadow Weapon',
        level: 1,
        description:
          'As a move action, the gloomblade creates a shadowy weapon in his hand. This can be any melee weapon with which he is proficient. It functions as a masterwork weapon and dissipates if it leaves his grasp for more than 1 round.',
        effects: [],
      },
      {
        name: 'Shadow Weapon Training',
        level: 5,
        description:
          'The gloomblade gains a +1 bonus on attack and damage rolls with shadow weapons. This bonus increases by +1 at 9th, 13th, and 17th level. He can also create shadow weapons as a free action.',
        effects: [],
      },
      {
        name: 'Shadow Weapon Enhancement',
        level: 5,
        description:
          'The shadow weapon gains a +1 enhancement bonus, increasing by +1 at 9th, 13th, and 17th level. The gloomblade can apply weapon special abilities whose total bonus equivalent does not exceed this value.',
        effects: [],
      },
      {
        name: 'Dual Shadow Weapons',
        level: 9,
        description:
          'The gloomblade can maintain two shadow weapons simultaneously. Both gain the full benefits of his shadow weapon training and enhancement bonuses.',
        effects: [],
      },
      {
        name: 'Shadow Throwing',
        level: 13,
        description:
          'The gloomblade can create shadow thrown weapons. Thrown shadow weapons dissipate after the attack resolves, and a new one can be created as a free action immediately.',
        effects: [],
      },
      {
        name: 'Greater Shadow Weapon',
        level: 17,
        description:
          'Shadow weapons count as both cold iron and silver for overcoming damage reduction. They also bypass concealment (but not total concealment).',
        effects: [],
      },
      {
        name: 'Master of Shadows',
        level: 20,
        description:
          "The gloomblade's shadow weapons ignore all damage reduction and hardness. He can create a shadow weapon as an immediate action, even when it is not his turn.",
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },

  // ─── 19. Iron Caster ───────────────────────────────────────────────
  {
    name: 'Iron Caster',
    className: 'Fighter',
    description:
      'A fighter who unlocks magical potential through martial discipline, using equipment tricks and intense training to produce spell-like effects tied to his weapons and armor.',
    replacedFeatures: [
      'Bonus Feats (1st)',
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Iron Magic',
        level: 1,
        description:
          'The iron caster gains the ability to use equipment tricks to produce spell-like abilities. He gains one equipment trick at 1st level and additional tricks at 4th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Martial Casting',
        level: 2,
        description:
          'The iron caster can produce spell-like abilities from a limited list, using his fighter level as caster level. His casting stat is Intelligence or Charisma (chosen at 1st level). He can cast a number of spells per day equal to half his level + his casting modifier.',
        effects: [],
      },
      {
        name: 'Resolve',
        level: 3,
        description:
          'The iron caster gains a +1 bonus on saving throws against spells and spell-like abilities. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Iron Enhancement',
        level: 5,
        description:
          'Once per day as a swift action, the iron caster can temporarily grant a +1 enhancement bonus or weapon/armor special ability to his equipment for 1 minute. The enhancement improves at 9th, 13th, and 17th level.',
        effects: [],
      },
      {
        name: 'Martial Flexibility',
        level: 7,
        description:
          'As a swift action, the iron caster can temporarily gain a combat feat he does not possess for 1 minute. He can use this a number of times per day equal to 3 + his casting ability modifier.',
        effects: [],
      },
      {
        name: 'Iron Will',
        level: 11,
        description:
          'The iron caster gains immunity to charm and compulsion effects. He also gains spell resistance equal to 10 + his fighter level against enchantment spells and effects.',
        effects: [],
      },
      {
        name: 'Greater Martial Casting',
        level: 15,
        description:
          "The iron caster's spell-like abilities now include spells up to 4th level. He can spend two uses of Martial Flexibility to gain two combat feats simultaneously.",
        effects: [],
      },
      {
        name: 'Iron Mastery',
        level: 19,
        description:
          'The iron caster gains spell resistance equal to 10 + his fighter level against all spells. His Iron Enhancement ability can be used at will with a 10-minute duration.',
        effects: [],
      },
    ],
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
  },

  // ─── 20. Learned Duelist ───────────────────────────────────────────
  {
    name: 'Learned Duelist',
    className: 'Fighter',
    description:
      "An intellectually oriented fighter who applies academic study to swordplay, using Intelligence to enhance combat prowess and analyze opponents' weaknesses mid-battle.",
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Studied Defense',
        level: 2,
        description:
          'When wearing light or no armor and not using a shield, the learned duelist adds his Intelligence modifier (in addition to Dexterity) as a dodge bonus to AC, up to his fighter level.',
        effects: [],
      },
      {
        name: 'Studied Opponent',
        level: 3,
        description:
          'As a move action, the learned duelist can study one visible opponent. He gains a +1 insight bonus on attack rolls, damage rolls, and weapon DCs against that target. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Counter-Study',
        level: 7,
        description:
          "While studying an opponent, the learned duelist gains a +2 insight bonus to AC and on saving throws against that opponent's attacks and abilities.",
        effects: [],
      },
      {
        name: 'Exploit Weakness',
        level: 11,
        description:
          'Against a studied opponent, the learned duelist can ignore natural armor bonus equal to half his Intelligence modifier. He also gains +2 on combat maneuver checks against studied opponents.',
        effects: [],
      },
      {
        name: 'Insightful Strike',
        level: 15,
        description:
          'Once per round, the learned duelist adds his Intelligence modifier as precision damage on a single attack against a studied opponent. This damage is not multiplied on critical hits.',
        effects: [],
      },
      {
        name: 'Perfect Analysis',
        level: 19,
        description:
          'The learned duelist can study an opponent as a free action. Against studied opponents, his critical threat range with melee weapons doubles (this does not stack with other threat range increases).',
        effects: [],
      },
    ],
    source: "Pathfinder Player Companion: Adventurer's Guide",
  },

  // ─── 21. Martial Master ────────────────────────────────────────────
  {
    name: 'Martial Master',
    className: 'Fighter',
    description:
      "A versatile combatant who trades weapon training for the brawler's martial flexibility, temporarily gaining any combat feats he needs to adapt to any battlefield situation.",
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Martial Flexibility',
        level: 5,
        description:
          "As a move action, the martial master can gain the benefit of a combat feat he does not possess for 1 minute. He must meet the feat's prerequisites. Usable a number of times per day equal to 3 + half his fighter level.",
        effects: [],
      },
      {
        name: 'Improved Martial Flexibility',
        level: 9,
        description:
          'The martial master can gain two combat feats simultaneously with martial flexibility. He can activate martial flexibility as a swift action instead of a move action.',
        effects: [],
      },
      {
        name: 'Greater Martial Flexibility',
        level: 13,
        description:
          'The martial master can gain three combat feats simultaneously. He can select feats whose prerequisites he only meets through other feats gained via martial flexibility.',
        effects: [],
      },
      {
        name: 'Martial Mastery',
        level: 17,
        description:
          'The martial master can activate martial flexibility as a free action. He can gain up to four combat feats simultaneously, and the duration increases to 10 minutes.',
        effects: [],
      },
      {
        name: 'Ultimate Flexibility',
        level: 20,
        description:
          'The martial master can use martial flexibility at will with no daily limit. He treats his fighter level as his base attack bonus for meeting combat feat prerequisites while using martial flexibility.',
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },
  // ── 1. Mutagenic Mauler ──────────────────────────────────────────────
  {
    name: 'Mutagenic Mauler',
    className: 'Fighter',
    description:
      'A fighter who has learned to create and consume alchemical mutagens, trading armor finesse for chemically enhanced physical prowess in close combat.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mutagen',
        level: 3,
        description:
          'The mutagenic mauler gains the ability to create a mutagen as an alchemist of his fighter level. The mutagen grants a +2 alchemical bonus to one physical ability score, a +2 natural armor bonus, and a -2 penalty to the corresponding mental ability score. It lasts 10 minutes per fighter level.',
        effects: [],
      },
      {
        name: 'Greater Mutagen',
        level: 7,
        description:
          'The mutagen now grants a +4 alchemical bonus to one physical ability score and a +4 natural armor bonus, but imposes a -2 penalty to two corresponding mental ability scores. This functions as the alchemist greater mutagen discovery.',
        effects: [],
      },
      {
        name: 'Grand Mutagen',
        level: 11,
        description:
          'The mutagen grants a +6 alchemical bonus to one physical ability score, +4 to a second, and +2 to a third, with a +6 natural armor bonus and -2 penalties to all mental ability scores. This functions as the alchemist grand mutagen discovery.',
        effects: [],
      },
      {
        name: 'True Mutagen',
        level: 15,
        description:
          'The mutagen grants a +8 alchemical bonus to one physical ability score, +6 to a second, and +4 to a third, with a +8 natural armor bonus. This functions as the alchemist true mutagen discovery.',
        effects: [],
      },
      {
        name: 'Mutagen Mastery',
        level: 19,
        description:
          'The mutagenic mauler can have his mutagen active at the same time as any number of other mutagenic mauler abilities. His mutagen duration becomes permanent until he creates a new one.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ── 2. Opportunist (Fighter) ─────────────────────────────────────────
  {
    name: 'Opportunist',
    className: 'Fighter',
    description:
      'Opportunists believe every battle is one of wits rather than arms, emphasizing cunning, deception, and dirty tricks over pure martial prowess.',
    replacedFeatures: ['Bravery', 'Bonus Feats (1st)', 'Bonus Feats (4th, 8th, 12th, 16th, 20th)'],
    modifiedFeatures: ['Class Skills'],
    newFeatures: [
      {
        name: 'Duplicitous',
        level: 1,
        description:
          'The opportunist gains 2 bonus skill ranks per level that must be placed in deceptive skills. Bluff, Sense Motive, Sleight of Hand, and Stealth become class skills.',
        effects: [],
      },
      {
        name: 'Underhanded',
        level: 1,
        description:
          'The opportunist gains Improved Dirty Trick as a bonus feat, ignoring its normal prerequisites.',
        effects: [],
      },
      {
        name: 'Cunning Edge',
        level: 4,
        description:
          'At 4th level and every 4 levels thereafter, the opportunist selects one edge from a list including Alchemical Admixture, Alchemical Refinement, Bombs, Clouded Shift, Poison Use, or Rogue Talent. Each edge grants a unique tactical benefit.',
        effects: [],
      },
      {
        name: 'Alchemical Onslaught',
        level: 5,
        description:
          'The opportunist gains a +1 attack bonus with alchemical weapons, adds her Intelligence modifier to splash weapon damage, and can draw alchemical weapons as a free action once per round.',
        effects: [],
      },
    ],
    source: 'Blood of the Beast',
  },

  // ── 3. Rondolero Swashbuckler ────────────────────────────────────────
  {
    name: 'Rondolero Swashbuckler',
    className: 'Fighter',
    description:
      'A Taldan fighting style that emphasizes the falcata and buckler combination, blending offense and defense with elegant circular movements inspired by traditional dance.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Weapon Training 1',
      'Weapon Training 3',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shielded Swashbuckler',
        level: 3,
        description:
          'The rondolero swashbuckler gains a +1 bonus on attack rolls and a +1 dodge bonus to AC when wielding a falcata and buckler. These bonuses increase by +1 at 7th level and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Sweeping Rondolero',
        level: 5,
        description:
          'When using a falcata and buckler, the rondolero swashbuckler can attempt a free trip combat maneuver against an opponent she hits with a critical hit. This trip does not provoke attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Spinning Slash',
        level: 7,
        description:
          "Once per round when wielding a falcata and buckler, the rondolero swashbuckler can make a shield bash with the buckler as a swift action without losing the buckler's AC bonus for the round.",
        effects: [],
      },
      {
        name: 'Deadly Rondolero',
        level: 13,
        description:
          'When the rondolero swashbuckler confirms a critical hit with a falcata, the critical multiplier increases by 1 (typically from x3 to x4). She also adds her shield bonus to AC as a bonus on critical hit confirmation rolls.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ── 4. Scarred Legion ────────────────────────────────────────────────
  {
    name: 'Scarred Legion',
    className: 'Fighter',
    description:
      "Members of Cheliax's Scarred Legion bear ritual scars as marks of honor, gaining toughness and the ability to demoralize foes through their fearsome, battle-hardened appearance.",
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Scarification',
        level: 2,
        description:
          'The scarred legionnaire gains a +1 bonus on Intimidate checks and a +1 natural armor bonus from ritual scarring. The Intimidate bonus increases by +1 for every four levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Fearsome Scarring',
        level: 3,
        description:
          'The scarred legionnaire can demoralize opponents as a move action instead of a standard action. At 11th level, she can demoralize as a swift action.',
        effects: [],
      },
      {
        name: 'Scar Shield',
        level: 7,
        description:
          "The scarred legionnaire's toughened skin grants DR 1/--. This damage reduction increases by 1 at 11th level and every four levels thereafter, to a maximum of DR 4/-- at 19th level.",
        effects: [],
      },
      {
        name: 'Scarred Resilience',
        level: 15,
        description:
          'The scarred legionnaire becomes immune to fear effects. Allies within 30 feet who can see her gain a +4 morale bonus on saving throws against fear.',
        effects: [],
      },
      {
        name: 'Indomitable Scarring',
        level: 19,
        description:
          'Once per day when the scarred legionnaire would be reduced to below 0 hit points, she can continue fighting for 1 additional round before falling unconscious, though she is staggered during that round.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ── 5. Scrapper ──────────────────────────────────────────────────────
  {
    name: 'Scrapper',
    className: 'Fighter',
    description:
      'Scrappers salvage materials from destroyed constructs and armor to enhance their own defenses, combining sunder expertise with improvised reinforcement.',
    replacedFeatures: ['Armor Training', 'Weapon Training 1'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Scrap Armor',
        level: 3,
        description:
          "The scrapper can spend 1 minute salvaging scrap from a destroyed construct or suit of armor. Construct scrap grants a natural armor bonus equal to one-quarter the construct's Hit Dice (minimum +1). Armor scrap grants a natural armor bonus equal to 1 plus the armor's enhancement bonus. Scrap is fragile and crumbles after a number of days equal to the bonus granted. At 11th level, construct scrap also grants DR/adamantine equal to one-quarter the construct's Hit Dice.",
        effects: [],
      },
      {
        name: 'Scrapper Training',
        level: 5,
        description:
          'The scrapper selects one fighter weapon group and gains a +1 bonus on attack and damage rolls when performing sunder combat maneuvers with weapons from that group. She does not provoke attacks of opportunity when sundering with those weapons. This bonus doubles if she possesses Improved Sunder. Every 4 levels beyond 5th, she can select standard weapon training or increase this bonus by +1.',
        effects: [],
      },
    ],
    source: 'Construct Handbook',
  },

  // ── 6. Siegebreaker ──────────────────────────────────────────────────
  {
    name: 'Siegebreaker',
    className: 'Fighter',
    description:
      'The siegebreaker specializes in bull rush and overrun maneuvers, plowing through enemy lines and crushing foes by slamming them into walls and other obstacles.',
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Breaker Rush',
        level: 5,
        description:
          "Whenever the siegebreaker successfully bull rushes a creature, he deals damage equal to his Strength modifier plus his armor's enhancement bonus (if any). If the bull rush pushes the target into a wall or solid obstacle, the target takes an additional 2d6 points of damage and is knocked prone.",
        effects: [],
      },
      {
        name: 'Armored Juggernaut',
        level: 9,
        description:
          'The siegebreaker gains a +2 bonus on bull rush and overrun combat maneuver checks while wearing medium or heavy armor. This bonus increases to +4 at 13th level and +6 at 17th level.',
        effects: [],
      },
      {
        name: 'Breaker Momentum',
        level: 13,
        description:
          "When the siegebreaker successfully bull rushes a creature into another creature, both creatures take damage equal to the siegebreaker's Strength modifier. The second creature must succeed at a Reflex save (DC 10 + 1/2 fighter level + Str modifier) or be knocked prone.",
        effects: [],
      },
      {
        name: 'Devastating Rush',
        level: 17,
        description:
          'Once per round, when the siegebreaker successfully bull rushes a creature, he can make a single melee attack against that creature as a free action at his highest base attack bonus.',
        effects: [],
      },
    ],
    source: "Armor Master's Handbook",
  },

  // ── 7. Swordlord (Fighter) ──────────────────────────────────────────
  {
    name: 'Swordlord',
    className: 'Fighter',
    description:
      'An Aldori swordlord who wields the Aldori dueling sword with supreme finesse, emphasizing elegant parries and ripostes in single combat over brute force.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Weapon Training 1',
      'Weapon Training 3',
      'Weapon Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Adaptive Tactics',
        level: 3,
        description:
          'The swordlord adds his Dexterity modifier instead of his Strength modifier on damage rolls with an Aldori dueling sword. He must be wearing light armor or no armor and carrying nothing in his off hand to use this ability.',
        effects: [],
      },
      {
        name: 'Dueling Parry',
        level: 5,
        description:
          'When fighting defensively or using Combat Expertise with an Aldori dueling sword, the swordlord gains an additional +2 dodge bonus to AC. At 9th level, this bonus increases to +4.',
        effects: [],
      },
      {
        name: 'Steel Net',
        level: 7,
        description:
          'The swordlord can make an attack of opportunity against any creature within reach that attacks him in melee and misses, as long as he wields an Aldori dueling sword. He can use this a number of times per round equal to his Dexterity modifier.',
        effects: [],
      },
      {
        name: 'Deft Doublestrike',
        level: 13,
        description:
          'Once per round when the swordlord hits with an Aldori dueling sword, he can make an additional attack at a -5 penalty as a free action. At 17th level, the penalty is reduced to -2.',
        effects: [],
      },
      {
        name: 'Inevitable Strike',
        level: 17,
        description:
          'Once per day, the swordlord can declare an inevitable strike before making an attack roll with an Aldori dueling sword. The attack automatically hits and threatens a critical hit, though he must still confirm the critical normally.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ── 8. Aldori Defender ───────────────────────────────────────────────
  {
    name: 'Aldori Defender',
    className: 'Fighter',
    description:
      'A defensive specialist trained in the Aldori dueling tradition of Brevoy, emphasizing the use of the Aldori dueling sword to parry attacks and protect against disarms.',
    replacedFeatures: ['Armor Training 1-4', 'Armor Mastery', 'Bonus Feats (6th, 8th, 10th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Defensive Parry',
        level: 3,
        description:
          'When making a full attack with an Aldori dueling sword and an empty off-hand, the Aldori defender gains a +1 shield bonus to AC. This bonus increases to +2 at 7th level, +3 at 11th level, and +4 at 15th level.',
        effects: [],
      },
      {
        name: 'Disarming Strike',
        level: 6,
        description:
          'When the Aldori defender successfully disarms an opponent with an Aldori dueling sword, she also deals normal weapon damage to the disarmed creature without adding her Strength bonus.',
        effects: [],
      },
      {
        name: 'Steel Net',
        level: 8,
        description:
          "When fighting defensively with an Aldori dueling sword, the Aldori defender's attack penalties are reduced by 2 and her dodge bonus to AC from fighting defensively increases by 2.",
        effects: [],
      },
      {
        name: 'Counterattack',
        level: 10,
        description:
          'Once per round, the Aldori defender can make an attack of opportunity against any melee attacker within her reach, regardless of whether the attack hits or misses, as long as she wields an Aldori dueling sword.',
        effects: [],
      },
      {
        name: 'Saving Slash',
        level: 15,
        description:
          "Once per day when the Aldori defender would be hit by a melee attack, she can attempt to deflect the blow by making an opposing attack roll. If her result exceeds the attacker's roll, the attack misses. She gains an additional daily use at 19th level.",
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ── 9. Aquanaut ──────────────────────────────────────────────────────
  {
    name: 'Aquanaut',
    className: 'Fighter',
    description:
      'Aquanaut fighters master the flow of water, using it to their advantage in combat and excelling with piercing weapons both above and below the waves.',
    replacedFeatures: ['Bravery', 'Armor Training', 'Armor Mastery', 'Weapon Training'],
    modifiedFeatures: ['Armor Proficiency', 'Bonus Feats', 'Weapon Mastery'],
    newFeatures: [
      {
        name: 'Piercing Focus',
        level: 1,
        description:
          'The aquanaut can apply weapon-related feats (such as Weapon Focus) to all proficient piercing melee weapons simultaneously, rather than selecting a single weapon.',
        effects: [],
      },
      {
        name: 'Tidal Celerity',
        level: 2,
        description:
          'The aquanaut gains a +1 bonus on Reflex saves and saving throws against effects that would immobilize or paralyze her. This bonus increases by 1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Aquadynamic Paragon',
        level: 3,
        description:
          'The aquanaut gains progressive underwater combat abilities. At 3rd level, she gains a swim speed. At 7th level, buoyancy control. At 11th level, she can create currents. At 15th level, she can generate whirlpools. At 19th level, she gains DR 5/-- while fully submerged.',
        effects: [],
      },
      {
        name: 'Underwater Training',
        level: 5,
        description:
          'The aquanaut gains attack and damage bonuses with piercing weapons underwater, or can remove standard underwater combat penalties for bludgeoning and slashing weapons. Additional weapon groups are selected at 9th, 13th, and 17th levels.',
        effects: [],
      },
    ],
    source: 'Aquatic Adventures',
  },

  // ── 10. Armiger ──────────────────────────────────────────────────────
  {
    name: 'Armiger',
    className: 'Fighter',
    description:
      "Armigers are Hellknight-in-training fighters who undergo brutal training at their order's citadel, honing combat skills and studying philosophy until they pass the Test.",
    replacedFeatures: [
      'Bonus Feats (1st, 10th)',
      'Bravery',
      'Skill Ranks per Level',
      'Class Skills',
    ],
    modifiedFeatures: ['Bonus Feat Selection'],
    newFeatures: [
      {
        name: 'Hellknight Order',
        level: 1,
        description:
          'The armiger selects a Hellknight order to aspire to at 1st level. She must choose the same order if she later takes levels in the Hellknight prestige class.',
        effects: [],
      },
      {
        name: 'Studious Squire',
        level: 1,
        description:
          'The armiger gains 2 additional skill ranks per level that must be allocated to Intimidate and Knowledge (planes). Knowledge (local) and Knowledge (planes) become class skills.',
        effects: [],
      },
      {
        name: 'Ardent',
        level: 2,
        description:
          "The armiger gains a +1 bonus on Will saves against charm effects, increasing by 1 for every 4 fighter levels beyond 2nd. Once per day, when forced by a charm or compulsion to act against her order's beliefs, she may attempt a new Will save to resist that specific action.",
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ── 11. Buckler Duelist ──────────────────────────────────────────────
  {
    name: 'Buckler Duelist',
    className: 'Fighter',
    description:
      'A nimble combatant who pairs a one-handed weapon with a buckler, using the small shield both offensively and defensively with exceptional finesse.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Weapon Training 1',
      'Weapon Training 3',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Buckler Bash',
        level: 3,
        description:
          "The buckler duelist can make a shield bash with a buckler as though it were a light shield, dealing 1d3 damage for a Medium creature. He does not lose the buckler's AC bonus when making a shield bash.",
        effects: [],
      },
      {
        name: 'Buckler Counter',
        level: 5,
        description:
          'When using a buckler, the buckler duelist gains a +1 bonus on attack and damage rolls with his primary weapon. This bonus increases by +1 at 9th, 13th, and 17th levels.',
        effects: [],
      },
      {
        name: 'Shield Riposte',
        level: 7,
        description:
          'Once per round, when an opponent misses the buckler duelist with a melee attack, he can make an immediate shield bash against that opponent as an attack of opportunity. This does not count against his normal attacks of opportunity for the round.',
        effects: [],
      },
      {
        name: 'Defensive Shield Mastery',
        level: 13,
        description:
          "The buckler duelist adds his buckler's enhancement bonus (if any) to his touch AC as well as normal AC. He also gains a +2 bonus to CMD while wielding a buckler.",
        effects: [],
      },
    ],
    source: "Armor Master's Handbook",
  },

  // ── 12. Cavern Sniper ────────────────────────────────────────────────
  {
    name: 'Cavern Sniper',
    className: 'Fighter',
    description:
      'A drow-trained marksman who excels at ranged combat in underground environments, using darkness and narrow passages to devastating advantage.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Weapon Training 2',
      'Weapon Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Underground Sniper',
        level: 2,
        description:
          'The cavern sniper gains a +1 bonus on attack rolls with ranged weapons when in underground environments or areas of dim light or darkness. This bonus increases by +1 for every four levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Sting of Darkness',
        level: 3,
        description:
          'When the cavern sniper hits a creature with a ranged attack while in dim light or darkness, the target must succeed at a Fortitude save (DC 10 + 1/2 fighter level + Dex modifier) or be dazzled for 1 round.',
        effects: [],
      },
      {
        name: 'Silent Shot',
        level: 7,
        description:
          'The cavern sniper can make ranged attacks with crossbows, bows, and thrown weapons without breaking stealth while in dim light or darkness, taking a -5 penalty on the Stealth check to remain hidden.',
        effects: [],
      },
      {
        name: 'Tunnel Vision',
        level: 9,
        description:
          'The cavern sniper gains darkvision 60 feet, or increases existing darkvision by 30 feet. She also ignores partial cover when making ranged attacks against targets within 30 feet.',
        effects: [],
      },
      {
        name: 'Darkness Mastery',
        level: 17,
        description:
          'The cavern sniper can see perfectly in both magical and nonmagical darkness. When she hits a creature with a ranged attack from an area of darkness, the attack deals an additional 2d6 precision damage.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ── 13. Cyber-Soldier ────────────────────────────────────────────────
  {
    name: 'Cyber-Soldier',
    className: 'Fighter',
    description:
      'Cyber-soldiers replace biological components with mechanical implants, pursuing technological augmentation to exceed human limitations or repair severe injuries with cybernetic modifications.',
    replacedFeatures: [
      'Weapon Training 1',
      'Armor Training 2',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cybernetic Combat',
        level: 5,
        description:
          'The cyber-soldier gains a +1 bonus on attack and damage rolls with implanted weapons, cybernetic arms, and weapons wielded by cybernetic arms. Having two cybernetic arms doubles this bonus (except for thrown weapons). The bonus increases by 1 for every 4 levels beyond 5th. She also gains slam attacks dealing 1d6 damage (Medium).',
        effects: [],
      },
      {
        name: 'Improved Implantation',
        level: 7,
        description:
          "The cyber-soldier's brain and body slots can each accommodate one additional piece of cybertech. Her implantation point limit increases by half her fighter level, allocatable between Intelligence and Constitution scores. At 15th level, the body slot can accommodate two additional pieces.",
        effects: [],
      },
      {
        name: 'Resilience',
        level: 19,
        description:
          'The cyber-soldier gains 5 temporary hit points per installed cybertech implant. Lost temporary hit points from this ability recover at a rate of 10 per hour.',
        effects: [],
      },
    ],
    source: 'Technology Guide',
  },

  // ── 14. Dervish of Dawn ──────────────────────────────────────────────
  {
    name: 'Dervish of Dawn',
    className: 'Fighter',
    description:
      "A whirling warrior devoted to Sarenrae who channels the Dawnflower's radiance through elegant scimitar dances, blending faith and martial prowess.",
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dervish Dance',
        level: 3,
        description:
          'When wielding a scimitar in one hand with a free off-hand and wearing light or no armor, the dervish of dawn can use Dexterity instead of Strength on melee attack rolls. She still adds Strength to damage rolls.',
        effects: [],
      },
      {
        name: 'Radiant Blade',
        level: 7,
        description:
          'The dervish of dawn can cause her scimitar to glow as a torch at will. Three times per day as a swift action, she can cause the scimitar to burst with radiant light, adding 1d6 fire damage to melee attacks for a number of rounds equal to her Dexterity modifier.',
        effects: [],
      },
      {
        name: 'Sun Strike',
        level: 11,
        description:
          'When the dervish of dawn confirms a critical hit with a scimitar, the target must succeed at a Fortitude save (DC 10 + 1/2 fighter level + Dex modifier) or be blinded for 1 round. Undead and evil outsiders are blinded for 1d4 rounds on a failed save.',
        effects: [],
      },
      {
        name: 'Whirling Dance',
        level: 15,
        description:
          'The dervish of dawn can move up to her speed as a swift action without provoking attacks of opportunity, provided she begins and ends the movement wielding a scimitar. She can use this a number of times per day equal to her Dexterity modifier.',
        effects: [],
      },
      {
        name: 'Dance of the Dawn',
        level: 19,
        description:
          'Once per day, the dervish of dawn can enter a transcendent whirling state for 1 minute. While in this state, she gains a +4 sacred bonus to AC, her scimitar deals an additional 2d6 fire damage, and she is immune to fatigue and exhaustion.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ── 15. Drill Sergeant ───────────────────────────────────────────────
  {
    name: 'Drill Sergeant',
    className: 'Fighter',
    description:
      'A battlefield commander who inspires allies through relentless drilling and tactical coordination, granting teamwork feats and barking orders to improve group combat effectiveness.',
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
    ],
    modifiedFeatures: ['Bonus Feats'],
    newFeatures: [
      {
        name: 'Tactician',
        level: 5,
        description:
          "The drill sergeant gains the cavalier's tactician ability, granting a teamwork feat he possesses to all allies within 30 feet as a standard action. Allies retain the feat for 3 rounds plus 1 round per two fighter levels. He can use this once per day, plus one additional time at 9th level and every four levels thereafter.",
        effects: [],
      },
      {
        name: 'Weapon Drill',
        level: 9,
        description:
          'The drill sergeant can spend 10 minutes drilling allies within 30 feet. For the next 24 hours, those allies gain a +1 competence bonus on attack rolls with a weapon type chosen by the drill sergeant. This bonus increases by +1 at 13th and 17th levels.',
        effects: [],
      },
      {
        name: 'Greater Tactician',
        level: 13,
        description:
          'The drill sergeant can grant teamwork feats to allies as a swift action instead of a standard action. The duration also increases to 1 minute per fighter level.',
        effects: [],
      },
      {
        name: 'Master Tactician',
        level: 17,
        description:
          'The drill sergeant can grant two different teamwork feats simultaneously when using his tactician ability. Allies do not need to meet the prerequisites for either feat.',
        effects: [],
      },
    ],
    source: "Armor Master's Handbook",
  },

  // ── 16. Excavator ────────────────────────────────────────────────────
  {
    name: 'Excavator',
    className: 'Fighter',
    description:
      'A fighter trained in underground exploration and combat, skilled at navigating dungeon environments and fighting effectively in cramped, confined spaces.',
    replacedFeatures: ['Bravery', 'Armor Training 1', 'Armor Training 2', 'Weapon Training 2'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dungeon Sense',
        level: 2,
        description:
          'The excavator gains a bonus equal to 1/2 his fighter level on Perception checks to notice unusual stonework and to avoid being surprised in underground environments. He also gains stonecunning if he does not already have it.',
        effects: [],
      },
      {
        name: 'Tunnel Fighter',
        level: 3,
        description:
          'The excavator suffers no penalties on attack rolls, AC, or movement when squeezing through tight spaces. He gains a +1 bonus on attack rolls and a +1 dodge bonus to AC when adjacent to a wall, increasing by +1 at 7th level and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Stability',
        level: 7,
        description:
          'The excavator gains a +4 bonus to CMD when resisting bull rush or trip attempts while standing on stone or earth. He also gains a +2 bonus on Reflex saves against traps and natural hazards in dungeon environments.',
        effects: [],
      },
      {
        name: 'Collapse Ceiling',
        level: 9,
        description:
          'Once per day, the excavator can strike a ceiling or wall as a full-round action, causing a 10-foot-by-10-foot section to collapse. Creatures in the area take 2d6 bludgeoning damage per four fighter levels; a Reflex save (DC 10 + 1/2 fighter level + Str modifier) halves the damage and avoids burial.',
        effects: [],
      },
    ],
    source: 'Kobolds of Golarion',
  },

  // ── 17. Flying Blade (Fighter) ───────────────────────────────────────
  {
    name: 'Flying Blade',
    className: 'Fighter',
    description:
      'A specialist in thrown weapons who can hurl daggers, starknives, and similar blades with lethal precision at impressive ranges, turning common cutlery into deadly projectiles.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dagger Training',
        level: 3,
        description:
          'The flying blade gains a +1 bonus on attack and damage rolls with thrown daggers, starknives, and similar light thrown weapons. This bonus increases by +1 at 7th level and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Disrupting Counter',
        level: 7,
        description:
          'When an opponent within 30 feet makes an attack against the flying blade or an ally, the flying blade can throw a light thrown weapon at that opponent as an immediate action. If the attack hits, the opponent takes a -4 penalty on the triggering attack roll.',
        effects: [],
      },
      {
        name: 'Blade Barrage',
        level: 11,
        description:
          'Once per day as a full-round action, the flying blade can throw a light thrown weapon at every enemy within 30 feet, making a separate attack roll against each. He can use this one additional time per day at 15th and 19th levels.',
        effects: [],
      },
      {
        name: 'Precise Throw',
        level: 15,
        description:
          'The flying blade ignores cover (but not total cover) when making thrown weapon attacks. He also doubles the range increment of all light thrown weapons he wields.',
        effects: [],
      },
      {
        name: 'Deadly Barrage',
        level: 19,
        description:
          'When using blade barrage, the flying blade can make two attacks against each target instead of one. Additionally, any critical threats made during the barrage are automatically confirmed.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ── 18. Landsknecht ──────────────────────────────────────────────────
  {
    name: 'Landsknecht',
    className: 'Fighter',
    description:
      'A mercenary pikeman and swordsman inspired by historical mercenary companies, skilled with polearms and two-handed swords in organized formation combat.',
    replacedFeatures: ['Bravery', 'Armor Training 1', 'Armor Training 3'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Mercenary's Bravery",
        level: 2,
        description:
          'The landsknecht gains a +1 bonus on saving throws against fear effects and a +1 bonus on Profession (soldier) checks. Both bonuses increase by +1 for every four levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Polearm Drill',
        level: 3,
        description:
          "When wielding a polearm or two-handed sword, the landsknecht threatens an additional 5 feet beyond the weapon's normal reach. He also gains a +1 bonus on attack rolls made as attacks of opportunity with these weapons.",
        effects: [],
      },
      {
        name: 'Pike Charge',
        level: 7,
        description:
          'When the landsknecht readies a polearm against a charge, the weapon deals triple damage on a successful hit instead of double. At 11th level, a creature struck by the readied polearm must also succeed at a Fortitude save or be staggered for 1 round.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ── 19. Pack Mule ────────────────────────────────────────────────────
  {
    name: 'Pack Mule',
    className: 'Fighter',
    description:
      'Pack mules carry heavy loads with ease and small packages with discretion, serving as trained combatant couriers who can defend their charges when the need arises.',
    replacedFeatures: [
      'Bonus Feats (1st)',
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Skill Ranks per Level'],
    newFeatures: [
      {
        name: 'Unobtrusive',
        level: 1,
        description:
          'The pack mule gains Bluff, Disguise, Sleight of Hand, and Stealth as class skills.',
        effects: [],
      },
      {
        name: 'Efficient Packer',
        level: 2,
        description:
          'The pack mule adds half her class level as a bonus on Sleight of Hand checks to conceal objects and to her Strength score for the purpose of determining carrying capacity.',
        effects: [],
      },
      {
        name: 'Weight Training',
        level: 3,
        description:
          'The pack mule reduces armor check penalties when carrying medium or heavy loads by 1 (maximum reduction of 4 at 15th level) and increases her maximum Dexterity bonus by 1. At 3rd level, she moves at normal speed with a medium load; at 7th level, with a heavy load as well.',
        effects: [],
      },
      {
        name: 'Healthy as a Mule',
        level: 19,
        description:
          'The pack mule reduces all Constitution, Dexterity, or Strength ability damage she takes by 2 (minimum 0).',
        effects: [],
      },
    ],
    source: 'Black Markets',
  },

  // ── 20. Sellsword ───────────────────────────────────────────────────
  {
    name: 'Sellsword',
    className: 'Fighter',
    description:
      'A pragmatic mercenary who values gold above glory, gaining abilities that reflect a career of fighting for hire and negotiating favorable contracts.',
    replacedFeatures: ['Bravery', 'Armor Training 1', 'Weapon Training 2'],
    modifiedFeatures: ['Class Skills'],
    newFeatures: [
      {
        name: 'Hired Blade',
        level: 2,
        description:
          'The sellsword gains a bonus equal to half his fighter level on Profession (soldier) and Diplomacy checks related to negotiating mercenary contracts. He also gains a +1 morale bonus on attack and damage rolls when fighting an opponent he has been specifically contracted to defeat.',
        effects: [],
      },
      {
        name: 'Urban Warrior',
        level: 3,
        description:
          'The sellsword gains a +1 bonus on initiative checks, Perception checks, and Sense Motive checks in urban environments. These bonuses increase by +1 at 7th level and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Bodyguard Training',
        level: 9,
        description:
          'When an adjacent ally is targeted by a melee attack, the sellsword can use an immediate action to grant that ally a +2 shield bonus to AC against the attack. If the attack still hits, the sellsword can take up to half the damage dealt to the ally.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ── 21. Warlord (Fighter) ────────────────────────────────────────────
  {
    name: 'Warlord',
    className: 'Fighter',
    description:
      'A commanding battlefield leader who inspires troops with his presence, issuing tactical orders that bolster allies and demoralize enemies through force of personality.',
    replacedFeatures: [
      'Bravery',
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Battle Cry',
        level: 2,
        description:
          'As a swift action, the warlord inspires allies within 60 feet, granting a +1 morale bonus on attack rolls and saving throws against fear for a number of rounds equal to his Charisma modifier (minimum 1). This bonus increases by +1 at 6th level and every four levels thereafter. He can use this a number of times per day equal to 3 + his Charisma modifier.',
        effects: [],
      },
      {
        name: 'Tactical Acumen',
        level: 5,
        description:
          'The warlord can grant a teamwork feat he possesses to all allies within 30 feet as a standard action. Allies retain the feat for 1 round per fighter level. He can use this once per day, plus one additional time at 9th level and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Commanding Presence',
        level: 9,
        description:
          'The warlord adds his Charisma modifier as a bonus on Intimidate checks. He can demoralize all opponents within 30 feet as a standard action by making a single Intimidate check against the highest DC among them.',
        effects: [],
      },
      {
        name: 'Strategic Advance',
        level: 13,
        description:
          "As a move action, the warlord allows all allies within 30 feet to take a 5-foot step as an immediate action. This movement does not count against the allies' normal movement or 5-foot step for the round.",
        effects: [],
      },
      {
        name: "Warlord's Command",
        level: 17,
        description:
          'Once per day as a full-round action, the warlord issues a supreme command. All allies within 60 feet can immediately make one attack at their highest base attack bonus or move up to their speed. At 20th level, they can do both.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ── 22. Jabbing Boxer ────────────────────────────────────────────────
  {
    name: 'Jabbing Boxer',
    className: 'Fighter',
    description:
      'A pugilist who uses jabbing strikes and footwork to wear down opponents, landing repeated blows with fists or light weapons rather than relying on single heavy attacks.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Jab Style',
        level: 3,
        description:
          'The jabbing boxer gains Improved Unarmed Strike as a bonus feat. When making a full attack with unarmed strikes or close weapons, she gains a +1 bonus on damage rolls for each consecutive hit on the same target, up to a maximum equal to half her fighter level.',
        effects: [],
      },
      {
        name: 'Jab and Move',
        level: 7,
        description:
          'The jabbing boxer can take a 5-foot step between any two attacks during a full attack action, as long as she begins and ends her turn in legal squares.',
        effects: [],
      },
      {
        name: 'Punch Through',
        level: 11,
        description:
          "The jabbing boxer's unarmed strikes and close weapon attacks bypass damage reduction as if they were magic weapons. She also gains a +2 bonus on combat maneuver checks against foes she has already hit this round.",
        effects: [],
      },
      {
        name: 'Jab Step',
        level: 15,
        description:
          'The jabbing boxer can move up to 10 feet as a swift action once per round without provoking attacks of opportunity, as long as she has already made at least one successful attack this round.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
  },

  // ── 23. Mounted Fighter ──────────────────────────────────────────────
  {
    name: 'Mounted Fighter',
    className: 'Fighter',
    description:
      'A cavalry warrior who has mastered mounted combat, gaining the ability to charge through difficult terrain and deliver devastating lancing blows without penalty.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Skilled Rider',
        level: 2,
        description:
          'The mounted fighter gains a +1 bonus on Ride checks. This bonus increases by +1 for every 4 levels beyond 2nd. She also gains the Mounted Combat feat as a bonus feat if she does not already have it.',
        effects: [],
      },
      {
        name: 'Charge Through',
        level: 5,
        description:
          "When mounted, the mounted fighter can charge over difficult terrain and through squares occupied by allies without penalty. Her mount's speed is not reduced by wearing barding.",
        effects: [],
      },
      {
        name: 'Mounted Mettle',
        level: 7,
        description:
          "The mounted fighter's mount gains a +2 morale bonus on Will saves and is immune to the frightened condition while the fighter is mounted and conscious.",
        effects: [],
      },
      {
        name: 'Expert Rider',
        level: 11,
        description:
          'The mounted fighter can make Ride checks to stay in the saddle or control her mount as a free action. She gains a +4 bonus on Ride checks and ignores the -5 penalty for attacking while her mount is moving more than its normal speed.',
        effects: [],
      },
      {
        name: 'Mounted Mastery',
        level: 15,
        description:
          "The mounted fighter can substitute her Ride bonus for her mount's attack rolls when directing her mount to attack. Her mount gains the benefit of the Improved Natural Attack feat for all its natural attacks.",
        effects: [],
      },
      {
        name: 'Perfect Rider',
        level: 20,
        description:
          'The mounted fighter and her mount act as one creature. While mounted, both she and her mount gain DR 5/-- and a +4 dodge bonus to AC. The mount is never accidentally hit when the mounted fighter is the target of an attack.',
        effects: [],
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ── 24. Shield Champion ──────────────────────────────────────────────
  {
    name: 'Shield Champion',
    className: 'Fighter',
    description:
      'A fighter who has mastered using a shield as a throwing and returning weapon, combining ranged shield ricochets with powerful melee bashing attacks.',
    replacedFeatures: [
      'Weapon Training 1',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shield Throw',
        level: 5,
        description:
          'The shield champion can throw a light or heavy shield as a ranged weapon with a range increment of 20 feet, dealing damage equal to a shield bash plus his Strength modifier. The shield returns to his hand at the end of his turn.',
        effects: [],
      },
      {
        name: 'Shield Fighter',
        level: 5,
        description:
          'The shield champion gains a +1 bonus on attack and damage rolls when making a shield bash or shield throw. This bonus increases by +1 at 9th, 13th, and 17th levels.',
        effects: [],
      },
      {
        name: 'Ricochet Shield',
        level: 9,
        description:
          'When the shield champion throws his shield, he can target up to two creatures within range with a single thrown attack, making separate attack rolls for each. The shield still returns to his hand afterward.',
        effects: [],
      },
      {
        name: 'Trick Ricochet',
        level: 13,
        description:
          'The shield champion can cause his thrown shield to bounce off walls, obstacles, or the floor to attack from unexpected angles. When using this ability, the target is denied its Dexterity bonus to AC against the attack.',
        effects: [],
      },
      {
        name: 'Whirlwind Shield',
        level: 17,
        description:
          'As a full-round action, the shield champion can throw his shield to attack every enemy within 30 feet, making a separate attack roll against each at his highest base attack bonus.',
        effects: [],
      },
    ],
    source: "Pathfinder Player Companion: Armor Master's Handbook",
  },

  // ── 25. Tribal Fighter ───────────────────────────────────────────────
  {
    name: 'Tribal Fighter',
    className: 'Fighter',
    description:
      'A warrior from a primitive or nomadic culture who fights with the weapons of her people and draws strength from tribal traditions, forgoing heavy armor in favor of mobility.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Armor Proficiency (medium, heavy, tower shields)'],
    newFeatures: [
      {
        name: 'Tribal Weapons',
        level: 1,
        description:
          'The tribal fighter loses proficiency with medium armor, heavy armor, and tower shields. She selects a tribal weapon group appropriate to her culture (axes, bows, close, natural, polearms, spears, or thrown). She gains a +1 bonus on attack rolls with weapons from this group.',
        effects: [],
      },
      {
        name: 'Fierce Warrior',
        level: 3,
        description:
          'When wearing light or no armor, the tribal fighter gains a +1 dodge bonus to AC and a +1 bonus on Reflex saves. These bonuses increase by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Tribal Training',
        level: 5,
        description:
          'The tribal fighter gains a +1 bonus on attack and damage rolls with her chosen tribal weapon group. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Blood Frenzy',
        level: 9,
        description:
          'Once per day when the tribal fighter is reduced below half her hit points in combat, she can enter a frenzy as an immediate action. While frenzied, she gains a +4 morale bonus to Strength and Constitution and a -2 penalty to AC for 1 minute.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: People of the Wastes',
  },

  // ── 26. True Primitive ───────────────────────────────────────────────
  {
    name: 'True Primitive',
    className: 'Fighter',
    description:
      'A primitive warrior untouched by civilization who relies entirely on natural and crude weapons, shunning manufactured arms and armor for primal combat instincts.',
    replacedFeatures: [
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Weapon Training 3',
      'Weapon Training 4',
      'Armor Mastery',
      'Weapon Mastery',
    ],
    modifiedFeatures: [
      'Armor Proficiency (medium, heavy, tower shields)',
      'Weapon Proficiency (martial)',
    ],
    newFeatures: [
      {
        name: 'Primitive Equipment',
        level: 1,
        description:
          'The true primitive is proficient with all simple weapons and natural weapons but not with martial weapons, medium armor, heavy armor, or tower shields. She treats all primitive weapons (clubs, spears, stone axes, etc.) as martial weapons for her purposes.',
        effects: [],
      },
      {
        name: 'Favored Weapon',
        level: 1,
        description:
          'The true primitive selects one simple or natural weapon as her favored weapon. She gains Weapon Focus with this weapon as a bonus feat.',
        effects: [],
      },
      {
        name: 'Honed Instincts',
        level: 3,
        description:
          'The true primitive gains a +1 bonus on Perception and Survival checks. This bonus increases by +1 for every 4 levels beyond 3rd. She also gains the scent ability.',
        effects: [],
      },
      {
        name: 'Natural Fighter',
        level: 5,
        description:
          'The true primitive gains a +1 bonus on attack and damage rolls with her favored weapon and with natural weapons. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Primal Toughness',
        level: 11,
        description:
          'The true primitive gains DR 2/-- when wearing no armor or hide armor. This increases to DR 4/-- at 15th level and DR 6/-- at 19th level.',
        effects: [],
      },
      {
        name: 'One with Nature',
        level: 19,
        description:
          'The true primitive is treated as having the woodland stride and trackless step abilities of a ranger. She is never considered to be in difficult terrain in natural environments.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: People of the Wastes',
  },

  // ── 27. Urban Fighter ────────────────────────────────────────────────
  {
    name: 'Urban Fighter',
    className: 'Fighter',
    description:
      'A street brawler who excels in the tight quarters and chaotic environments of cities, using improvised weapons, crowd control, and dirty tricks honed in alley fights.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Crowd Control',
        level: 2,
        description:
          'The urban fighter gains a +1 bonus on attack rolls and to CMD in urban environments, and is not affected by difficult terrain caused by crowds or narrow corridors. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Street Fighter',
        level: 3,
        description:
          'The urban fighter treats improvised weapons as light weapons for the purpose of weapon finesse. She also gains the Catch Off-Guard feat as a bonus feat.',
        effects: [],
      },
      {
        name: 'Urban Ambush',
        level: 5,
        description:
          'The urban fighter can use Stealth in urban environments even while being observed, as long as she is within 10 feet of any cover or concealment. She gains a +2 bonus on attack rolls in the surprise round.',
        effects: [],
      },
      {
        name: 'Rooftop Pursuit',
        level: 7,
        description:
          'The urban fighter does not take penalties for moving over difficult urban terrain such as rooftops, rubble, or crowded markets. Her land speed increases by 10 feet in urban environments.',
        effects: [],
      },
      {
        name: 'Dirty Urbanite',
        level: 11,
        description:
          'In urban environments, the urban fighter can attempt a dirty trick, disarm, or trip combat maneuver as a swift action once per round. She gains a +2 bonus on these combat maneuver checks.',
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ── 28. Natural-Born Leader ──────────────────────────────────────────
  {
    name: 'Natural-Born Leader',
    className: 'Fighter',
    description:
      'A fighter with innate leadership qualities who inspires allies on the battlefield, gaining bonus followers and improving the morale of those who fight under his command.',
    replacedFeatures: [
      'Bravery',
      'Weapon Training 2',
      'Weapon Training 3',
      'Weapon Training 4',
      'Weapon Mastery',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Voice of Authority',
        level: 2,
        description:
          'The natural-born leader gains a +1 bonus on Diplomacy and Intimidate checks to influence allies and subordinates. This bonus increases by +1 for every 4 levels beyond 2nd. He also adds this bonus to his Leadership score.',
        effects: [],
      },
      {
        name: 'Rally the Troops',
        level: 5,
        description:
          'As a standard action, the natural-born leader can rally allies within 30 feet who are shaken, frightened, or suffering a morale penalty, granting them a new saving throw with a +2 morale bonus against the effect. He can use this a number of times per day equal to his Charisma modifier.',
        effects: [],
      },
      {
        name: 'Lead by Example',
        level: 9,
        description:
          'When the natural-born leader confirms a critical hit or reduces an enemy to 0 hit points, all allies within 30 feet gain a +2 morale bonus on attack rolls and saves against fear for 1 round.',
        effects: [],
      },
      {
        name: 'Inspiring Command',
        level: 13,
        description:
          'The natural-born leader can grant the benefit of a teamwork feat he knows to all allies within 30 feet as a move action. The benefit lasts for 1 round per fighter level. He can use this a number of times per day equal to 3 + his Charisma modifier.',
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ── 29. Martial Champion ─────────────────────────────────────────────
  {
    name: 'Martial Champion',
    className: 'Fighter',
    description:
      'A duelist and tournament warrior who relies on an exceptional chosen weapon and advanced fighting techniques to defeat opponents in formalized single combat.',
    replacedFeatures: [
      'Bravery',
      'Armor Training 1',
      'Armor Training 2',
      'Armor Training 3',
      'Armor Training 4',
      'Armor Mastery',
    ],
    modifiedFeatures: ['Weapon Training 1'],
    newFeatures: [
      {
        name: "Champion's Focus",
        level: 1,
        description:
          'The martial champion selects one martial or exotic melee weapon as her champion weapon. She gains Weapon Focus with this weapon as a bonus feat and treats her fighter level as 4 higher for the purpose of qualifying for feats that have Weapon Focus as a prerequisite.',
        effects: [],
      },
      {
        name: 'Weapon Training (Champion)',
        level: 5,
        description:
          'The martial champion gains a +1 bonus on attack and damage rolls with her champion weapon. This bonus increases by +1 at 9th, 13th, and 17th levels. She also applies this bonus to combat maneuver checks made with her champion weapon.',
        effects: [],
      },
      {
        name: 'Decisive Strike',
        level: 7,
        description:
          'Once per round when the martial champion hits with her champion weapon, she can deal an additional 1d6 points of precision damage. This increases to 2d6 at 11th level, 3d6 at 15th level, and 4d6 at 19th level.',
        effects: [],
      },
      {
        name: "Champion's Defense",
        level: 11,
        description:
          'When fighting defensively or using Combat Expertise while wielding her champion weapon, the martial champion gains a +2 dodge bonus to AC in addition to the normal bonus. She also gains a +2 bonus on saving throws against effects that would disarm or remove her champion weapon.',
        effects: [],
      },
      {
        name: "Champion's Mastery",
        level: 20,
        description:
          "The martial champion's critical threat range with her champion weapon doubles, and all critical threats are automatically confirmed. Her precision damage increases to 6d6.",
        effects: [],
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },
];
