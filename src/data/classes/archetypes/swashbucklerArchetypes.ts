import { ArchetypeData } from '../types';

export const SWASHBUCKLER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Azatlah
  // ──────────────────────────────────────────────
  {
    name: 'Azatlah',
    className: 'Swashbuckler',
    description:
      'An azatlah is a swashbuckler blessed—or cursed—with the wild and chaotic nature of the azata celestials, channeling their unpredictable freedom-loving spirit into her combat style. She trades refined technique for bursts of chaotic power that defy enemy expectations.',
    replacedFeatures: [
      'Bonus Feats',
      'Swashbuckler Weapon Training',
      'Swashbuckler Weapon Mastery',
    ],
    modifiedFeatures: ['Deeds', 'Panache'],
    newFeatures: [
      {
        name: 'Chaotic Grace',
        level: 1,
        description:
          "An azatlah's attacks are infused with chaotic energy. Her weapon attacks are treated as chaotic-aligned for the purpose of overcoming damage reduction. She also gains a +1 luck bonus to AC that increases by +1 at 5th level and every 5 levels thereafter.",
      },
      {
        name: 'Wild Surge',
        level: 3,
        description:
          'At 3rd level, the azatlah can spend 1 panache point as a swift action to generate a wild surge. Roll d6: 1–2 her next attack deals an additional 2d6 electricity damage; 3–4 she teleports 10 feet to a random adjacent square; 5–6 she gains haste for 1 round. Reroll if a result is not possible.',
      },
      {
        name: "Freedom's Dance",
        level: 7,
        description:
          'At 7th level, the azatlah is immune to effects that would restrict her movement, including paralysis and hold effects. As long as she has at least 1 panache point, she can move through difficult terrain without penalty.',
      },
      {
        name: 'Celestial Panache',
        level: 15,
        description:
          "At 15th level, the azatlah's panache pool increases by her Charisma modifier. She also gains spell resistance equal to 11 + her swashbuckler level, and once per day she can cast dispel magic as a spell-like ability (CL = swashbuckler level).",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Daring Infiltrator
  // ──────────────────────────────────────────────
  {
    name: 'Daring Infiltrator',
    className: 'Swashbuckler',
    description:
      "A daring infiltrator combines the swashbuckler's flashy combat style with the skills of an accomplished spy and burglar. She trades some combat polish for exceptional social manipulation and the ability to fight effectively in close quarters while navigating complex social situations.",
    replacedFeatures: ['Bonus Feats (3, 7, 11, 15, 19)', 'Swashbuckler Weapon Training'],
    modifiedFeatures: ['Deeds', 'Charmed Life'],
    newFeatures: [
      {
        name: 'Infiltrator Training',
        level: 1,
        description:
          'A daring infiltrator adds Bluff, Disguise, and Sleight of Hand to her class skills and gains a +2 bonus on each. She can spend 1 panache point to gain advantage on a Disguise or Bluff check (roll twice, take the higher result).',
      },
      {
        name: 'Social Strike',
        level: 3,
        description:
          'At 3rd level, the daring infiltrator can use combat as social leverage. When she hits a creature in front of witnesses, she can spend 1 panache point to attempt a free Intimidate check against all observers as part of that attack.',
      },
      {
        name: 'In Plain Sight',
        level: 7,
        description:
          'At 7th level, the daring infiltrator can attempt Stealth checks to hide even while being directly observed, provided she is in a crowd of 5 or more people. She takes no penalty on the check in this situation.',
      },
      {
        name: 'Perfect Cover',
        level: 11,
        description:
          'At 11th level, the daring infiltrator can establish a cover identity in a new location with only 24 hours of observation. While using a cover identity, mind-reading effects must succeed at a caster level check (DC 11 + swashbuckler level) to penetrate her mental conditioning.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Dashing Thief
  // ──────────────────────────────────────────────
  {
    name: 'Dashing Thief',
    className: 'Swashbuckler',
    description:
      'A dashing thief is a swashbuckler who has crossed paths with rogues long enough to pick up their tricks, blending her panache-fueled fighting style with an eye for opportunity and a light touch that would shame any common cutpurse. She excels at hit-and-run tactics and acquiring valuables mid-combat.',
    replacedFeatures: ['Bonus Feats', 'Nimble (some)', 'Swashbuckler Weapon Training'],
    modifiedFeatures: ['Deeds', 'Panache'],
    newFeatures: [
      {
        name: 'Opportunistic Strike',
        level: 1,
        description:
          'A dashing thief deals sneak attack damage as a rogue of half her swashbuckler level (minimum 1d6) when she flanks an opponent or attacks a flat-footed target.',
      },
      {
        name: 'Pilfering Hand',
        level: 3,
        description:
          'At 3rd level, the dashing thief can spend 1 panache point when making a successful melee attack to also attempt a Sleight of Hand check to steal one small item from the target as part of the same action, with no action penalty.',
      },
      {
        name: 'Fleeting Blade',
        level: 7,
        description:
          'At 7th level, after dealing damage to an opponent with a melee attack, the dashing thief can move up to half her speed as a free action without provoking attacks of opportunity from that opponent. She can use this ability once per round.',
      },
      {
        name: 'Master Pilferer',
        level: 11,
        description:
          'At 11th level, the dashing thief can steal magic item charges, prepared spells (as she touches a spellbook or focuses), or even a single active magical effect (as dispel magic) from a creature, in addition to physical items, using her Pilfering Hand deed.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Freebooter
  // ──────────────────────────────────────────────
  {
    name: 'Freebooter',
    className: 'Swashbuckler',
    description:
      'A freebooter is a swashbuckler who sails the seas or roams the roads, operating outside the law and building a loyal crew through personal charisma and demonstrated competence. She trades some individual combat power for exceptional team leadership and nautical expertise.',
    replacedFeatures: ['Charmed Life', 'Swashbuckler Weapon Training', 'Bonus Feats (some)'],
    modifiedFeatures: ['Deeds', 'Panache'],
    newFeatures: [
      {
        name: "Freebooter's Mark",
        level: 1,
        description:
          'A freebooter can designate one enemy per day as her mark by spending a standard action to observe the creature. All allies who can see and hear the freebooter gain a +2 bonus on attack rolls and damage rolls against the marked creature.',
      },
      {
        name: "Bravado's Blade",
        level: 3,
        description:
          "At 3rd level, the freebooter can spend 1 panache point to boast before an attack. If the attack hits, each ally who witnesses the attack gains temporary hit points equal to the freebooter's Charisma modifier (lasting 1 minute).",
      },
      {
        name: 'Crew Coordination',
        level: 7,
        description:
          "At 7th level, the freebooter's allies gain a +2 morale bonus on Acrobatics, Climb, and Swim checks while within 30 feet of her. She can also lend her panache to a willing adjacent ally as a swift action, transferring up to 2 panache points per day.",
      },
      {
        name: "Captain's Presence",
        level: 11,
        description:
          "At 11th level, the freebooter's leadership inspires her crew to extraordinary effort. Once per combat, as a free action, she can grant all allies within 30 feet an extra attack on their next full-attack action, made at their highest attack bonus.",
      },
    ],
    source: 'Pathfinder RPG: Skull & Shackles AP',
  },

  // ──────────────────────────────────────────────
  // 5. Inspired Blade
  // ──────────────────────────────────────────────
  {
    name: 'Inspired Blade',
    className: 'Swashbuckler',
    description:
      'An inspired blade is a swashbuckler who has devoted her entire life to mastering the rapier above all other weapons, achieving a level of finesse with her chosen blade that borders on the supernatural. She trades versatility for unparalleled excellence with the rapier.',
    replacedFeatures: [
      'Swashbuckler Finesse (partial)',
      'Bonus Feats',
      'Swashbuckler Weapon Training',
      'Swashbuckler Weapon Mastery',
    ],
    modifiedFeatures: ['Panache', 'Deeds'],
    newFeatures: [
      {
        name: 'Inspired Panache',
        level: 1,
        description:
          'An inspired blade gains panache only from killing blows and critical hits with rapiers; other weapons do not replenish her pool. However, she gains 2 panache points for a killing blow with a rapier instead of 1.',
      },
      {
        name: 'Rapier Weapon Mastery',
        level: 1,
        description:
          'At 1st level, the inspired blade gains Weapon Focus (rapier) and Weapon Finesse as bonus feats. She may use Weapon Finesse with the rapier even if she would not otherwise qualify.',
      },
      {
        name: 'Inspired Finesse',
        level: 3,
        description:
          'At 3rd level, when wielding a rapier, the inspired blade can add her Intelligence modifier to attack rolls in addition to (or instead of) her Dexterity modifier, whichever is higher. This replaces the standard Swashbuckler Finesse benefit for rapiers.',
      },
      {
        name: 'Brilliant Blade',
        level: 5,
        description:
          'At 5th level and every 4 levels thereafter, the inspired blade gains a +1 bonus on attack and damage rolls with rapiers. This bonus is in addition to any weapon training bonus.',
      },
      {
        name: 'Perfect Thrust',
        level: 15,
        description:
          'At 15th level, once per day the inspired blade can make a single rapier attack that, if it hits, deals damage as a critical hit regardless of whether a critical threat is confirmed. Immunities to critical hits still apply.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 6. Mouser
  // ──────────────────────────────────────────────
  {
    name: 'Mouser',
    className: 'Swashbuckler',
    description:
      'A mouser is a swashbuckler who specializes in fighting much larger opponents by diving into the space around their feet and striking upward at their vulnerable undersides. Her unusual fighting style leaves larger foes flat-footed and off-balance while she makes herself nearly untouchable.',
    replacedFeatures: ['Swashbuckler Finesse', 'Nimble +2', 'Charmed Life'],
    modifiedFeatures: ['Deeds', 'Panache'],
    newFeatures: [
      {
        name: 'Underfoot',
        level: 1,
        description:
          "When the mouser is adjacent to a creature at least one size category larger than herself, she can move into and share that creature's space as a move action. While sharing the larger creature's space, the mouser gains a +1 dodge bonus to AC and cannot be targeted by that creature's melee attacks unless the creature succeeds at a combat maneuver check (CMD equals mouser's AC).",
      },
      {
        name: 'Scurrying Sunder',
        level: 3,
        description:
          "At 3rd level, while sharing a larger creature's space, the mouser can spend 1 panache point to make a sunder attempt against the creature's equipment as a swift action without provoking attacks of opportunity from that creature.",
      },
      {
        name: 'Toppling Strike',
        level: 7,
        description:
          'At 7th level, whenever the mouser deals damage to a creature while sharing its space, she can spend 1 panache point to attempt a free trip combat maneuver against that creature as part of the same attack, using her swashbuckler level + Dexterity modifier as her CMB.',
      },
      {
        name: 'Giant Slayer',
        level: 11,
        description:
          "At 11th level, while the mouser shares the space of a creature at least two size categories larger than herself, she ignores the first 10 points of that creature's damage reduction and deals an additional 2d6 precision damage on each attack.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Rostlander
  // ──────────────────────────────────────────────
  {
    name: 'Rostlander',
    className: 'Swashbuckler',
    description:
      'A rostlander is a swashbuckler hardened by the brutal frontier life of the Stolen Lands, trading urban sophistication for rugged survivability and the ability to fight effectively with crude frontier weapons. She combines swashbuckling technique with the endurance of a wilderness warrior.',
    replacedFeatures: ['Bonus Feats (some)', 'Charmed Life', 'Swashbuckler Weapon Training'],
    modifiedFeatures: ['Swashbuckler Finesse', 'Deeds', 'Panache'],
    newFeatures: [
      {
        name: 'Frontier Finesse',
        level: 1,
        description:
          'A rostlander can apply her Swashbuckler Finesse to short swords, handaxes, and light picks in addition to normal finesseable weapons. She treats these weapons as light weapons for the purpose of her swashbuckler deeds.',
      },
      {
        name: 'Wilderness Awareness',
        level: 1,
        description:
          'A rostlander adds Survival to her class skills and gains a +2 bonus on Survival and Perception checks. She is never flat-footed against ambushes as long as she has at least 1 panache point.',
      },
      {
        name: 'Rugged Resilience',
        level: 5,
        description:
          'At 5th level, the rostlander gains Endurance as a bonus feat and can sleep in medium armor without becoming fatigued. She also gains a +2 bonus on Fortitude saves against environmental hazards and disease.',
      },
      {
        name: 'Frontier Dueling',
        level: 9,
        description:
          "At 9th level, the rostlander can spend 1 panache point as an immediate action to make a disarm or sunder attempt when an adjacent enemy attacks her, resolving the maneuver before the enemy's attack is resolved.",
      },
    ],
    source: 'Pathfinder RPG: Kingmaker AP',
  },

  // ──────────────────────────────────────────────
  // 8. Siegebreaker (Swashbuckler)
  // ──────────────────────────────────────────────
  {
    name: 'Siegebreaker',
    className: 'Swashbuckler',
    description:
      'A siegebreaker swashbuckler specializes in disrupting enemy formations and breaking through defensive lines with spectacular maneuvers. She trades refined dueling skill for the ability to cut through fortified positions and heavily armored opponents with flair and devastating effect.',
    replacedFeatures: ['Swashbuckler Finesse', 'Charmed Life (some)', 'Nimble +1'],
    modifiedFeatures: ['Deeds', 'Panache', 'Bonus Feats'],
    newFeatures: [
      {
        name: 'Formation Breaker',
        level: 1,
        description:
          'A siegebreaker can bull rush and overrun as part of a charge without provoking attacks of opportunity. She gains a +2 bonus on combat maneuver checks to bull rush and overrun. These bonuses increase by +1 for every 4 levels beyond 1st.',
      },
      {
        name: 'Battering Ram',
        level: 3,
        description:
          'At 3rd level, when the siegebreaker successfully bull rushes a creature, she can spend 1 panache point to force the creature to succeed at a Fortitude save (DC 10 + damage dealt) or be knocked prone at the end of the bull rush.',
      },
      {
        name: 'Breach the Line',
        level: 7,
        description:
          'At 7th level, after the siegebreaker successfully bull rushes an opponent at least 10 feet, she can immediately make a standard action attack against that same opponent as a free action. This attack gains a +2 bonus on the attack roll and damage roll.',
      },
      {
        name: 'Unstoppable Charge',
        level: 11,
        description:
          'At 11th level, as a full-round action the siegebreaker can charge through up to three creatures in a line, making a bull rush attempt against each one sequentially. If all three bull rush attempts succeed, the last creature she contacts takes her Strength modifier in additional bludgeoning damage.',
      },
    ],
    source: 'Pathfinder RPG: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 9. Whirligig
  // ──────────────────────────────────────────────
  {
    name: 'Whirligig',
    className: 'Swashbuckler',
    description:
      'A whirligig is a swashbuckler who has turned acrobatic spinning into a deadly fighting art, using centrifugal force and constant rotation to generate power and confuse opponents. Her dizzying style of movement makes her difficult to pin down and turns missed attacks into opportunities.',
    replacedFeatures: ['Swashbuckler Weapon Training', 'Swashbuckler Weapon Mastery', 'Nimble +3'],
    modifiedFeatures: ['Deeds', 'Panache', 'Swashbuckler Finesse'],
    newFeatures: [
      {
        name: 'Spinning Technique',
        level: 1,
        description:
          'A whirligig gains Acrobatic as a bonus feat and adds twice her swashbuckler level to Acrobatics checks made to move through threatened squares. She also gains a +1 dodge bonus to AC while she moved at least 10 feet this round.',
      },
      {
        name: 'Centrifugal Strike',
        level: 3,
        description:
          'At 3rd level, the whirligig can spend 1 panache point after moving at least 10 feet to make a spinning attack that affects all enemies in a 5-foot radius around her current position, dealing her weapon damage + Dexterity modifier to each (Reflex half, DC 10 + half swashbuckler level + Dex modifier).',
      },
      {
        name: 'Dizzying Evasion',
        level: 7,
        description:
          'At 7th level, when an opponent misses the whirligig with a melee attack, she can spend 1 panache point as an immediate action to redirect her momentum into a free 5-foot step that does not count against her normal movement.',
      },
      {
        name: 'Perpetual Motion',
        level: 11,
        description:
          'At 11th level, during a full-attack action the whirligig can move up to her speed, distributing this movement between attacks as she chooses. This movement provokes attacks of opportunity normally, but she gains a +2 dodge bonus to AC for each 5 feet she moves during the full-attack action, to a maximum of +6.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },
];
