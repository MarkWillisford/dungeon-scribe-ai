import { ArchetypeData } from '../types';

export const MONK_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Drunken Master
  // ──────────────────────────────────────────────
  {
    name: 'Drunken Master',
    className: 'Monk',
    description:
      'A drunken master sways and staggers, turning his inebriation into a potent fighting style that confounds foes and enhances his abilities through the consumption of alcohol.',
    replacedFeatures: ['Fast Movement', 'Still Mind'],
    modifiedFeatures: ['Ki Pool'],
    newFeatures: [
      {
        name: 'Drunken Ki',
        level: 3,
        description:
          'A drunken master can drink a tankard of ale or strong alcohol as a standard action that does not provoke attacks of opportunity. He regains 1 ki point when he does so. He can gain a number of ki points per day in this way equal to 1 plus one additional point for every two levels thereafter. The act of drinking counts as a ki ability.',
        effects: [],
      },
      {
        name: 'Drunken Strength',
        level: 1,
        description:
          'A drunken master can spend 1 ki point as a swift action to gain a +1 alchemical bonus to Strength for 1 round per monk level. This bonus increases by +1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Drunken Courage',
        level: 4,
        description:
          'At 4th level, a drunken master is immune to the frightened and shaken conditions as long as he has at least 1 ki point.',
        effects: [],
      },
      {
        name: 'Drunken Resilience',
        level: 5,
        description:
          'At 5th level, a drunken master gains DR 1/- as long as he has at least 1 ki point. This DR increases by 1 for every 5 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Firewater Breath',
        level: 10,
        description:
          'At 10th level, a drunken master can spend 1 ki point and take a drink of alcohol to breathe a 30-foot cone of fire that deals 1d6 fire damage per monk level (Reflex half, DC 10 + 1/2 monk level + Wis modifier).',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Flowing Monk
  // ──────────────────────────────────────────────
  {
    name: 'Flowing Monk',
    className: 'Monk',
    description:
      "The flowing monk is the wind and the river. He redirects the energy of his opponents' attacks, turning their strength against them and using their momentum to fuel his own counterattacks.",
    replacedFeatures: [
      'Stunning Fist',
      'Evasion',
      'Bonus Feat (2nd)',
      'Fast Movement',
      'Improved Evasion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bonus Feat',
        level: 1,
        description:
          'A flowing monk replaces the normal monk bonus feat list. He adds Agile Maneuvers, Combat Reflexes, Deflect Arrows, Dodge, Improved Reposition, Improved Trip, Nimble Moves, and Weapon Finesse to his list of bonus feats at 1st level.',
        effects: [],
      },
      {
        name: 'Redirection',
        level: 1,
        description:
          'At 1st level, as an immediate action, a flowing monk can attempt a reposition or trip combat maneuver against a creature that the flowing monk threatens and that attacks him. If the combat maneuver is successful, the attacker is sickened for 1 round, plus 1 round per 4 monk levels.',
        effects: [],
      },
      {
        name: 'Unbalancing Counter',
        level: 2,
        description:
          'At 2nd level, a flowing monk gains a +2 bonus on his combat maneuver checks made as part of his redirection ability. This bonus increases by +2 at 6th, 10th, and 14th levels.',
        effects: [],
      },
      {
        name: 'Flowing Dodge',
        level: 3,
        description:
          'At 3rd level, a flowing monk gains a +1 dodge bonus to AC for each enemy adjacent to him, up to a maximum bonus equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Elusive Target',
        level: 5,
        description:
          "At 5th level, as an immediate action, a flowing monk may spend 2 ki points to attempt a Reflex save (DC = attacker's attack roll) to halve damage from a melee or ranged attack that has already been determined to hit.",
        effects: [],
      },
      {
        name: 'Volley Spell',
        level: 9,
        description:
          'At 9th level, a flowing monk may spend 1 ki point as an immediate action to redirect a spell that targets him back at its caster if he succeeds on his saving throw against the spell.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 3. Hungry Ghost Monk
  // ──────────────────────────────────────────────
  {
    name: 'Hungry Ghost Monk',
    className: 'Monk',
    description:
      'The hungry ghost monk devours the ki of those he defeats, fueling his own abilities with the stolen life force of his enemies.',
    replacedFeatures: ['Stunning Fist', 'Wholeness of Body', 'Diamond Body', 'Quivering Palm'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Punishing Kick',
        level: 1,
        description:
          'At 1st level, the hungry ghost monk gains Punishing Kick as a bonus feat, even if he does not meet the prerequisites. At 10th level, he adds his Wisdom modifier to the number of times per day he can use the feat.',
        effects: [],
      },
      {
        name: 'Steal Ki',
        level: 5,
        description:
          'At 5th level, whenever a hungry ghost monk scores a confirmed critical hit or reduces an opponent to 0 or fewer hit points with an unarmed strike, he gains 1 temporary ki point. He can have a maximum number of temporary ki points equal to his Wisdom modifier. These temporary ki points last for 1 minute.',
        effects: [],
      },
      {
        name: 'Life Funnel',
        level: 7,
        description:
          'At 7th level, a hungry ghost monk can spend 2 ki points to gain 5 temporary hit points that last for 1 hour per monk level. He may spend additional ki to gain 5 more temporary hit points per 2 ki spent, up to a maximum of his monk level in temporary hit points.',
        effects: [],
      },
      {
        name: 'Life from a Stone',
        level: 11,
        description:
          'At 11th level, when a hungry ghost monk uses steal ki, if the target is not alive (undead, construct, etc.), he can still gain temporary ki.',
        effects: [],
      },
      {
        name: 'Sipping Demon',
        level: 13,
        description:
          'At 13th level, whenever a hungry ghost monk scores a hit with an unarmed strike against a living opponent, he gains 1 temporary hit point (maximum temporary hit points from this ability equals his monk level). These temporary hit points last for 1 minute.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 4. Ki Mystic
  // ──────────────────────────────────────────────
  {
    name: 'Ki Mystic',
    className: 'Monk',
    description:
      'The ki mystic believes that violence is sometimes necessary but always an evil, and that the truly enlightened achieve perfection of mind and body through meditation and spiritual development.',
    replacedFeatures: [
      'Still Mind',
      'Purity of Body',
      'Diamond Body',
      'Tongue of the Sun and Moon',
      'Empty Body',
    ],
    modifiedFeatures: ['Ki Pool'],
    newFeatures: [
      {
        name: 'Ki Mystic',
        level: 3,
        description:
          'At 3rd level, a ki mystic gains a +2 bonus on Knowledge (religion) checks and may make such checks untrained.',
        effects: [],
      },
      {
        name: 'Mystic Insight',
        level: 5,
        description:
          'At 5th level, a ki mystic gains a +2 insight bonus on saving throws against enchantment spells and effects.',
        effects: [],
      },
      {
        name: 'Mystic Visions',
        level: 11,
        description:
          'At 11th level, a ki mystic may receive mystic visions when he spends 4 ki points and meditates for 10 minutes, gaining the effects of a divination spell (caster level equals monk level).',
        effects: [],
      },
      {
        name: 'Mystic Prescience',
        level: 13,
        description:
          'At 13th level, a ki mystic gains a +2 insight bonus to AC and CMD. In addition, he can spend 2 ki points as an immediate action to gain a +4 insight bonus to AC for 1 round.',
        effects: [],
      },
      {
        name: 'Mystic Persistence',
        level: 19,
        description:
          'At 19th level, a ki mystic can spend 4 ki points to enter a state of pure awareness for 1 round per monk level, gaining blindsight 30 feet and immunity to illusions.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 5. Maneuver Master
  // ──────────────────────────────────────────────
  {
    name: 'Maneuver Master',
    className: 'Monk',
    description:
      'The maneuver master specializes in using combat maneuvers in conjunction with his unarmed strikes, gaining the ability to execute multiple maneuvers as part of a full attack.',
    replacedFeatures: [
      'Flurry of Blows',
      'Stunning Fist',
      'Evasion',
      'Bonus Feat (6th)',
      'Improved Evasion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Flurry of Maneuvers',
        level: 1,
        description:
          'At 1st level, as a full-round action, the maneuver master can make one additional combat maneuver, regardless of whether the maneuver normally replaces a melee attack or requires a standard action. He uses his monk level in place of his BAB for these checks. At 8th level, he can make two additional maneuvers, and at 15th level, he can make three.',
        effects: [],
      },
      {
        name: 'Maneuver Defense',
        level: 3,
        description:
          'At 3rd level, a maneuver master gains a +2 bonus to his CMD against all combat maneuvers. This bonus increases by +2 at 7th, 11th, and 15th levels.',
        effects: [],
      },
      {
        name: 'Reliable Maneuver',
        level: 4,
        description:
          'At 4th level, as a swift action, a maneuver master can spend 1 ki point before making a combat maneuver to roll his check twice and take the better result.',
        effects: [],
      },
      {
        name: 'Meditative Maneuver',
        level: 8,
        description:
          'At 8th level, as a swift action, a maneuver master can spend 1 ki point to add his Wisdom modifier on a combat maneuver check (in addition to Strength).',
        effects: [],
      },
      {
        name: 'Sweeping Maneuver',
        level: 11,
        description:
          'At 11th level, a maneuver master can attempt two different combat maneuvers as a standard action, taking a -2 penalty on each.',
        effects: [],
      },
      {
        name: 'Whirlwind Maneuver',
        level: 15,
        description:
          "At 15th level, once per day as a full-round action, a maneuver master can attempt a single combat maneuver against every opponent he threatens. He makes a single check and compares it against each target's CMD.",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 6. Master of Many Styles
  // ──────────────────────────────────────────────
  {
    name: 'Master of Many Styles',
    className: 'Monk',
    description:
      'The master of many styles is a versatile martial artist who can fuse different fighting techniques into a seamless blend of attacks, blocks, and counterattacks.',
    replacedFeatures: ['Flurry of Blows', 'Bonus Feat (2nd)', 'Perfect Self'],
    modifiedFeatures: ['Bonus Feats'],
    newFeatures: [
      {
        name: 'Fuse Style',
        level: 1,
        description:
          'At 1st level, a master of many styles can fuse two of the styles he knows into a more perfect style. He can have two style feat stances active at once. At 8th level, he can fuse three styles at once. At 15th level, he can fuse all known styles at once.',
        effects: [],
      },
      {
        name: 'Bonus Feat (Style Feats)',
        level: 1,
        description:
          'A master of many styles selects his bonus feats from style feats. He need not meet the prerequisites of these style feats.',
        effects: [],
      },
      {
        name: 'Perfect Style',
        level: 20,
        description:
          'At 20th level, a master of many styles can enter any number of style feat stances as a free action. He can change styles as a free action at any point during his turn.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 7. Monk of the Empty Hand
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Empty Hand',
    className: 'Monk',
    description:
      'The monk of the empty hand eschews manufactured weapons and turns mundane items into deadly improvised arms, treating the entire world as his arsenal.',
    replacedFeatures: [
      'Bonus Feat (6th)',
      'Bonus Feat (10th)',
      'Purity of Body',
      'Diamond Body',
      'Quivering Palm',
      'Timeless Body',
    ],
    modifiedFeatures: ['Bonus Feats', 'Flurry of Blows'],
    newFeatures: [
      {
        name: 'Versatile Improvisation',
        level: 1,
        description:
          "At 1st level, a monk of the empty hand treats all improvised weapons as monk weapons. He uses his unarmed strike damage in place of the weapon's normal damage (unless the improvised weapon deals more damage). He adds Catch Off-Guard and Throw Anything to his list of bonus feats.",
        effects: [],
      },
      {
        name: 'Versatile Improvisation (Flurry)',
        level: 1,
        description:
          'A monk of the empty hand can use his flurry of blows with improvised weapons.',
        effects: [],
      },
      {
        name: 'Ki Weapons',
        level: 5,
        description:
          'At 5th level, a monk of the empty hand can spend 1 ki point as a swift action to give an improvised weapon a +1 enhancement bonus for 1 round per monk level. For every 4 levels beyond 5th, the bonus increases by +1.',
        effects: [],
      },
      {
        name: 'Ki Weapons (Magic)',
        level: 9,
        description:
          'At 9th level, the monk of the empty hand can treat his improvised weapons as magic weapons for the purpose of overcoming damage reduction.',
        effects: [],
      },
      {
        name: 'Ki Weapons (Special)',
        level: 11,
        description:
          'At 11th level, the ki weapons ability can add special weapon qualities (flaming, frost, etc.) from a limited list instead of enhancement bonuses.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 8. Monk of the Four Winds
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Four Winds',
    className: 'Monk',
    description:
      'The monk of the four winds draws power from the primal forces of nature, channeling elemental fury through his fists and body.',
    replacedFeatures: [
      'Stunning Fist',
      'Slow Fall',
      'Quivering Palm',
      'Timeless Body',
      'Perfect Self',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Elemental Fist',
        level: 1,
        description:
          'At 1st level, a monk of the four winds gains Elemental Fist as a bonus feat, even if he does not meet the prerequisites. At 5th level, and every 5 levels thereafter, he increases the damage of his Elemental Fist by 1d6.',
        effects: [],
      },
      {
        name: 'Slow Time',
        level: 12,
        description:
          'At 12th level, a monk of the four winds can spend 6 ki points as a swift action to gain an additional standard action in each round for a number of rounds equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Aspect Master',
        level: 17,
        description:
          'At 17th level, a monk of the four winds must choose an element: air, earth, fire, or water. He gains an associated supernatural ability (hurricane blast, earthquake stomp, inferno rush, or tsunami strike), usable by spending ki points.',
        effects: [],
      },
      {
        name: 'Immortality',
        level: 20,
        description:
          'At 20th level, a monk of the four winds no longer ages. He remains in his current age category forever. If he is killed, he may spend 8 ki points to return to life (as resurrection) 24 hours later.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 9. Monk of the Healing Hand
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Healing Hand',
    className: 'Monk',
    description:
      'The monk of the healing hand seeks perfection through helping others, channeling ki to mend wounds and cure afflictions rather than to harm.',
    replacedFeatures: [
      'Stunning Fist',
      'Wholeness of Body',
      'Diamond Body',
      'Quivering Palm',
      'Perfect Self',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ancient Healing Hand',
        level: 7,
        description:
          "At 7th level, a monk of the healing hand can heal another creature's wounds by touching that creature and spending ki points. Each ki point spent heals 1d6 hit points of damage. He can spend a maximum number of ki points per use equal to half his monk level.",
        effects: [],
      },
      {
        name: 'Ki Sacrifice',
        level: 11,
        description:
          'At 11th level, the monk can spend all of his remaining ki (minimum 4) as a full-round action to bring a creature that has died within the last round back to life (as breath of life).',
        effects: [],
      },
      {
        name: 'True Sacrifice',
        level: 15,
        description:
          'At 15th level, the monk can sacrifice himself to bring another creature back to life. By permanently expending all his ki, he casts true resurrection on a willing creature, but dies himself in the process. The monk cannot be raised or resurrected by any means less than a miracle or wish.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 10. Monk of the Iron Mountain (Monk of the Sacred Mountain)
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Sacred Mountain',
    className: 'Monk',
    description:
      'The monk of the sacred mountain finds strength and wisdom in the eternal stability of stone. He draws his power from an unshakable connection to the earth, standing firm against all opposition.',
    replacedFeatures: ['Evasion', 'Fast Movement', 'Slow Fall', 'High Jump', 'Improved Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Iron Monk',
        level: 2,
        description:
          'At 2nd level, a monk of the sacred mountain gains Toughness as a bonus feat. In addition, the monk gains a natural armor bonus of +1 at 2nd level. This bonus increases by +1 at 6th level, and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Bastion Stance',
        level: 4,
        description:
          'At 4th level, a monk of the sacred mountain gains a +1 bonus to AC and CMD while not moving for the entire round. This bonus increases by +1 at 8th, 12th, 16th, and 20th levels.',
        effects: [],
      },
      {
        name: 'Iron Limb Defense',
        level: 5,
        description:
          'At 5th level, if a monk of the sacred mountain is adjacent to a wall or other immovable object, he gains a +2 shield bonus to AC and +2 bonus to CMD. He also gains a +4 bonus on checks against bull rush, overrun, pull, and push combat maneuvers.',
        effects: [],
      },
      {
        name: 'Adamantine Monk',
        level: 9,
        description:
          'At 9th level, a monk of the sacred mountain gains DR 1/- while not wearing armor. This DR increases by 1 for every 3 levels beyond 9th.',
        effects: [],
      },
      {
        name: 'Vow of Silence',
        level: 17,
        description:
          'At 17th level, a monk of the sacred mountain gains immunity to any spell requiring a verbal component, and SR equal to his monk level + 10.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 11. Monk of the Lotus
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Lotus',
    className: 'Monk',
    description:
      'The monk of the lotus seeks peace in all things and attempts to use diplomacy and understanding rather than violence to resolve conflicts, even in the heat of combat.',
    replacedFeatures: [
      'Stunning Fist',
      'Purity of Body',
      'Diamond Body',
      'Quivering Palm',
      'Perfect Self',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Touch of Surrender',
        level: 1,
        description:
          'At 1st level, a monk of the lotus gains Touch of Surrender. A monk of the lotus makes a melee touch attack that causes the target to become staggered for 1 round per monk level. The target can attempt a Will save (DC 10 + 1/2 monk level + Wis modifier) to negate. Uses per day equal to Stunning Fist uses.',
        effects: [],
      },
      {
        name: 'Touch of Peace',
        level: 5,
        description:
          "At 5th level, a monk of the lotus may spend 1 ki point when using touch of surrender. If the target fails its save, it is affected as sanctuary for a number of rounds equal to the monk's level.",
        effects: [],
      },
      {
        name: 'Touch of Serenity',
        level: 11,
        description:
          'At 11th level, a monk of the lotus gains Touch of Serenity as a bonus feat, even if he does not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Learned Master',
        level: 7,
        description:
          'At 7th level, a monk of the lotus gains all Knowledge skills as class skills. In addition, he uses Wisdom instead of Intelligence as the key ability for all Knowledge skill checks.',
        effects: [],
      },
      {
        name: 'Immortality',
        level: 20,
        description:
          'At 20th level, a monk of the lotus gains immortality. He ceases aging and cannot be magically aged. If he is killed, he automatically reincarnates (as the spell) 24 hours later.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 12. Nimble Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Nimble Guardian',
    className: 'Monk',
    description:
      'A catfolk monk archetype, the nimble guardian is a protector of sacred places and temple grounds, combining feline grace with monastic discipline.',
    replacedFeatures: [
      'Evasion',
      'Still Mind',
      'Slow Fall',
      'Improved Evasion',
      'Tongue of the Sun and Moon',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Defensive Aid',
        level: 2,
        description:
          'At 2nd level, as an immediate action, the nimble guardian can grant a +2 dodge bonus to AC to an adjacent ally for 1 round. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Nimble Reflexes',
        level: 3,
        description:
          'At 3rd level, the nimble guardian gains a +2 bonus on Reflex saves. This replaces still mind.',
        effects: [],
      },
      {
        name: 'Guardian Sight',
        level: 4,
        description:
          'At 4th level, the nimble guardian gains low-light vision. At 8th level, he gains darkvision 60 feet. If he already has darkvision, the range increases by 30 feet.',
        effects: [],
      },
      {
        name: 'Feline Grace',
        level: 9,
        description:
          'At 9th level, the nimble guardian always lands on his feet when falling, taking damage as if the fall were 20 feet shorter than it actually is.',
        effects: [],
      },
      {
        name: 'Evasive Guardian',
        level: 15,
        description:
          "At 15th level, the nimble guardian can use an immediate action to switch places with an adjacent ally, granting that ally the benefit of the nimble guardian's AC bonus for 1 round.",
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 13. Qinggong Monk
  // ──────────────────────────────────────────────
  {
    name: 'Qinggong Monk',
    className: 'Monk',
    description:
      'The qinggong monk is a master of ki who can substitute standard monk abilities with a wide variety of ki powers, customizing his abilities through spiritual mastery.',
    replacedFeatures: [],
    modifiedFeatures: [
      'Slow Fall',
      'High Jump',
      'Wholeness of Body',
      'Diamond Body',
      'Abundant Step',
      'Diamond Soul',
      'Quivering Palm',
      'Timeless Body',
      'Tongue of the Sun and Moon',
      'Empty Body',
      'Perfect Self',
    ],
    newFeatures: [
      {
        name: 'Ki Power',
        level: 4,
        description:
          "A qinggong monk can select a ki power from the qinggong list for which he qualifies in place of a standard monk class feature. Each ki power is associated with the level of the class feature it replaces. Available powers include: barkskin (4th), true strike (4th), gaseous form (8th), restoration (8th), dragon's breath (12th), shadow walk (12th), etherealness (16th), moment of prescience (16th), and many more.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 14. Sensei
  // ──────────────────────────────────────────────
  {
    name: 'Sensei',
    className: 'Monk',
    description:
      'A sensei is a revered teacher who draws on past experience to grant wisdom and aid to his allies. Rather than focusing purely on self-perfection, the sensei shares his knowledge and ki with others.',
    replacedFeatures: [
      'Flurry of Blows',
      'Evasion',
      'Still Mind',
      'Purity of Body',
      'Improved Evasion',
    ],
    modifiedFeatures: ['Ki Pool'],
    newFeatures: [
      {
        name: 'Insightful Strike',
        level: 1,
        description:
          'At 1st level, a sensei uses his Wisdom bonus rather than his Strength or Dexterity bonus on attack rolls and combat maneuver checks with unarmed strikes, monk weapons, or improvised weapons.',
        effects: [],
      },
      {
        name: 'Advice',
        level: 2,
        description:
          'At 2nd level, as a move action a sensei may inspire courage in his allies (as the bardic performance ability), granting a +1 morale bonus on saving throws against charm and fear effects and a +1 competence bonus on attack and weapon damage rolls. This bonus increases at 5th, 11th, and 17th levels. The sensei can use this ability a number of rounds per day equal to his monk level + his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Mystic Wisdom',
        level: 6,
        description:
          'At 6th level, a sensei may spend 1 ki point as a swift action to grant all allies within 30 feet the benefits of one of his monk class features for 1 round. Features that can be shared include evasion, fast movement, high jump, purity of body, and slow fall. At 12th level, he can share improved evasion, diamond body, and abundant step.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 15. Sohei
  // ──────────────────────────────────────────────
  {
    name: 'Sohei',
    className: 'Monk',
    description:
      'The sohei are warrior monks who focus less on unarmed combat and more on fighting with weapons and from horseback. They are militant temple guardians trained for war.',
    replacedFeatures: [
      'Stunning Fist',
      'Evasion',
      'Still Mind',
      'Ki Pool',
      'Slow Fall',
      'High Jump',
      'Improved Evasion',
    ],
    modifiedFeatures: ['Flurry of Blows', 'Bonus Feats'],
    newFeatures: [
      {
        name: 'Devoted Guardian',
        level: 1,
        description:
          'At 1st level, a sohei can always act in a surprise round even if he does not notice his enemies, though he remains flat-footed until he acts. In addition, a sohei gains a bonus on initiative rolls equal to 1/2 his monk level. At 20th level, a sohei is never flat-footed or surprised.',
        effects: [],
      },
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          "A sohei's unarmed strike damage does not increase at 4th level and above. His flurry of blows can be used with any weapon with which he has Weapon Focus (not just monk weapons).",
        effects: [],
      },
      {
        name: 'Monastic Mount',
        level: 4,
        description:
          "At 4th level, a sohei gains the service of a loyal mount as a druid's animal companion, using his monk level - 3 as his effective druid level. The mount gains evasion at 4th level and improved evasion at 9th level.",
        effects: [],
      },
      {
        name: 'Ki Weapon',
        level: 4,
        description:
          'At 4th level, as a swift action, a sohei can spend 1 ki point to grant any weapon he wields a +1 enhancement bonus for 1 round per monk level, to a maximum of +5. He can spend additional ki to add weapon special abilities from a limited list.',
        effects: [],
      },
      {
        name: 'Weapon Training',
        level: 6,
        description:
          'At 6th level, a sohei gains weapon training in one group of weapons, as the fighter class feature. He gains additional weapon training groups at 10th, 14th, and 18th levels.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 16. Tetori
  // ──────────────────────────────────────────────
  {
    name: 'Tetori',
    className: 'Monk',
    description:
      'The tetori is a wrestler and grappler without equal, using locks, throws, and submission holds to incapacitate opponents.',
    replacedFeatures: [
      'Flurry of Blows',
      'Stunning Fist',
      'Evasion',
      'Fast Movement',
      'Slow Fall',
      'High Jump',
      'Improved Evasion',
    ],
    modifiedFeatures: ['Bonus Feats'],
    newFeatures: [
      {
        name: 'Graceful Grappler',
        level: 1,
        description:
          'A tetori uses his monk level in place of his base attack bonus to determine his CMB and CMD for grapple combat maneuvers. At 4th level, he suffers no penalties for being grappled and can take attacks of opportunity against creatures he is grappling.',
        effects: [],
      },
      {
        name: 'Counter-Grapple',
        level: 4,
        description:
          'At 4th level, a tetori wrestler may make a grapple combat maneuver check as an attack of opportunity against a creature attempting to grapple him.',
        effects: [],
      },
      {
        name: 'Break Free',
        level: 5,
        description:
          'At 5th level, a tetori can spend 1 ki point as a swift action to gain a +4 bonus on grapple checks for 1 round.',
        effects: [],
      },
      {
        name: 'Inescapable Grasp',
        level: 9,
        description:
          "At 9th level, a tetori can spend 1 ki point to suppress his opponent's ability to use freedom of movement or similar effects for 1 round.",
        effects: [],
      },
      {
        name: 'Form Lock',
        level: 13,
        description:
          'At 13th level, a tetori can spend 1 ki point to prevent a grappled target from using any polymorph, etherealness, or gaseous form effect for 1 round per monk level.',
        effects: [],
      },
      {
        name: 'Iron Body',
        level: 15,
        description:
          'At 15th level, as a move action a tetori can spend 3 ki points to gain the effects of iron body for 1 round per monk level.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 17. Weapon Adept
  // ──────────────────────────────────────────────
  {
    name: 'Weapon Adept',
    className: 'Monk',
    description:
      'The weapon adept devotes himself to mastering a single monk weapon, achieving a spiritual bond with his chosen armament that transcends mere physical skill.',
    replacedFeatures: [
      'Stunning Fist',
      'Evasion',
      'Bonus Feat (2nd)',
      'Improved Evasion',
      'Perfect Self',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Way of the Weapon Master',
        level: 2,
        description:
          'At 2nd level, a weapon adept gains Weapon Focus as a bonus feat with one monk weapon of his choice. At 6th level, he gains Weapon Specialization with that weapon. At 10th level, he gains Greater Weapon Focus, and at 14th level, Greater Weapon Specialization.',
        effects: [],
      },
      {
        name: 'Perfect Strike',
        level: 1,
        description:
          'At 1st level, a weapon adept gains Perfect Strike as a bonus feat, even if he does not meet the prerequisites. He can use Perfect Strike with any monk weapon, not just a kama, nunchaku, quarterstaff, sai, or siangham. Uses per day equal to his monk level.',
        effects: [],
      },
      {
        name: 'Uncanny Initiative',
        level: 3,
        description:
          'At 3rd level, a weapon adept adds his Wisdom modifier to his initiative checks.',
        effects: [],
      },
      {
        name: 'Pure Power',
        level: 9,
        description:
          'At 9th level, a weapon adept can spend 1 ki point as a swift action to gain a +1 sacred bonus to attack rolls with his chosen weapon for 1 round. At 13th and 17th levels, this bonus increases by +1.',
        effects: [],
      },
      {
        name: 'Way of the Weapon Master (Capstone)',
        level: 20,
        description:
          "At 20th level, a weapon adept's chosen weapon automatically confirms all critical threats, and the critical multiplier is increased by 1.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 18. Zen Archer
  // ──────────────────────────────────────────────
  {
    name: 'Zen Archer',
    className: 'Monk',
    description:
      'The zen archer takes the discipline of the monk and applies it to archery, becoming one with the bow and achieving a spiritual unity between mind, body, and weapon.',
    replacedFeatures: [
      'Flurry of Blows',
      'Stunning Fist',
      'Evasion',
      'Maneuver Training',
      'Still Mind',
      'Purity of Body',
      'Improved Evasion',
    ],
    modifiedFeatures: ['Bonus Feats', 'Ki Pool'],
    newFeatures: [
      {
        name: 'Flurry of Blows (Zen Archer)',
        level: 1,
        description:
          'Starting at 1st level, a zen archer can make a flurry of blows as a full-attack action, but only when using a bow (including composite bows). He may not make a flurry of blows with his unarmed attacks or any other weapons.',
        effects: [],
      },
      {
        name: 'Bonus Feats (Zen Archer)',
        level: 1,
        description:
          "A zen archer's bonus feats must be taken from the following list: Combat Reflexes, Deflect Arrows, Dodge, Far Shot, Point-Blank Shot, Precise Shot, and Rapid Shot. At 6th level, the following feats are also available: Focused Shot, Improved Precise Shot, Manyshot, Mobility, and Parting Shot. At 10th level, he adds Improved Critical, Pinpoint Targeting, Shot on the Run, and Snatch Arrows.",
        effects: [],
      },
      {
        name: 'Perfect Strike',
        level: 1,
        description:
          'At 1st level, a zen archer gains Perfect Strike as a bonus feat, even if he does not meet the prerequisites. A zen archer can use Perfect Strike with any bow. Uses per day equal to his monk level.',
        effects: [],
      },
      {
        name: 'Way of the Bow',
        level: 2,
        description:
          'At 2nd level, a zen archer gains Weapon Focus as a bonus feat with one type of bow. At 6th level, the zen archer gains Weapon Specialization with the same bow.',
        effects: [],
      },
      {
        name: 'Zen Archery',
        level: 3,
        description:
          'At 3rd level, a zen archer may use his Wisdom modifier instead of his Dexterity modifier on ranged attack rolls when using a bow.',
        effects: [],
      },
      {
        name: 'Point Blank Master',
        level: 3,
        description:
          'At 3rd level, a zen archer gains Point Blank Master as a bonus feat, even if he does not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Ki Arrows',
        level: 5,
        description:
          'At 5th level, a zen archer may spend 1 ki point as a swift action to change the damage dice of his arrows to that of his unarmed strikes. This lasts until the start of his next turn.',
        effects: [],
      },
      {
        name: 'Reflexive Shot',
        level: 9,
        description:
          'At 9th level, a zen archer can make attacks of opportunity with his bow when threatened by a foe within 20 feet.',
        effects: [],
      },
      {
        name: 'Trick Shot',
        level: 11,
        description:
          'At 11th level, a zen archer can perform a bull rush, disarm, or trip combat maneuver with a bow attack. The target can be within 30 feet, and the zen archer uses his BAB + Wis modifier for the combat maneuver check.',
        effects: [],
      },
      {
        name: 'Ki Focus Bow',
        level: 17,
        description:
          'At 17th level, when a zen archer uses ki arrows, his bow is treated as if it had the ki focus weapon special ability.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Kata Master
  // ──────────────────────────────────────────────
  {
    name: 'Kata Master',
    className: 'Monk',
    description:
      'The kata master combines martial arts with the dramatic flair of a performer, using panache and daring deeds alongside traditional monk techniques.',
    replacedFeatures: [
      'Stunning Fist',
      'Still Mind',
      'Ki Pool',
      'Purity of Body',
      'Diamond Body',
      'Quivering Palm',
      'Diamond Soul',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Panache',
        level: 1,
        description:
          "At 1st level, a kata master gains the swashbuckler's panache class feature. He gains a panache pool equal to his Wisdom modifier (minimum 1). He regains panache when he confirms a critical hit or reduces a creature to 0 or fewer hit points with an unarmed strike or monk weapon.",
        effects: [],
      },
      {
        name: 'Deed: Dodging Panache',
        level: 1,
        description:
          "At 1st level, a kata master gains the swashbuckler's dodging panache deed, except he can use it while unarmored or in light armor.",
        effects: [],
      },
      {
        name: "Deed: Monk's Parry",
        level: 3,
        description:
          'At 3rd level, when an opponent makes a melee attack against the kata master, the kata master can spend 1 panache point to attempt to parry the attack with an unarmed strike, making an attack roll as an immediate action.',
        effects: [],
      },
      {
        name: 'Deed: Stunning Panache',
        level: 5,
        description:
          'At 5th level, a kata master can spend 1 panache point to stun a creature hit by his unarmed strike (Fortitude save, DC 10 + 1/2 monk level + Wis modifier, negates).',
        effects: [],
      },
      {
        name: 'Deed: Evasive Kata',
        level: 11,
        description:
          'At 11th level, a kata master can spend 1 panache point as an immediate action to gain the benefit of evasion until the start of his next turn.',
        effects: [],
      },
      {
        name: "Deed: Monk's Edge",
        level: 15,
        description:
          'At 15th level, a kata master can spend 2 panache points to gain a +4 dodge bonus to AC for 1 round.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 20. Windstep Master
  // ──────────────────────────────────────────────
  {
    name: 'Windstep Master',
    className: 'Monk',
    description:
      'A sylph monk who harnesses the power of elemental air, the windstep master can become as insubstantial as the wind itself.',
    replacedFeatures: [
      'Slow Fall',
      'High Jump',
      'Wholeness of Body',
      'Abundant Step',
      'Diamond Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Wind Sight',
        level: 1,
        description:
          'A windstep master ignores concealment from fog and smoke. At 4th level, he also ignores concealment from dust and sandstorms.',
        effects: [],
      },
      {
        name: 'Wind Step',
        level: 4,
        description:
          'At 4th level, as a move action, a windstep master can spend 1 ki point to become invisible for 1 round (as vanish).',
        effects: [],
      },
      {
        name: 'Windborne Speed',
        level: 6,
        description:
          'At 6th level, the windstep master can spend 1 ki point to gain a fly speed equal to his land speed (average maneuverability) for 1 round.',
        effects: [],
      },
      {
        name: 'Wind Breaker',
        level: 7,
        description:
          'At 7th level, the windstep master can spend 2 ki points as a standard action to create a gust of wind (as the spell).',
        effects: [],
      },
      {
        name: 'Windwalk',
        level: 11,
        description:
          'At 11th level, the windstep master can spend 4 ki points to use wind walk (as the spell) on himself for up to 1 minute per monk level.',
        effects: [],
      },
      {
        name: 'Body of Air',
        level: 12,
        description:
          'At 12th level, the windstep master can spend 3 ki points to assume gaseous form (as the spell) for 1 minute per monk level.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 21. Monk of the Iron Mountain
  // ──────────────────────────────────────────────
  {
    name: 'Ironskin Monk',
    className: 'Monk',
    description:
      'A hobgoblin monk archetype, the ironskin monk focuses on toughening his body against attack, trading speed and agility for raw durability and resistance.',
    replacedFeatures: ['Evasion', 'Fast Movement', 'High Jump', 'Slow Fall', 'Improved Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Iron Skin',
        level: 1,
        description:
          'At 1st level, an ironskin monk gains a +1 natural armor bonus. This bonus increases by +1 at 4th level and every 4 levels thereafter (to a maximum of +6 at 20th level).',
        effects: [],
      },
      {
        name: 'Iron Limb Defense',
        level: 2,
        description:
          'At 2nd level, the ironskin monk can use his arms and legs to deflect attacks, gaining a +2 shield bonus to AC as long as he has at least one hand free. This replaces evasion.',
        effects: [],
      },
      {
        name: 'Tough as Iron',
        level: 3,
        description:
          'At 3rd level, an ironskin monk gains DR 1/-. This DR increases by 1 at 6th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Shattering Punch',
        level: 9,
        description:
          "At 9th level, an ironskin monk can spend 1 ki point to ignore an object's hardness when making a sunder combat maneuver or when attacking an object.",
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 22. Far Strike Monk
  // ──────────────────────────────────────────────
  {
    name: 'Far Strike Monk',
    className: 'Monk',
    description:
      'The far strike monk blurs the line between melee and ranged combat, hurling weapons with the same skill and power that other monks apply to their fists.',
    replacedFeatures: [
      'Flurry of Blows',
      'Stunning Fist',
      'Evasion',
      'Purity of Body',
      'Improved Evasion',
    ],
    modifiedFeatures: ['Bonus Feats'],
    newFeatures: [
      {
        name: 'Thrown Weapon Flurry',
        level: 1,
        description:
          'Starting at 1st level, a far strike monk can make a flurry of blows using any combination of unarmed strikes or thrown weapons (including shuriken). He may not use this ability with melee weapons.',
        effects: [],
      },
      {
        name: 'Bonus Feat (Far Strike)',
        level: 1,
        description:
          'The far strike monk adds Far Shot, Point-Blank Shot, Precise Shot, Quick Draw, and Rapid Shot to his list of bonus feats.',
        effects: [],
      },
      {
        name: 'Snap Shot',
        level: 2,
        description:
          'At 2nd level, a far strike monk can make ranged attacks with thrown weapons without provoking attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Ki Throwing',
        level: 5,
        description:
          'At 5th level, a far strike monk can spend 1 ki point as a swift action to increase the range increment of any thrown weapon by 20 feet for 1 round.',
        effects: [],
      },
      {
        name: 'Invisible Blade',
        level: 9,
        description:
          'At 9th level, a far strike monk can spend 1 ki point to make a ranged attack with a thrown weapon that the target is flat-footed against.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 23. Monk of the Mantis
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Mantis',
    className: 'Monk',
    description:
      'The monk of the mantis is trained in the lethal arts of the Red Mantis assassins, combining traditional monk techniques with precision strikes and deadly focus.',
    replacedFeatures: ['Stunning Fist', 'Still Mind', 'Slow Fall', 'Wholeness of Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sneak Attack',
        level: 1,
        description:
          'At 1st level, a monk of the mantis gains sneak attack as a rogue of his monk level -2 (minimum +1d6 at 1st level). This increases by +1d6 every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Bleeding Attack',
        level: 4,
        description:
          'At 4th level, a monk of the mantis can cause living opponents damaged by his sneak attack to bleed, dealing 1 point of bleed damage per die of sneak attack.',
        effects: [],
      },
      {
        name: 'Mantis Torment',
        level: 3,
        description:
          'At 3rd level, a monk of the mantis gains Mantis Style as a bonus feat, even if he does not meet the prerequisites. At 7th level, he gains Mantis Wisdom, and at 11th level, Mantis Torment.',
        effects: [],
      },
      {
        name: 'Deadly Poise',
        level: 7,
        description:
          'At 7th level, a monk of the mantis can spend 1 ki point as a swift action to deny a target its Dexterity bonus to AC against his attacks for 1 round.',
        effects: [],
      },
    ],
    source: 'Faiths of Corruption',
  },

  // ──────────────────────────────────────────────
  // 24. Invested Regent
  // ──────────────────────────────────────────────
  {
    name: 'Invested Regent',
    className: 'Monk',
    description:
      'The invested regent is a monk who draws upon the power of a divine mandate, channeling authority and majesty to command allies and cow enemies.',
    replacedFeatures: [
      'Stunning Fist',
      'Still Mind',
      'Slow Fall',
      'Wholeness of Body',
      'Diamond Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Invested Authority',
        level: 1,
        description:
          'At 1st level, an invested regent gains a +1 competence bonus on Diplomacy and Intimidate checks. This bonus increases by +1 at 4th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Commanding Presence',
        level: 3,
        description:
          'At 3rd level, an invested regent can spend 1 ki point to use command (as the spell, Will save DC 10 + 1/2 monk level + Wis modifier) as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Royal Mandate',
        level: 4,
        description:
          'At 4th level, an invested regent can spend 2 ki points to grant an adjacent ally a bonus move action.',
        effects: [],
      },
      {
        name: 'Sovereign Immunity',
        level: 7,
        description:
          'At 7th level, an invested regent gains a +4 bonus on saving throws against compulsion effects.',
        effects: [],
      },
      {
        name: 'Crown of Heaven',
        level: 11,
        description:
          'At 11th level, an invested regent can spend 3 ki points to gain an aura that grants all allies within 30 feet a +2 morale bonus on attack rolls and saving throws for 1 round per monk level.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 25. Monk of the Seven Forms
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Seven Forms',
    className: 'Monk',
    description:
      'The monk of the seven forms is a versatile combatant who shifts between different animal styles, each granting distinct combat advantages.',
    replacedFeatures: [
      'Stunning Fist',
      'Bonus Feat (2nd)',
      'Bonus Feat (6th)',
      'Maneuver Training',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Seven Forms Training',
        level: 1,
        description:
          'At 1st level, a monk of the seven forms gains one style feat (such as Crane Style, Dragon Style, Monkey Style, Panther Style, Snake Style, Tiger Style, or similar) as a bonus feat. He need not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Form Mastery',
        level: 2,
        description:
          'At 2nd level, the monk can enter a style stance as a swift action rather than requiring the normal action. At 8th level, he can enter a style as a free action.',
        effects: [],
      },
      {
        name: 'Fluid Form',
        level: 3,
        description:
          'At 3rd level, the monk can have two style stances active at the same time. He gains an additional simultaneous stance at 7th, 11th, 15th, and 19th levels.',
        effects: [],
      },
      {
        name: 'Style Master',
        level: 6,
        description:
          'At 6th level, a monk of the seven forms gains another style feat for which he qualifies. He gains additional style feats at 10th, 14th, and 18th levels.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting',
  },

  // ──────────────────────────────────────────────
  // 26. Underfoot Adept
  // ──────────────────────────────────────────────
  {
    name: 'Underfoot Adept',
    className: 'Monk',
    description:
      'A halfling monk archetype, the underfoot adept turns her small size to her advantage, darting beneath the legs of larger foes and using their size against them.',
    replacedFeatures: ['Stunning Fist', 'Maneuver Training', 'Still Mind', 'Slow Fall'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Underfoot Grace',
        level: 1,
        description:
          "At 1st level, an underfoot adept uses her size and target's size modifier to calculate CMB for trip and dirty trick combat maneuvers, treating each size category the target is larger as a +2 bonus to the underfoot adept's CMB. She also gains Improved Trip as a bonus feat.",
        effects: [],
      },
      {
        name: 'Underfoot Trip',
        level: 1,
        description:
          'At 1st level, an underfoot adept can attempt a trip against a creature two or more size categories larger without provoking an attack of opportunity.',
        effects: [],
      },
      {
        name: 'Improved Underfoot Grace',
        level: 4,
        description:
          'At 4th level, an underfoot adept gains Greater Trip as a bonus feat, even if she does not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Topple Giants',
        level: 15,
        description:
          "At 15th level, when an underfoot adept successfully trips a foe of a larger size category, that foe provokes attacks of opportunity from all of the monk's allies who threaten that foe.",
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 27. Treetop Monk
  // ──────────────────────────────────────────────
  {
    name: 'Treetop Monk',
    className: 'Monk',
    description:
      'A vanara monk archetype, the treetop monk combines simian agility with monastic discipline, excelling at climbing, leaping, and aerial combat.',
    replacedFeatures: ['Slow Fall', 'High Jump', 'Wholeness of Body'],
    modifiedFeatures: ['Fast Movement'],
    newFeatures: [
      {
        name: 'Branch Runner',
        level: 1,
        description:
          'At 1st level, a treetop monk adds his monk level to Acrobatics checks made to jump. He also gains a climb speed equal to half his land speed.',
        effects: [],
      },
      {
        name: 'Wood Hops',
        level: 4,
        description:
          'At 4th level, a treetop monk can spend 1 ki point as a move action to jump a distance equal to his monk fast movement bonus without needing to make an Acrobatics check.',
        effects: [],
      },
      {
        name: 'Freedom of Movement',
        level: 5,
        description:
          'At 5th level, a treetop monk gains a climb speed equal to his full land speed and can climb without needing to make Climb checks.',
        effects: [],
      },
      {
        name: 'Aerial Assault',
        level: 7,
        description:
          'At 7th level, a treetop monk deals additional damage equal to his Wisdom modifier on attacks made while jumping or swinging through trees.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 28. Wild Monk
  // ──────────────────────────────────────────────
  {
    name: 'Wildcat',
    className: 'Monk',
    description:
      'The wildcat is a catfolk monk who fights with savage feline grace, incorporating natural attacks into his monk training.',
    replacedFeatures: ['Stunning Fist', 'Maneuver Training', 'Still Mind'],
    modifiedFeatures: ['Flurry of Blows'],
    newFeatures: [
      {
        name: 'Cat Claws',
        level: 1,
        description:
          'At 1st level, a wildcat gains two claw attacks that deal 1d4 damage (for a Medium creature). These claws are treated as monk weapons for all purposes, including flurry of blows.',
        effects: [],
      },
      {
        name: 'Feral Combat Training',
        level: 1,
        description:
          'At 1st level, a wildcat gains Feral Combat Training as a bonus feat, applying his unarmed strike damage dice to his claw attacks.',
        effects: [],
      },
      {
        name: "Cat's Luck",
        level: 3,
        description:
          'At 3rd level, once per day when a wildcat fails a Reflex saving throw, he can reroll that save. He must take the new result. He can use this ability one additional time per day at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Pounce',
        level: 11,
        description: 'At 11th level, a wildcat can make a full attack at the end of a charge.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 29. Gray Disciple
  // ──────────────────────────────────────────────
  {
    name: 'Gray Disciple',
    className: 'Monk',
    description:
      'A duergar monk archetype, the gray disciple channels the innate magic of his race into his monastic abilities, gaining powers of enlargement, invisibility, and earth manipulation.',
    replacedFeatures: [
      'Stunning Fist',
      'Slow Fall',
      'Wholeness of Body',
      'Abundant Step',
      'Empty Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Gray Heart',
        level: 1,
        description:
          "At 1st level, a gray disciple gains Improved Unarmed Strike (if he doesn't have it already) and can use his duergar enlarge person spell-like ability as a swift action.",
        effects: [],
      },
      {
        name: 'Fade from Sight',
        level: 4,
        description:
          'At 4th level, a gray disciple can spend 1 ki point to use invisibility on himself (as the spell, caster level = monk level).',
        effects: [],
      },
      {
        name: 'Earth Glide',
        level: 7,
        description:
          'At 7th level, a gray disciple can spend 2 ki points to gain the earth glide ability for 1 round per monk level, moving through stone and earth as easily as through air.',
        effects: [],
      },
      {
        name: 'Stone Self',
        level: 12,
        description:
          'At 12th level, a gray disciple can spend 3 ki points to gain DR 5/adamantine for 1 round per monk level.',
        effects: [],
      },
      {
        name: 'Gray Render',
        level: 19,
        description:
          'At 19th level, a gray disciple can spend 5 ki points to transform into a Huge earth elemental (as elemental body IV) for 1 minute per monk level.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 30. Student of Stone
  // ──────────────────────────────────────────────
  {
    name: 'Student of Stone',
    className: 'Monk',
    description:
      'An oread monk archetype, the student of stone channels the power of elemental earth through his body, gaining resilience and the ability to transform into living stone.',
    replacedFeatures: [
      'Evasion',
      'High Jump',
      'Wholeness of Body',
      'Abundant Step',
      'Diamond Body',
      'Improved Evasion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hard as Stone',
        level: 2,
        description:
          'At 2nd level, a student of stone gains a +1 natural armor bonus. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Strength of Stone',
        level: 5,
        description:
          'At 5th level, a student of stone gains a +2 bonus to CMD against bull rush, reposition, and trip combat maneuvers while on the ground.',
        effects: [],
      },
      {
        name: 'Bones of Stone',
        level: 7,
        description:
          'At 7th level, a student of stone can spend 1 ki point as a standard action to gain DR 2/magic for 1 round per monk level. This DR increases to DR 4/magic at 12th level and DR 6/magic at 17th level.',
        effects: [],
      },
      {
        name: 'Body of Stone',
        level: 9,
        description:
          'At 9th level, once per day, a student of stone can spend 3 ki points to gain the effects of stoneskin (without the material component) for 1 minute per monk level.',
        effects: [],
      },
      {
        name: 'Soul of Stone',
        level: 12,
        description:
          'At 12th level, a student of stone can spend 4 ki points to assume an earth elemental form (as elemental body II) for 1 minute per monk level.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 31. Monk of the Seven Winds
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Seven Winds',
    className: 'Monk',
    description:
      'The monk of the seven winds is devoted to mastering the art of speed and wind, becoming a blur of motion on the battlefield.',
    replacedFeatures: ['Slow Fall', 'High Jump', 'Wholeness of Body', 'Diamond Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Seven Winds Stance',
        level: 4,
        description:
          'At 4th level, a monk of the seven winds gains a +2 dodge bonus to AC during any round in which he moves at least 10 feet. This bonus increases by +1 for every 4 levels beyond 4th.',
        effects: [],
      },
      {
        name: 'Wind Blast',
        level: 7,
        description:
          'At 7th level, the monk can spend 2 ki points to create a powerful blast of wind as a standard action, functioning as gust of wind with a DC of 10 + 1/2 monk level + Wis modifier.',
        effects: [],
      },
      {
        name: 'Whirlwind Attack',
        level: 11,
        description:
          "At 11th level, the monk gains Whirlwind Attack as a bonus feat, even if he doesn't meet the prerequisites.",
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting',
  },

  // ──────────────────────────────────────────────
  // 32. Scaled Fist
  // ──────────────────────────────────────────────
  {
    name: 'Scaled Fist',
    className: 'Monk',
    description:
      'The scaled fist is a monk who has embraced the power and majesty of dragonkind, using Charisma rather than Wisdom to fuel his ki and special abilities.',
    replacedFeatures: [
      'Stunning Fist',
      'Evasion',
      'Still Mind',
      'Ki Pool',
      'Purity of Body',
      'Diamond Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Draconic Might',
        level: 1,
        description:
          'At 1st level, a scaled fist uses Charisma instead of Wisdom to determine his AC bonus, ki pool, and the DC of any monk class features that require a saving throw.',
        effects: [],
      },
      {
        name: 'Dragon Style',
        level: 1,
        description:
          'At 1st level, a scaled fist gains Improved Unarmed Strike and Dragon Style as bonus feats. He need not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Draconic Fury',
        level: 2,
        description:
          'At 2nd level, a scaled fist can spend 1 ki point as a swift action to apply one of the following damage types to his unarmed strikes for 1 round: acid, cold, electricity, or fire.',
        effects: [],
      },
      {
        name: 'Dragon Ki Pool',
        level: 4,
        description:
          'At 4th level, a scaled fist gains a ki pool equal to 1/2 his monk level + his Charisma modifier. Ki strikes count as magic. At 7th level, his ki strikes count as cold iron and silver. At 10th level, they count as lawful. At 16th level, they count as adamantine.',
        effects: [],
      },
      {
        name: 'Draconic Mettle',
        level: 3,
        description:
          'At 3rd level, a scaled fist gains a +2 bonus on saving throws against paralysis and sleep effects. At 7th level, this bonus applies to fear effects as well.',
        effects: [],
      },
      {
        name: 'Dragon Roar',
        level: 5,
        description:
          'At 5th level, a scaled fist can spend 1 ki point to emit a terrifying roar as a standard action. All enemies within 30 feet must succeed on a Will save or be shaken for 1d4+1 rounds.',
        effects: [],
      },
      {
        name: 'Dragon Breath',
        level: 11,
        description:
          'At 11th level, a scaled fist can spend 3 ki points to breathe a 30-foot cone or 60-foot line of energy damage (type chosen when this ability is first gained), dealing 1d6 damage per monk level (Reflex half).',
        effects: [],
      },
    ],
    source: 'Legacy of Dragons',
  },

  // ──────────────────────────────────────────────
  // 33. Hamatulatsu Master
  // ──────────────────────────────────────────────
  {
    name: 'Hamatulatsu Master',
    className: 'Monk',
    description:
      'The hamatulatsu master practices a fighting style inspired by the barbed devils of Hell, emphasizing painful piercing strikes that cause bleeding wounds.',
    replacedFeatures: ['Stunning Fist', 'Bonus Feat (2nd)', 'Still Mind', 'Purity of Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hamatulatsu',
        level: 1,
        description:
          'At 1st level, a hamatulatsu master gains the Hamatulatsu feat as a bonus feat. His unarmed strikes deal piercing damage (he can choose bludgeoning or piercing with each strike) and can cause bleed damage.',
        effects: [],
      },
      {
        name: 'Impaling Strike',
        level: 2,
        description:
          'At 2nd level, when a hamatulatsu master confirms a critical hit with an unarmed strike, the target takes 1 point of bleed damage. This bleed increases by 1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Hellish Resistance',
        level: 3,
        description:
          'At 3rd level, a hamatulatsu master gains fire resistance 5. At 7th level, this increases to fire resistance 10.',
        effects: [],
      },
      {
        name: 'Barbed Flesh',
        level: 5,
        description:
          'At 5th level, any creature grappling or striking the hamatulatsu master with a natural weapon or unarmed strike takes 1d4 points of piercing damage.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 34. Sage Counselor
  // ──────────────────────────────────────────────
  {
    name: 'Sage Counselor',
    className: 'Monk',
    description:
      'The sage counselor is a monk who focuses on advising and guiding allies, using wisdom and insight to bolster his companions rather than engaging directly in combat.',
    replacedFeatures: ['Stunning Fist', 'Still Mind', 'Purity of Body', 'Diamond Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Sage's Guidance",
        level: 1,
        description:
          'At 1st level, as a move action, the sage counselor can grant an ally within 30 feet a +1 insight bonus on attack rolls or saving throws for 1 round. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Wise Counsel',
        level: 3,
        description:
          'At 3rd level, the sage counselor can spend 1 ki point to allow an ally within 30 feet to reroll a failed skill check.',
        effects: [],
      },
      {
        name: 'Calming Presence',
        level: 5,
        description:
          'At 5th level, allies within 30 feet of the sage counselor gain a +2 morale bonus on saving throws against fear and emotion effects.',
        effects: [],
      },
      {
        name: 'Sagacious Focus',
        level: 11,
        description:
          'At 11th level, the sage counselor can spend 2 ki points to grant an ally within 30 feet an extra standard action on their next turn.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 35. Brazen Disciple
  // ──────────────────────────────────────────────
  {
    name: 'Brazen Disciple',
    className: 'Monk',
    description:
      'The brazen disciple is an ifrit monk who channels the fires of the Plane of Fire through monastic discipline, imbuing his strikes with elemental flame.',
    replacedFeatures: ['Still Mind', 'Slow Fall', 'Wholeness of Body', 'Diamond Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Firestarter',
        level: 1,
        description:
          'At 1st level, a brazen disciple gains Elemental Fist as a bonus feat (fire only). He can use this feat a number of additional times per day equal to half his monk level.',
        effects: [],
      },
      {
        name: 'Burning Resilience',
        level: 3,
        description:
          'At 3rd level, a brazen disciple gains fire resistance 5. This resistance increases by 5 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Immolation',
        level: 4,
        description:
          'At 4th level, as a swift action, the brazen disciple can spend 1 ki point to wreathe his body in flames for 1 round per monk level. Creatures striking him with natural weapons or unarmed strikes take 1d6 fire damage.',
        effects: [],
      },
      {
        name: 'Blazing Fists',
        level: 7,
        description:
          "At 7th level, the brazen disciple's unarmed strikes deal an additional 1d6 fire damage whenever he uses Elemental Fist. This extra damage increases to 2d6 at 13th level.",
        effects: [],
      },
      {
        name: 'Phoenix Rising',
        level: 11,
        description:
          'At 11th level, once per day when reduced to below 0 hit points, the brazen disciple can spend 4 ki points to heal himself for a number of hit points equal to his monk level.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 36. Martial Artist
  // ──────────────────────────────────────────────
  {
    name: 'Martial Artist',
    className: 'Monk',
    description:
      'The martial artist pursues martial arts purely as a physical discipline, forgoing the spiritual aspects of ki in favor of honing his body to the peak of mortal perfection.',
    replacedFeatures: [
      'Still Mind',
      'Ki Pool',
      'Slow Fall',
      'High Jump',
      'Wholeness of Body',
      'Diamond Body',
      'Abundant Step',
      'Diamond Soul',
      'Quivering Palm',
      'Timeless Body',
      'Tongue of the Sun and Moon',
      'Empty Body',
      'Perfect Self',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Pain Points',
        level: 3,
        description:
          "At 3rd level, a martial artist's unarmed strikes deal additional damage equal to 1/2 his monk level on a successful critical hit.",
        effects: [],
      },
      {
        name: 'Martial Arts Training',
        level: 4,
        description:
          'At 4th level, a martial artist counts his monk level as fighter levels for qualifying for feats that require fighter levels.',
        effects: [],
      },
      {
        name: 'Exploit Weakness',
        level: 4,
        description:
          'At 4th level, as a swift action, a martial artist can observe a creature and identify weaknesses. He gains a +2 bonus on attack rolls and damage rolls against that creature for 1 round. This bonus increases by +2 at 8th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Extreme Endurance',
        level: 5,
        description:
          'At 5th level, a martial artist can resist extremes of temperature as endure elements. At 9th level, he gains resistance 10 to one energy type. He gains resistance to additional types at 13th and 17th levels.',
        effects: [],
      },
      {
        name: 'Physical Resistance',
        level: 7,
        description:
          'At 7th level, a martial artist gains DR 1/- if wearing no armor and not using a shield. This DR increases by 1 at 10th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Defensive Roll',
        level: 13,
        description:
          'At 13th level, once per day, a martial artist can attempt to roll with a potentially lethal blow, reducing the damage as the rogue advanced talent.',
        effects: [],
      },
      {
        name: 'Quivering Palm (Martial Artist)',
        level: 15,
        description:
          'At 15th level, a martial artist gains quivering palm as the monk ability, except the DC is 10 + 1/2 monk level + Strength modifier (instead of Wisdom).',
        effects: [],
      },
      {
        name: 'Greater Defensive Roll',
        level: 19,
        description:
          'At 19th level, a martial artist can use defensive roll one additional time per day for every 4 levels beyond 13th.',
        effects: [],
      },
      {
        name: 'Physical Perfection',
        level: 20,
        description:
          'At 20th level, a martial artist gains DR 5/-, immunity to poisons and diseases, and is no longer subject to critical hits.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 37. Nornkith
  // ──────────────────────────────────────────────
  {
    name: 'Nornkith',
    className: 'Monk',
    description:
      'The nornkith is a monk who studies the threads of fate, learning to perceive and manipulate destiny through meditative focus and physical discipline.',
    replacedFeatures: ['Still Mind', 'Slow Fall', 'Wholeness of Body', 'Abundant Step'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fate Sight',
        level: 3,
        description:
          'At 3rd level, a nornkith gains a +2 insight bonus on Sense Motive checks and initiative checks. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: "Fate's Thread",
        level: 4,
        description:
          'At 4th level, a nornkith can spend 1 ki point as an immediate action to reroll a saving throw. He must take the second result.',
        effects: [],
      },
      {
        name: 'Sever Fate',
        level: 7,
        description:
          'At 7th level, when a nornkith confirms a critical hit with an unarmed strike, the target must succeed on a Will save or be staggered for 1 round per monk level.',
        effects: [],
      },
      {
        name: 'Weave Fate',
        level: 12,
        description:
          'At 12th level, a nornkith can spend 3 ki points as a standard action to force one creature within 30 feet to reroll its next d20 roll and take the worse result.',
        effects: [],
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 38. Harrow Warden
  // ──────────────────────────────────────────────
  {
    name: 'Harrow Warden',
    className: 'Monk',
    description:
      'The harrow warden is a monk who draws power from the mystical harrow deck, gaining different abilities based on the cards he draws.',
    replacedFeatures: ['Stunning Fist', 'Still Mind', 'Slow Fall', 'High Jump', 'Purity of Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Harrow Strikes',
        level: 1,
        description:
          'At 1st level, at the start of each day, the harrow warden draws a card from a harrow deck. Based on the suit drawn, he gains a bonus to his unarmed strikes for that day: hammers (+1 damage), keys (+1 attack), shields (+1 AC), books (+1 skill checks), stars (+1 saves), or crowns (+1 CMB/CMD).',
        effects: [],
      },
      {
        name: 'Harrow Reading',
        level: 3,
        description:
          'At 3rd level, a harrow warden can spend 1 ki point to perform a quick harrow reading as a full-round action, gaining a +2 luck bonus on one type of roll (attack, save, or skill) for 1 minute.',
        effects: [],
      },
      {
        name: 'Tower Card',
        level: 5,
        description:
          'At 5th level, once per day, a harrow warden can invoke the tower card to negate a critical hit against him, turning it into a normal hit.',
        effects: [],
      },
      {
        name: "Fate's Hand",
        level: 7,
        description:
          'At 7th level, a harrow warden draws two cards each day instead of one, gaining the benefits of both suits.',
        effects: [],
      },
    ],
    source: 'The Harrow Handbook',
  },

  // ──────────────────────────────────────────────
  // 39. Lifting Hand
  // ──────────────────────────────────────────────
  {
    name: 'Lifting Hand',
    className: 'Monk',
    description:
      'The lifting hand is a monk devoted to protecting and uplifting the downtrodden, using his martial abilities to shield the weak and punish tyrants.',
    replacedFeatures: ['Stunning Fist', 'Slow Fall', 'Diamond Body', 'Quivering Palm'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Protector's Strike",
        level: 1,
        description:
          'At 1st level, a lifting hand can spend 1 ki point as a swift action to designate one ally within 30 feet as his ward. He gains a +1 bonus on attack rolls against any creature threatening his ward. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Shield of the Weak',
        level: 4,
        description:
          'At 4th level, when adjacent to his ward, the lifting hand can take the damage from an attack targeting his ward as an immediate action.',
        effects: [],
      },
      {
        name: 'Inspiring Presence',
        level: 11,
        description:
          'At 11th level, all allies within 30 feet of the lifting hand gain a +2 morale bonus to AC and saving throws when the monk has at least 1 ki point remaining.',
        effects: [],
      },
      {
        name: 'Liberating Strike',
        level: 15,
        description:
          'At 15th level, when the lifting hand confirms a critical hit, the target must succeed on a Will save or release any creature it is grappling, and any charm or compulsion effects it is maintaining are suppressed for 1d4 rounds.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 40. Karmic Monk
  // ──────────────────────────────────────────────
  {
    name: 'Karmic Monk',
    className: 'Monk',
    description:
      'The karmic monk channels the cosmic forces of balance and retribution, reflecting harm back upon those who deal it and ensuring that every action has an equal reaction.',
    replacedFeatures: ['Stunning Fist', 'Still Mind', 'Purity of Body', 'Wholeness of Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Karmic Strike',
        level: 1,
        description:
          'At 1st level, whenever a creature hits the karmic monk with a melee attack, the karmic monk can spend 1 ki point as an immediate action to deal damage equal to his Wisdom modifier back to the attacker as force damage.',
        effects: [],
      },
      {
        name: 'Balance of Power',
        level: 3,
        description:
          'At 3rd level, a karmic monk gains a +2 bonus on saving throws against effects that would impose a condition on him. This bonus increases to +4 at 7th level.',
        effects: [],
      },
      {
        name: 'Retributive Ki',
        level: 5,
        description:
          'At 5th level, whenever the karmic monk succeeds on a saving throw against a spell or spell-like ability, he regains 1 ki point.',
        effects: [],
      },
      {
        name: 'Equalizing Blow',
        level: 7,
        description:
          'At 7th level, a karmic monk can spend 2 ki points when hitting with an unarmed strike to dispel one magical effect on the target (as targeted dispel magic, CL equals monk level).',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 41. Weapon Master (Monk)
  // ──────────────────────────────────────────────
  {
    name: 'Wanderer',
    className: 'Monk',
    description:
      'The wanderer is a monk who has forsaken a single temple to walk the world, gathering wisdom from experience and aiding those he encounters on his travels.',
    replacedFeatures: [
      'Still Mind',
      'Purity of Body',
      'Wholeness of Body',
      'Diamond Body',
      'Timeless Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Far Traveler',
        level: 3,
        description:
          'At 3rd level, a wanderer gains a +2 bonus on Survival checks and Knowledge (geography) checks. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Long Road',
        level: 5,
        description:
          "At 5th level, the wanderer's overland travel speed increases by 10 feet and he requires only half the normal amount of food and water.",
        effects: [],
      },
      {
        name: 'Terrain Mastery',
        level: 7,
        description:
          'At 7th level, a wanderer selects a favored terrain (as the ranger ability). He gains an additional favored terrain at 11th, 15th, and 19th levels.',
        effects: [],
      },
      {
        name: "Traveler's Insight",
        level: 11,
        description:
          'At 11th level, a wanderer can spend 1 ki point to gain the benefits of find the path for 10 minutes per monk level.',
        effects: [],
      },
      {
        name: 'Ageless Wanderer',
        level: 17,
        description: 'At 17th level, the wanderer no longer ages and cannot be magically aged.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 42. Monk of the Silver Fist
  // ──────────────────────────────────────────────
  {
    name: 'Silver Fist',
    className: 'Monk',
    description:
      'The silver fist is a monk who channels divine radiance through his strikes, specializing in combating undead, fiends, and other creatures of darkness.',
    replacedFeatures: ['Stunning Fist', 'Still Mind', 'Purity of Body', 'Wholeness of Body'],
    modifiedFeatures: ['Ki Pool'],
    newFeatures: [
      {
        name: 'Blessed Strike',
        level: 1,
        description:
          "At 1st level, the silver fist's unarmed strikes count as silver for the purpose of overcoming damage reduction. At 4th level, they also count as good-aligned.",
        effects: [],
      },
      {
        name: 'Turn Undead',
        level: 3,
        description:
          'At 3rd level, a silver fist can spend 2 ki points to channel positive energy to turn undead as a cleric of his monk level - 2.',
        effects: [],
      },
      {
        name: 'Radiant Strike',
        level: 5,
        description:
          'At 5th level, a silver fist can spend 1 ki point to add 1d6 points of damage to an unarmed strike against undead, evil outsiders, or evil dragons. This damage increases by 1d6 at 10th and 15th levels.',
        effects: [],
      },
      {
        name: 'Silver Body',
        level: 7,
        description:
          'At 7th level, a silver fist gains a +2 sacred bonus on saving throws against death effects, energy drain, and negative energy.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 43. Unchained Monk archetypes (additional)
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Iron Fist',
    className: 'Monk',
    description:
      'The monk of the iron fist focuses on maximizing the destructive power of his unarmed strikes, treating his fists as lethal weapons capable of shattering stone and steel.',
    replacedFeatures: ['Stunning Fist', 'Evasion', 'Still Mind', 'Improved Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fists of Iron',
        level: 1,
        description:
          'At 1st level, the monk of the iron fist deals unarmed damage as if he were one size category larger. At 10th level, he deals damage as if two size categories larger.',
        effects: [],
      },
      {
        name: 'Shattering Strike',
        level: 2,
        description:
          'At 2nd level, the monk can spend 1 ki point to ignore hardness when attacking objects with unarmed strikes.',
        effects: [],
      },
      {
        name: 'Iron Resilience',
        level: 3,
        description:
          'At 3rd level, the monk gains a +1 natural armor bonus. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Crushing Blow',
        level: 9,
        description:
          'At 9th level, when the monk confirms a critical hit with an unarmed strike, the target must succeed on a Fortitude save or be staggered for 1 round per monk level.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting',
  },

  // ──────────────────────────────────────────────
  // 44. Crusader's Fist
  // ──────────────────────────────────────────────
  {
    name: "Crusader's Fist",
    className: 'Monk',
    description:
      "The crusader's fist combines the purity of monastic training with divine fervor, channeling the power of his faith into his martial abilities.",
    replacedFeatures: [
      'Stunning Fist',
      'Still Mind',
      'Purity of Body',
      'Diamond Body',
      'Quivering Palm',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fervent Strike',
        level: 1,
        description:
          "At 1st level, a crusader's fist can spend 1 ki point to add 1d6 damage to an unarmed strike against a creature whose alignment is opposed to his own on at least one axis. This damage increases by 1d6 at 5th level and every 5 levels thereafter.",
        effects: [],
      },
      {
        name: 'Divine Awareness',
        level: 3,
        description:
          "At 3rd level, a crusader's fist can use detect evil (or detect chaos/law/good, depending on alignment) at will as a spell-like ability.",
        effects: [],
      },
      {
        name: 'Holy Resilience',
        level: 5,
        description:
          "At 5th level, a crusader's fist gains a +2 sacred (or profane) bonus on saving throws against spells and effects from creatures of opposing alignment.",
        effects: [],
      },
      {
        name: 'Sacred Fist',
        level: 11,
        description:
          "At 11th level, the crusader's fist's unarmed strikes are treated as his alignment for the purpose of overcoming damage reduction.",
        effects: [],
      },
      {
        name: 'Divine Retribution',
        level: 15,
        description:
          "At 15th level, once per day, when the crusader's fist would be reduced to 0 or fewer hit points, he can spend 4 ki points to remain at 1 hit point and make an immediate unarmed strike against the creature that damaged him.",
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 45. Serpent-Fire Adept
  // ──────────────────────────────────────────────
  {
    name: 'Serpent-Fire Adept',
    className: 'Monk',
    description:
      'The serpent-fire adept awakens the kundalini-like serpent fire within, unlocking chakras to gain supernatural abilities through deep meditation.',
    replacedFeatures: [
      'Purity of Body',
      'Wholeness of Body',
      'Diamond Body',
      'Abundant Step',
      'Diamond Soul',
      'Quivering Palm',
      'Tongue of the Sun and Moon',
      'Empty Body',
    ],
    modifiedFeatures: ['Ki Pool'],
    newFeatures: [
      {
        name: 'Chakra Initiate',
        level: 5,
        description:
          'At 5th level, a serpent-fire adept can open his root chakra, gaining a +2 bonus on Fortitude saves and immunity to bleed effects while the chakra is open. Opening a chakra requires spending 1 ki point as a swift action and lasts until he rests.',
        effects: [],
      },
      {
        name: 'Chakra Adept',
        level: 7,
        description:
          'At 7th level and each level thereafter, the serpent-fire adept gains access to additional chakras: sacral (7th, +2 Reflex saves), navel (9th, +2 on combat maneuver checks), heart (11th, +2 Will saves), throat (13th, telepathy 30 ft), brow (15th, see invisibility), and crown (17th, SR = monk level + 10).',
        effects: [],
      },
      {
        name: 'Serpent-Fire Ki',
        level: 5,
        description:
          'At 5th level, a serpent-fire adept gains a ki pool equal to 1/2 monk level + Wisdom modifier + 2 additional ki points for awakening his serpent fire.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 46. Unchained Monk (note: this is a variant class, not archetype, included for reference)
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 47. Menhir Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Menhir Guardian',
    className: 'Monk',
    description:
      'The menhir guardian is devoted to protecting ancient standing stones and sacred sites, drawing power from the earth and ley lines that run between these monuments.',
    replacedFeatures: ['Stunning Fist', 'Slow Fall', 'High Jump', 'Abundant Step'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Stone Sense',
        level: 1,
        description:
          'At 1st level, the menhir guardian gains tremorsense 10 feet while standing on stone or earth. This range increases by 10 feet at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Rooted Stance',
        level: 4,
        description:
          'At 4th level, as a swift action, the menhir guardian can root himself to the ground, gaining a +4 bonus to CMD against bull rush, drag, and trip attempts. While rooted, he cannot move but gains DR 2/-.',
        effects: [],
      },
      {
        name: 'Ley Line Touch',
        level: 5,
        description:
          'At 5th level, the menhir guardian can spend 1 ki point to add 1d6 force damage to his unarmed strikes for 1 round. This damage increases by 1d6 at 10th and 15th levels.',
        effects: [],
      },
      {
        name: 'Stone Step',
        level: 12,
        description:
          'At 12th level, the menhir guardian can spend 3 ki points to teleport between two standing stones or large stone monuments within 1 mile (as dimension door).',
        effects: [],
      },
    ],
    source: 'Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 48. Ki Mystic (Unchained variant already covered above; adding additional archetypes)
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 48. Terra-Cotta Monk
  // ──────────────────────────────────────────────
  {
    name: 'Terra-Cotta Monk',
    className: 'Monk',
    description:
      'The terra-cotta monk emulates the eternal warriors of ancient tombs, developing a body as hard and enduring as fired clay through rigorous physical conditioning.',
    replacedFeatures: [
      'Fast Movement',
      'Slow Fall',
      'High Jump',
      'Wholeness of Body',
      'Empty Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Armor of Earth',
        level: 1,
        description:
          'At 1st level, a terra-cotta monk gains a +1 natural armor bonus. This increases by +1 at 4th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Sudden Stillness',
        level: 3,
        description:
          'At 3rd level, a terra-cotta monk can spend 1 ki point to become perfectly still as an immediate action, gaining a +10 bonus on Stealth checks and appearing as a statue. He cannot move while using this ability.',
        effects: [],
      },
      {
        name: 'Clay Body',
        level: 7,
        description:
          'At 7th level, the terra-cotta monk gains DR 2/bludgeoning. This DR increases by 2 at 11th and 15th levels.',
        effects: [],
      },
      {
        name: 'Eternal Guardian',
        level: 19,
        description:
          'At 19th level, the terra-cotta monk no longer needs to eat, drink, sleep, or breathe. He becomes immune to paralysis, sleep, and stunning.',
        effects: [],
      },
    ],
    source: 'Dragon Empires Primer',
  },

  // ──────────────────────────────────────────────
  // 49. Black Asp
  // ──────────────────────────────────────────────
  {
    name: 'Black Asp',
    className: 'Monk',
    description:
      'The black asp is a monk trained in the ancient Osirian tradition of poison use, combining monastic discipline with the lethal art of envenom strikes.',
    replacedFeatures: ['Stunning Fist', 'Purity of Body', 'Wholeness of Body', 'Diamond Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Poison Use',
        level: 1,
        description:
          'At 1st level, a black asp gains the poison use ability and never risks accidentally poisoning himself when applying poison to a weapon or his own unarmed strikes.',
        effects: [],
      },
      {
        name: 'Venomous Strike',
        level: 1,
        description:
          'At 1st level, a black asp can spend 1 ki point as a swift action to coat his unarmed strikes with a debilitating venom for 1 round. A creature hit must succeed on a Fortitude save (DC 10 + 1/2 monk level + Wis modifier) or be sickened for 1 round per monk level.',
        effects: [],
      },
      {
        name: 'Toxic Mastery',
        level: 5,
        description:
          'At 5th level, a black asp gains a +2 bonus on saving throws against poison. At 11th level, he gains immunity to poison.',
        effects: [],
      },
      {
        name: 'Greater Venom',
        level: 7,
        description:
          "At 7th level, the black asp's venomous strike can instead nauseate the target for 1 round (Fortitude save negates). At 13th level, it can paralyze for 1d4 rounds.",
        effects: [],
      },
    ],
    source: 'People of the Sands',
  },

  // ──────────────────────────────────────────────
  // 50. Invested Regent (already covered above)
  // Moving to additional archetypes
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 50. Monk of the Mantis (already above)
  // Adding remaining ones
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 50. Wildstrike Monk
  // ──────────────────────────────────────────────
  {
    name: 'Wildstrike Monk',
    className: 'Monk',
    description:
      'A half-orc monk who channels his rage into devastating, controlled strikes. The wildstrike monk walks a fine line between discipline and savagery.',
    replacedFeatures: ['Still Mind', 'Purity of Body', 'Wholeness of Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Wild Strikes',
        level: 3,
        description:
          'At 3rd level, a wildstrike monk can enter a state of controlled fury as a free action, gaining a +2 bonus on unarmed strike damage rolls but taking a -1 penalty to AC. This fury lasts for a number of rounds equal to 3 + his Wisdom modifier. At 7th level, the damage bonus increases to +4 and at 11th to +6.',
        effects: [],
      },
      {
        name: 'Savage Resilience',
        level: 5,
        description:
          'At 5th level, while in his wild strike fury, the wildstrike monk gains temporary hit points equal to his monk level at the start of each round.',
        effects: [],
      },
      {
        name: 'Primal Fury',
        level: 7,
        description:
          'At 7th level, when a wildstrike monk confirms a critical hit while using wild strikes, the target must succeed on a Fortitude save or be stunned for 1 round.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 51. Wandering Monk
  // ──────────────────────────────────────────────
  {
    name: 'Wandering Monk',
    className: 'Monk',
    description:
      'The wandering monk is a spiritual pilgrim who travels the world seeking enlightenment, gaining unique insights from each region and culture he encounters.',
    replacedFeatures: ['Stunning Fist', 'Bonus Feat (2nd)', 'Purity of Body', 'Diamond Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Pilgrim's Wisdom",
        level: 1,
        description:
          'At 1st level, a wandering monk adds half his monk level (minimum 1) as a bonus on all Knowledge checks and can make any Knowledge check untrained.',
        effects: [],
      },
      {
        name: "Wanderer's Endurance",
        level: 2,
        description:
          'At 2nd level, a wandering monk is immune to fatigue, and any effect that would cause him to become exhausted makes him fatigued instead.',
        effects: [],
      },
      {
        name: 'Insight of the World',
        level: 5,
        description:
          'At 5th level, once per day, a wandering monk can spend 1 ki point to gain a +10 insight bonus on a single skill check.',
        effects: [],
      },
      {
        name: 'True Sight',
        level: 11,
        description:
          'At 11th level, a wandering monk can spend 3 ki points to gain the effects of true seeing for 1 round per monk level.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 52. Ghoran Monk (Blossoming Light)
  // ──────────────────────────────────────────────
  {
    name: 'Blossoming Light',
    className: 'Monk',
    description:
      'The blossoming light is a monk who channels the radiant energy of the natural world, using photosynthetic meditation to fuel his ki and heal allies.',
    replacedFeatures: ['Stunning Fist', 'Still Mind', 'Wholeness of Body', 'Diamond Body'],
    modifiedFeatures: ['Ki Pool'],
    newFeatures: [
      {
        name: 'Photosynthetic Ki',
        level: 1,
        description:
          'When meditating in sunlight, a blossoming light can regain 1 ki point per 10 minutes of meditation, up to a maximum of half his ki pool per day.',
        effects: [],
      },
      {
        name: 'Radiant Touch',
        level: 3,
        description:
          'At 3rd level, a blossoming light can spend 1 ki point as a standard action to heal a touched creature for 1d6 hit points per 2 monk levels.',
        effects: [],
      },
      {
        name: 'Sunlight Resistance',
        level: 5,
        description:
          'At 5th level, a blossoming light gains resistance 5 to fire and immunity to the dazzled condition.',
        effects: [],
      },
      {
        name: 'Radiant Burst',
        level: 11,
        description:
          'At 11th level, a blossoming light can spend 3 ki points to emit a 30-foot burst of light, dealing 1d6 radiant damage per monk level to undead (Reflex half) and healing living allies for half that amount.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // Ascetic
  // ──────────────────────────────────────────────
  {
    name: 'Ascetic',
    className: 'Monk',
    description:
      'The ascetic monk dedicates herself to the mastery of a single weapon, forsaking the breadth of unarmed combat techniques in favor of absolute perfection with that weapon.',
    replacedFeatures: ['Bonus Feats', 'Unarmed Strike', 'Ki Pool (Diamond Soul)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ascetic Style',
        level: 1,
        description:
          'An ascetic monk selects one weapon as her ascetic weapon at 1st level. She treats her ascetic weapon as a monk weapon for all monk class features. She gains Weapon Focus with that weapon as a bonus feat.',
        effects: [],
      },
      {
        name: 'Weapon Mastery',
        level: 5,
        description:
          'At 5th level, the ascetic adds her Wisdom modifier to attack rolls with her ascetic weapon in addition to the normal ability modifier.',
        effects: [],
      },
      {
        name: 'One Weapon, One Mind',
        level: 9,
        description:
          "At 9th level, the ascetic's ascetic weapon is treated as if it has the ki focus weapon special ability and she can use her ki powers through it.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Body Bludgeon
  // ──────────────────────────────────────────────
  {
    name: 'Body Bludgeon',
    className: 'Monk',
    description:
      'The body bludgeon is a brutal monk who has mastered using grabbed foes as improvised weapons, turning captured enemies into tools of destruction against their own allies.',
    replacedFeatures: ['Bonus Feats', 'Stunning Fist'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Throw Back',
        level: 1,
        description:
          'A body bludgeon gains Improved Grapple as a bonus feat at 1st level, even if she does not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Fling',
        level: 5,
        description:
          "At 5th level, when a body bludgeon has a creature grappled, she can use that creature as an improvised weapon against adjacent foes. This deals damage equal to the grappled creature's unarmed strike plus the monk's Strength modifier.",
        effects: [],
      },
      {
        name: 'Human Shield',
        level: 9,
        description:
          'At 9th level, while grappling a creature, the body bludgeon can use the grappled creature to absorb damage, granting herself a +4 shield bonus to AC. Any damage that exceeds this bonus is dealt to the grappled creature instead.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Cardinal
  // ──────────────────────────────────────────────
  {
    name: 'Cardinal',
    className: 'Monk',
    description:
      'Cardinals serve the interests of a specific deity, blending monastic discipline with religious devotion. They are holy warriors who channel divine power through their disciplined bodies.',
    replacedFeatures: ['Evasion', 'Still Mind', 'Ki Pool (Magic)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Channel Energy',
        level: 1,
        description:
          'A cardinal gains the ability to channel positive or negative energy as a cleric of her monk level – 2. She gains this ability at 1st level and it improves as she gains levels.',
        effects: [],
      },
      {
        name: 'Sacred Ki',
        level: 4,
        description:
          "At 4th level, the cardinal's ki pool becomes infused with divine power. She can expend 1 point of ki to add 1d6 to a single channel energy roll.",
        effects: [],
      },
      {
        name: 'Divine Body',
        level: 10,
        description:
          'At 10th level, the cardinal gains a bonus on all saving throws equal to her Wisdom modifier against spells and effects from creatures whose alignment opposes her deity.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Chameleon Monk
  // ──────────────────────────────────────────────
  {
    name: 'Chameleon Monk',
    className: 'Monk',
    description:
      'Chameleon monks have mastered the art of disguise and infiltration, blending their monastic training with deceptive arts to become masters of concealment and misdirection.',
    replacedFeatures: ['Still Mind', 'Slow Fall', 'High Jump'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fluid Identity',
        level: 3,
        description:
          'A chameleon monk gains a bonus equal to half her monk level on Disguise checks. She can change her appearance as a standard action by spending 1 ki point.',
        effects: [],
      },
      {
        name: 'Vanishing Step',
        level: 5,
        description:
          'At 5th level, as a swift action after a successful attack, the chameleon monk can spend 2 ki points to become invisible until the start of her next turn.',
        effects: [],
      },
      {
        name: 'Perfect Disguise',
        level: 9,
        description:
          "At 9th level, by spending 3 ki points, the chameleon monk can perfectly mimic another creature's appearance and voice for 10 minutes per monk level, as the disguise self spell but using her physical form.",
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // Child of Irori
  // ──────────────────────────────────────────────
  {
    name: 'Child of Irori',
    className: 'Monk',
    description:
      'A child of Irori is a devoted monk of the god of enlightenment, perfection, and self-improvement. These monks walk the path of the Dweller on the Horizon, seeking perfection in all things.',
    replacedFeatures: ['Bonus Feats', 'Still Mind'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Irorian Discipline',
        level: 1,
        description:
          'A child of Irori adds half her monk level (minimum 1) on all Knowledge checks and may attempt Knowledge checks untrained.',
        effects: [],
      },
      {
        name: 'Path to Perfection',
        level: 6,
        description:
          'At 6th level, the child of Irori selects one saving throw. That save uses her Wisdom modifier as a bonus instead of the normal ability modifier.',
        effects: [],
      },
      {
        name: 'Pursuit of Perfection',
        level: 10,
        description:
          'At 10th level, the child selects a second saving throw to gain Wisdom-based bonuses, as path to perfection.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Purity',
  },

  // ──────────────────────────────────────────────
  // Contemplative
  // ──────────────────────────────────────────────
  {
    name: 'Contemplative',
    className: 'Monk',
    description:
      'Contemplative monks turn their monastic discipline inward, developing extraordinary mental powers rather than physical combat techniques. They are psychic warriors clad in the robe of a monk.',
    replacedFeatures: ['Bonus Feats', 'Flurry of Blows', 'Stunning Fist'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Psychic Talent',
        level: 1,
        description:
          'A contemplative gains access to psychic magic. She can cast a limited list of psychic spells (concentration, mind-affecting effects, divination) using her Wisdom modifier. She casts these as psychic spellcasting.',
        effects: [],
      },
      {
        name: 'Mental Focus',
        level: 4,
        description:
          "At 4th level, the contemplative's inner focus allows her to cast one additional psychic spell per day per spell level she has access to. She also gains a +2 bonus on concentration checks.",
        effects: [],
      },
      {
        name: 'Empty Mind',
        level: 9,
        description:
          'At 9th level, the contemplative becomes immune to mind-affecting spells and effects while spending ki points (1 point per round of protection).',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // Crusader Monk
  // ──────────────────────────────────────────────
  {
    name: 'Crusader Monk',
    className: 'Monk',
    description:
      'Crusader monks have taken a sacred vow to fight evil in all its forms. They blend monastic discipline with divine zeal, becoming holy warriors who channel celestial power through disciplined fists.',
    replacedFeatures: ['Still Mind', 'Ki Pool (Stunning Fist)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Holy Fists',
        level: 3,
        description:
          "A crusader monk's unarmed strikes are treated as good-aligned for the purpose of overcoming damage reduction. She also deals +1d6 damage against evil outsiders.",
        effects: [],
      },
      {
        name: 'Smite Evil',
        level: 7,
        description:
          'At 7th level, once per day, the crusader monk can smite evil as a paladin of her monk level – 4. This uses her Wisdom modifier instead of Charisma modifier.',
        effects: [],
      },
      {
        name: 'Aura of Courage',
        level: 11,
        description:
          'At 11th level, the crusader monk is immune to fear and allies within 10 feet gain a +4 morale bonus on saves against fear.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Dawnflower Devotee (Monk)
  // ──────────────────────────────────────────────
  {
    name: 'Dawnflower Devotee',
    className: 'Monk',
    description:
      'Dawnflower devotees are monks who worship Sarenrae, combining unarmed combat techniques with the radiant power of the Dawnflower. They fight with curved blades and sunfire.',
    replacedFeatures: ['Bonus Feats', 'Still Mind'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dawnflower Grace',
        level: 1,
        description:
          'A dawnflower devotee gains Weapon Focus (scimitar) as a bonus feat and may use a scimitar as a monk weapon.',
        effects: [],
      },
      {
        name: 'Radiant Ki',
        level: 4,
        description:
          "At 4th level, the dawnflower devotee's ki pool radiates light. She can spend 1 ki point to have her next melee attack deal additional fire damage equal to her Wisdom modifier.",
        effects: [],
      },
      {
        name: 'Solar Strike',
        level: 9,
        description:
          'At 9th level, by spending 2 ki points, the dawnflower devotee can cause a creature she strikes to be dazzled and take ongoing 1d6 fire damage for a number of rounds equal to her Wisdom modifier (Fortitude negates the ongoing damage).',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Purity',
  },

  // ──────────────────────────────────────────────
  // Dungeon Monk
  // ──────────────────────────────────────────────
  {
    name: 'Dungeon Monk',
    className: 'Monk',
    description:
      'Dungeon monks specialize in underground exploration and dungeon delving, hardening their bodies against traps, poisons, and the hazards of subterranean life.',
    replacedFeatures: ['Slow Fall', 'High Jump'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Trapfinder',
        level: 1,
        description:
          'A dungeon monk adds half her monk level (minimum 1) on Perception checks to find traps and may use Disable Device as if she had the trapfinding class feature.',
        effects: [],
      },
      {
        name: "Delver's Toughness",
        level: 3,
        description:
          'At 3rd level, the dungeon monk gains a +2 bonus on saving throws against traps and hazards, and a +2 bonus on Acrobatics checks made to navigate underground terrain.',
        effects: [],
      },
      {
        name: 'Stone Sense',
        level: 7,
        description:
          'At 7th level, the dungeon monk gains tremorsense 10 feet while in contact with stone or earth. She also reduces fall damage by 20 feet when falling in underground environments.',
        effects: [],
      },
    ],
    source: 'Dungeon Denizens Revisited',
  },

  // ──────────────────────────────────────────────
  // Enlightened Monk
  // ──────────────────────────────────────────────
  {
    name: 'Enlightened Monk',
    className: 'Monk',
    description:
      'Enlightened monks pursue spiritual perfection above martial excellence, developing an inner peace that makes them difficult to anger and nearly impossible to deceive.',
    replacedFeatures: ['Stunning Fist', 'Bonus Feats'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Perfect Calm',
        level: 1,
        description:
          'An enlightened monk is immune to emotion-affecting spells and effects, including morale bonuses and penalties.',
        effects: [],
      },
      {
        name: 'Sense the Truth',
        level: 3,
        description:
          'At 3rd level, the enlightened monk gains a +2 bonus on all Sense Motive checks. At 9th level, she can use detect thoughts at will as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Moment of Clarity',
        level: 9,
        description:
          'At 9th level, once per day the enlightened monk can grant a single creature she touches the benefit of remove curse, break enchantment, or greater restoration (her choice).',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // Four-Paw Adept
  // ──────────────────────────────────────────────
  {
    name: 'Four-Paw Adept',
    className: 'Monk',
    description:
      'Four-paw adepts are catfolk or other feline monks who have combined their natural physical gifts with monastic discipline to create a fighting style that emphasizes agility, claws, and pouncing.',
    replacedFeatures: ['Stunning Fist', 'Slow Fall'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Claw Mastery',
        level: 1,
        description:
          'A four-paw adept treats her natural claw attacks as monk weapons. She gains Feral Combat Training as a bonus feat for her claw attacks.',
        effects: [],
      },
      {
        name: "Cat's Pounce",
        level: 5,
        description:
          'At 5th level, the four-paw adept can make a full attack at the end of a charge.',
        effects: [],
      },
      {
        name: 'Raking Strike',
        level: 9,
        description:
          'At 9th level, when the four-paw adept hits a creature with both claw attacks in the same round, she can make two additional rake attacks at her highest attack bonus as a free action.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // Hook Seeker
  // ──────────────────────────────────────────────
  {
    name: 'Hook Seeker',
    className: 'Monk',
    description:
      'Hook seekers are monastic warriors who specialize in using hooked weapons and grappling techniques in tandem, making them masters of controlling and manipulating their opponents.',
    replacedFeatures: ['Bonus Feats', 'Stunning Fist'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hooked',
        level: 1,
        description:
          'A hook seeker gains proficiency with the temple sword and the sickle, and may treat them as monk weapons. She gains Improved Grapple as a bonus feat.',
        effects: [],
      },
      {
        name: 'Drag Down',
        level: 4,
        description:
          'At 4th level, the hook seeker can use trip and drag combat maneuvers simultaneously on the same action with a hooked weapon, adding her Wisdom modifier to the combat maneuver check.',
        effects: [],
      },
      {
        name: 'Anchor',
        level: 9,
        description:
          'At 9th level, once per round after a successful trip or drag, the hook seeker may immediately attempt a grapple check against the same creature as a free action.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Irorian Paragon
  // ──────────────────────────────────────────────
  {
    name: 'Irorian Paragon',
    className: 'Monk',
    description:
      'Irorian paragons are the most dedicated servants of Irori, the Master of Masters. They push beyond the limits of the human body and mind to achieve the divine perfection their god embodies.',
    replacedFeatures: ['Bonus Feats', 'Abundant Step'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Self-Perfection',
        level: 2,
        description:
          'At each even-numbered level, an Irorian paragon increases one ability score of her choice by 1 (in addition to normal ability score increases). She does not gain this at levels where ability scores normally increase.',
        effects: [],
      },
      {
        name: 'Body of Perfection',
        level: 10,
        description:
          'At 10th level, the Irorian paragon no longer suffers ability score penalties from aging and cannot be magically aged. Any existing age penalties are removed. She still gains bonuses from aging.',
        effects: [],
      },
      {
        name: 'Transcendent Focus',
        level: 15,
        description:
          'At 15th level, once per day the Irorian paragon can enter a state of perfect focus. For 1 minute, she adds her Wisdom modifier to all d20 rolls.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Purity',
  },

  // ──────────────────────────────────────────────
  // Liberator Monk
  // ──────────────────────────────────────────────
  {
    name: 'Liberator Monk',
    className: 'Monk',
    description:
      'Liberator monks have dedicated their training to breaking chains — both literal and metaphorical. They are the enemies of slavers, tyrants, and oppressors of all kinds.',
    replacedFeatures: ['Still Mind', 'Improved Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Freedom's Strike",
        level: 3,
        description:
          'A liberator monk deals +1d6 damage against enslaved or bound creatures, and against creatures with the lawful or evil subtype. She also gains a +2 bonus on Escape Artist checks.',
        effects: [],
      },
      {
        name: 'Break Bonds',
        level: 7,
        description:
          'At 7th level, by spending 2 ki points, the liberator monk can cast freedom of movement as a spell-like ability with a duration of 1 round per monk level.',
        effects: [],
      },
      {
        name: 'Liberating Touch',
        level: 11,
        description:
          'At 11th level, once per day, the liberator monk can cast break enchantment as a spell-like ability, using her monk level as the caster level.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Lunging Defender
  // ──────────────────────────────────────────────
  {
    name: 'Lunging Defender',
    className: 'Monk',
    description:
      'Lunging defenders combine monastic speed with extraordinary reach, using their ki to strike at enemies from a distance while still protecting their allies at close range.',
    replacedFeatures: ['Bonus Feats', 'High Jump'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ki Lunge',
        level: 1,
        description:
          'A lunging defender can spend 1 ki point as a swift action to gain a reach of 10 feet with her unarmed strikes until the end of her turn.',
        effects: [],
      },
      {
        name: 'Extended Defense',
        level: 5,
        description:
          'At 5th level, by spending 1 ki point, the lunging defender can make an attack of opportunity against any enemy that moves through any square within her reach, not just adjacent squares.',
        effects: [],
      },
      {
        name: 'Distant Ward',
        level: 9,
        description:
          "At 9th level, the lunging defender's ki lunge ability extends her reach to 15 feet, and she can make attacks of opportunity against foes within 15 feet when using extended defense.",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Master Boxer
  // ──────────────────────────────────────────────
  {
    name: 'Master Boxer',
    className: 'Monk',
    description:
      'Master boxers are monks who have adopted and refined street-fighting boxing techniques, fusing them with monk discipline to create fighters of extraordinary striking power.',
    replacedFeatures: ['Flurry of Blows', 'Bonus Feats'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'One-Two Punch',
        level: 1,
        description:
          'A master boxer gains Improved Unarmed Strike and Two-Weapon Fighting as bonus feats. When making a full attack with both fists, she does not take the standard two-weapon fighting penalties.',
        effects: [],
      },
      {
        name: 'Haymaker',
        level: 5,
        description:
          'At 5th level, once per round, the master boxer can forgo her first attack to deliver a haymaker — a single attack at a -2 penalty that deals double damage on a hit.',
        effects: [],
      },
      {
        name: 'Counter Punch',
        level: 9,
        description:
          'At 9th level, when an adjacent creature misses the master boxer with a melee attack, she can spend 1 ki point to make an immediate unarmed strike against that creature.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Monastic Archer
  // ──────────────────────────────────────────────
  {
    name: 'Monastic Archer',
    className: 'Monk',
    description:
      "Unlike the zen archer's focused single-mindedness, the monastic archer balances ranged and melee combat, using ki to enhance both modes of fighting.",
    replacedFeatures: ['Bonus Feats', 'Still Mind'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bow Training',
        level: 1,
        description:
          'A monastic archer gains proficiency with the shortbow and longbow. She may use these as monk weapons and apply her Wisdom bonus to damage rolls with them when using ki.',
        effects: [],
      },
      {
        name: 'Ki Shot',
        level: 4,
        description:
          "At 4th level, by spending 1 ki point as a swift action, the monastic archer's next ranged attack with a bow deals additional damage equal to her Wisdom modifier and is treated as magic for overcoming DR.",
        effects: [],
      },
      {
        name: 'Fluid Transition',
        level: 8,
        description:
          'At 8th level, the monastic archer can switch between melee and ranged attacks in the same full-attack action without penalty, treating drawing her bow or sheathing it as a free action.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Monk of the Empty Body
  // ──────────────────────────────────────────────
  {
    name: 'Monk of the Empty Body',
    className: 'Monk',
    description:
      'Monks of the empty body pursue total dissolution of the physical self, learning to phase through matter, resist physical harm, and eventually transcend the need for a body entirely.',
    replacedFeatures: ['Bonus Feats', 'Slow Fall'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ethereal Step',
        level: 5,
        description:
          'At 5th level, a monk of the empty body can spend 3 ki points to become incorporeal for 1 round. While incorporeal she cannot attack but also cannot be harmed by non-magical attacks.',
        effects: [],
      },
      {
        name: 'Resist the Physical',
        level: 9,
        description:
          'At 9th level, the monk gains DR 5/— and resistance to all energy types equal to 5.',
        effects: [],
      },
      {
        name: 'Ethereal Body',
        level: 19,
        description:
          'At 19th level, once per day the monk of the empty body can use etherealness as a spell-like ability with duration of 1 minute per monk level.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Panther Style Monk
  // ──────────────────────────────────────────────
  {
    name: 'Panther Style Monk',
    className: 'Monk',
    description:
      'Panther style monks have mastered the Panther Style feat chain, weaving counter-strikes into every movement and turning the act of being hit into an opportunity for devastating retribution.',
    replacedFeatures: ['Flurry of Blows', 'Stunning Fist'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Panther Style',
        level: 1,
        description:
          'A panther style monk gains Panther Style as a bonus feat at 1st level, even if she does not meet the prerequisites. She also gains Improved Unarmed Strike if she does not already have it.',
        effects: [],
      },
      {
        name: 'Panther Claw',
        level: 5,
        description:
          'At 5th level, the panther style monk gains Panther Claw as a bonus feat. When using Panther Style, she can make one retaliatory strike per round without provoking attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Panther Parry',
        level: 9,
        description:
          'At 9th level, the panther style monk gains Panther Parry as a bonus feat. When using Panther Style, she adds her Wisdom modifier to her AC against the triggering attack.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Perfect Scholar
  // ──────────────────────────────────────────────
  {
    name: 'Perfect Scholar',
    className: 'Monk',
    description:
      'Perfect scholars believe that true mastery comes from understanding. They pair physical training with intellectual rigor, making them among the most knowledgeable and versatile of monks.',
    replacedFeatures: ['Bonus Feats', 'Wholeness of Body'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Scholar's Knowledge",
        level: 1,
        description:
          'A perfect scholar adds half her monk level (minimum 1) on all Knowledge checks and can make Knowledge checks untrained. She gains two Knowledge skills as class skills that are not normally class skills for the monk.',
        effects: [],
      },
      {
        name: 'Academic Advantage',
        level: 6,
        description:
          'At 6th level, by spending 1 ki point, the perfect scholar can make a Knowledge check before combat and on a result of 15 or higher, gain a +2 insight bonus on attack rolls and saving throws against that creature type for the entire encounter.',
        effects: [],
      },
      {
        name: 'Encyclopedic Knowledge',
        level: 12,
        description:
          "At 12th level, the perfect scholar can identify any creature's special abilities, weaknesses, and abilities as a free action once she has observed it for 1 full round.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // Soulbound Monk
  // ──────────────────────────────────────────────
  {
    name: 'Soulbound',
    className: 'Monk',
    description:
      "Soulbound monks have forged a mystical connection with a spirit or deity, channeling that entity's power through their bodies. They are conduits of divine or spiritual energy given form.",
    replacedFeatures: ['Still Mind', 'Ki Pool (Magic)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Soul Bond',
        level: 1,
        description:
          'A soulbound monk forms a bond with a specific spirit or minor deity. She gains access to one domain associated with that spirit, using her monk level as her cleric level for domain powers.',
        effects: [],
      },
      {
        name: 'Spirit Channel',
        level: 4,
        description:
          "At 4th level, the soulbound monk can spend 2 ki points to invoke her bound spirit's favor, casting a spell from her spirit's domain spell list of a level up to half her monk level.",
        effects: [],
      },
      {
        name: 'Embodiment',
        level: 11,
        description:
          "At 11th level, once per day, the soulbound monk can allow her bound spirit to temporarily take full possession. She gains the spirit's ability scores and special abilities for 1 minute per monk level, but has no memory of the experience.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },
];
