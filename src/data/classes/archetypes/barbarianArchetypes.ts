import { ArchetypeData } from '../types';

export const BARBARIAN_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Armored Hulk
  // ──────────────────────────────────────────────
  {
    name: 'Armored Hulk',
    className: 'Barbarian',
    description:
      'Some barbarians learn to fight in heavy armor, trading agility for sheer unstoppable force. The armored hulk is a fearsome sight on the battlefield, clad in steel yet moving with surprising speed.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Indomitable Stance',
        level: 1,
        description:
          'An armored hulk gains a +1 bonus on combat maneuver checks and to CMD when wearing armor. This bonus increases by +1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Armored Swiftness',
        level: 2,
        description:
          'At 2nd level, an armored hulk moves at full speed in medium armor. At 7th level, she moves at full speed in heavy armor.',
        effects: [],
      },
      {
        name: 'Resilience of Steel',
        level: 3,
        description:
          'At 3rd level, an armored hulk gains DR 1/- when wearing armor. This DR increases by 1 for every 6 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Improved Armored Swiftness',
        level: 5,
        description:
          "At 5th level, an armored hulk's land speed is faster than normal for her race by +10 feet when wearing armor. This benefit applies when she is carrying a medium or lighter load.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Breaker
  // ──────────────────────────────────────────────
  {
    name: 'Breaker',
    className: 'Barbarian',
    description:
      'The breaker rages not against people but against the works of civilization, tearing down buildings, smashing gates, and destroying objects with savage fury.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Destructive',
        level: 1,
        description:
          'The breaker gains a +1 morale bonus on Strength checks to break objects and a +1 bonus on damage rolls against objects and constructs while raging. These bonuses increase by +1 for every 3 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Battle Scavenger',
        level: 3,
        description:
          'At 3rd level, the breaker gains a +1 bonus on attack rolls with improvised weapons. She also gains a +1 bonus on Perception checks to find improvised weapons. These bonuses increase by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 3. Brutal Pugilist
  // ──────────────────────────────────────────────
  {
    name: 'Brutal Pugilist',
    className: 'Barbarian',
    description:
      'Some barbarians focus on fighting with their fists and other natural weapons, preferring close combat over armed warfare. The brutal pugilist is a terror in a brawl.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Savage Grapple',
        level: 2,
        description:
          'At 2nd level, the brutal pugilist takes only half the normal penalties to Dexterity, attack rolls, and combat maneuver checks when she has the grappled condition. She can make an attack of opportunity against creatures trying to grapple her even if they possess the Improved Grapple feat.',
        effects: [],
      },
      {
        name: 'Pit Fighter',
        level: 3,
        description:
          'At 3rd level, the brutal pugilist gains a +1 bonus on attack and damage rolls with close weapons and natural attacks while raging. This bonus increases by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Improved Savage Grapple',
        level: 5,
        description:
          'At 5th level, the brutal pugilist takes no penalties to Dexterity, attack rolls, or combat maneuver checks when she has the grappled condition. She also gains a +2 bonus on combat maneuver checks to grapple.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 4. Drunken Brute
  // ──────────────────────────────────────────────
  {
    name: 'Drunken Brute',
    className: 'Barbarian',
    description:
      'The drunken brute trades conscious control of her rage for the unpredictable fury brought on by alcohol, gaining erratic but powerful abilities while inebriated.',
    replacedFeatures: ['Fast Movement'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Raging Drunk',
        level: 1,
        description:
          'While raging, the drunken brute can drink a potion, an alchemical extract, or a tankard of ale or similar alcohol as a move action that does not provoke attacks of opportunity. A tankard of ale grants her a number of temporary hit points equal to her level.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 5. Elemental Kin
  // ──────────────────────────────────────────────
  {
    name: 'Elemental Kin',
    className: 'Barbarian',
    description:
      'Some barbarians feel a kinship with elemental forces, channeling primal fire, ice, acid, or lightning through their rage to devastate their foes.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Elemental Fury',
        level: 1,
        description:
          'At 1st level, the elemental kin selects one energy type: acid, cold, electricity, or fire. While raging, she gains resistance 1 to that energy type. This resistance increases by 1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Elemental Rage',
        level: 2,
        description:
          'At 2nd level, once per rage, the elemental kin can imbue her melee attacks with her chosen element as a swift action. Her attacks deal +1d6 points of energy damage of her chosen type for a number of rounds equal to 1 + her Constitution modifier.',
        effects: [],
      },
      {
        name: 'Greater Elemental Fury',
        level: 5,
        description:
          'At 5th level, while raging, the elemental kin gains immunity to her chosen energy type for a number of rounds per day equal to her barbarian level. These rounds need not be consecutive.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 6. Feral Gnasher
  // ──────────────────────────────────────────────
  {
    name: 'Feral Gnasher',
    className: 'Barbarian',
    description:
      'Feral gnashers are goblin barbarians who fight with their sharp teeth and claws, biting and gnawing at their enemies like wild animals. This archetype is available to goblins.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Savage Bite',
        level: 1,
        description:
          'At 1st level, the feral gnasher gains a bite attack. This is a primary natural attack that deals 1d4 points of damage. At 10th level, the damage from her bite attack increases to 1d6, and she gains the grab ability with her bite.',
        effects: [],
      },
      {
        name: 'Lockjaw',
        level: 2,
        description:
          'At 2nd level, a feral gnasher gains the grab special attack with her bite. She can use this ability on a creature up to one size category larger than herself.',
        effects: [],
      },
      {
        name: 'Gnaw',
        level: 3,
        description:
          'At 3rd level, when grappling, the feral gnasher can make a bite attack against a grappled opponent as a standard action. If successful, she automatically deals bite damage and can attempt a combat maneuver check to deal damage again.',
        effects: [],
      },
      {
        name: 'Improved Lockjaw',
        level: 6,
        description:
          'At 6th level, the feral gnasher can use her lockjaw ability on creatures up to two size categories larger than herself. She gains a +2 bonus on combat maneuver checks to maintain a grapple established with her bite.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Hurler
  // ──────────────────────────────────────────────
  {
    name: 'Hurler',
    className: 'Barbarian',
    description:
      'The hurler specializes in throwing weapons and heavy objects at her foes, combining rage-fueled strength with terrifying accuracy to devastate enemies at range.',
    replacedFeatures: ['Fast Movement'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Skilled Thrower',
        level: 1,
        description:
          'The hurler increases the range increment of any thrown weapon or object by 10 feet. This increase stacks with any other increase to range increments for thrown weapons.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 8. Invulnerable Rager
  // ──────────────────────────────────────────────
  {
    name: 'Invulnerable Rager',
    className: 'Barbarian',
    description:
      'Some barbarians learn to harden their bodies against physical punishment, developing an almost supernatural resistance to harm that makes them incredibly difficult to kill.',
    replacedFeatures: ['Damage Reduction', 'Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Invulnerability',
        level: 2,
        description:
          'At 2nd level, the invulnerable rager gains DR/- equal to half her barbarian level. This damage reduction is doubled against nonlethal damage.',
        effects: [],
      },
      {
        name: 'Extreme Endurance',
        level: 3,
        description:
          'At 3rd level, the invulnerable rager is inured to either hot or cold climate effects as if using endure elements. She also gains fire resistance 1 or cold resistance 1 respectively. This resistance increases by 1 for every 3 levels beyond 3rd.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 9. Mad Dog
  // ──────────────────────────────────────────────
  {
    name: 'Mad Dog',
    className: 'Barbarian',
    description:
      'A mad dog is a barbarian who fights beside a loyal animal companion, sharing rage and ferocity with a beast that is just as savage and unpredictable as its master.',
    replacedFeatures: [
      'Rage Power (2nd)',
      'Rage Power (6th)',
      'Trap Sense',
      'Uncanny Dodge',
      'Improved Uncanny Dodge',
      'Damage Reduction',
    ],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Animal Companion',
        level: 1,
        description:
          'At 1st level, a mad dog gains an animal companion as a druid of her barbarian level -3 (minimum 1st). She may choose from the following companions: badger, bird, camel, cat (small), dog, horse, pony, snake (viper), or wolf.',
        effects: [],
      },
      {
        name: 'Pack Tactics',
        level: 2,
        description:
          'At 2nd level, a mad dog and her animal companion gain a +4 bonus on attack rolls when flanking the same creature. This replaces the normal flanking bonus.',
        effects: [],
      },
      {
        name: 'Rage (Mad Dog)',
        level: 1,
        description:
          "A mad dog's rage functions as normal, except that when she rages, her animal companion also gains the benefits of rage (though the animal does not gain any benefits from rage powers).",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 10. Mounted Fury
  // ──────────────────────────────────────────────
  {
    name: 'Mounted Fury',
    className: 'Barbarian',
    description:
      "The mounted fury combines the barbarian's devastating rage with expert horsemanship, becoming a terrifying mounted warrior who charges across the battlefield.",
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fast Rider',
        level: 1,
        description:
          'The speed of any mount the mounted fury rides is increased by 10 feet. This replaces fast movement.',
        effects: [],
      },
      {
        name: 'Bestial Mount',
        level: 5,
        description:
          'At 5th level, the mounted fury gains the service of a feral mount. She gains an animal companion as a druid of her barbarian level -4. The companion must be one she is capable of riding. Her rage also applies to her mount.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 11. Pack Rager
  // ──────────────────────────────────────────────
  {
    name: 'Pack Rager',
    className: 'Barbarian',
    description:
      'The pack rager channels the bonds of fellowship into rage, sharing teamwork feats with nearby raging allies and fighting as a coordinated unit with devastating efficiency.',
    replacedFeatures: [
      'Rage Power (2nd)',
      'Rage Power (6th)',
      'Rage Power (10th)',
      'Rage Power (14th)',
      'Rage Power (18th)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Raging Tactician',
        level: 2,
        description:
          'At 2nd level, a pack rager gains a teamwork feat as a bonus feat. She must meet the prerequisites for the feat. While raging, she grants this teamwork feat to all allies within 30 feet who can see and hear her.',
        effects: [],
      },
      {
        name: 'Improved Raging Tactician',
        level: 6,
        description:
          'At 6th level, and every 4 levels thereafter, the pack rager gains an additional teamwork feat. She shares all her teamwork feats with allies within 30 feet while raging.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 12. Savage Barbarian
  // ──────────────────────────────────────────────
  {
    name: 'Savage Barbarian',
    className: 'Barbarian',
    description:
      'The savage barbarian eschews armor in favor of natural toughness, gaining a primal defensive instinct that makes her difficult to harm without the encumbrance of armor.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Damage Reduction', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Naked Courage',
        level: 3,
        description:
          'At 3rd level, the savage barbarian gains a +1 dodge bonus to AC and a +1 morale bonus on saving throws against fear when wearing no armor (shields are allowed). These bonuses increase by +1 for every 6 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Natural Toughness',
        level: 7,
        description:
          'At 7th level, the savage barbarian gains a +1 natural armor bonus to AC when wearing no armor. This bonus increases by +1 for every 3 levels beyond 7th.',
        effects: [],
      },
      {
        name: 'Defensive Instinct',
        level: 2,
        description:
          'At 2nd level, the savage barbarian gains a +1 dodge bonus to AC when wearing no armor. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 13. Sea Reaver
  // ──────────────────────────────────────────────
  {
    name: 'Sea Reaver',
    className: 'Barbarian',
    description:
      'The sea reaver is a barbarian from the coast or islands who has learned to fight on pitching decks and in churning waters, making her a feared pirate or coastal raider.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Marine Terror',
        level: 1,
        description:
          'A sea reaver can hold her breath for a number of rounds equal to four times her Constitution score. She gains a +2 bonus on Profession (sailor) and Swim checks.',
        effects: [],
      },
      {
        name: 'Eyes of the Storm',
        level: 2,
        description:
          'At 2nd level, the sea reaver ignores any concealment provided by fog, rain, sleet, mist, wind, or other weather effects that is less than total concealment, and any penalties weather applies on Perception checks are halved.',
        effects: [],
      },
      {
        name: 'Savage Swimmer',
        level: 3,
        description:
          'At 3rd level, the sea reaver gains a +1 bonus on Swim checks and a swim speed of 15 feet while raging. This bonus on Swim checks increases by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Sure-Footed',
        level: 5,
        description:
          'At 5th level, the sea reaver does not suffer penalties for fighting on slippery or uneven terrain. She gains a +2 bonus to CMD against bull rush, overrun, and trip attempts.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 14. Superstitious
  // ──────────────────────────────────────────────
  {
    name: 'Superstitious',
    className: 'Barbarian',
    description:
      'Many barbarians distrust magic and those who wield it. The superstitious barbarian channels that distrust into supernatural resistance, but at the cost of being unable to accept beneficial magic willingly.',
    replacedFeatures: ['Trap Sense', 'Damage Reduction'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sixth Sense',
        level: 3,
        description:
          'At 3rd level, the superstitious barbarian gains a +1 bonus on initiative checks and a +1 insight bonus to AC during surprise rounds. These bonuses increase by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Keen Senses',
        level: 7,
        description:
          'At 7th level, the superstitious barbarian gains low-light vision. At 13th level, she gains darkvision 30 feet. At 16th level, she gains blindsense 30 feet.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Titan Mauler
  // ──────────────────────────────────────────────
  {
    name: 'Titan Mauler',
    className: 'Barbarian',
    description:
      'In lands overrun with giants, some barbarians learn to wield massive weapons designed for creatures far larger than themselves, using their rage to overcome the unwieldiness of oversized arms.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Big Game Hunter',
        level: 1,
        description:
          'The titan mauler gains a +1 bonus on attack rolls against foes that are Large or larger. This bonus increases by +1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Jotungrip',
        level: 2,
        description:
          'At 2nd level, a titan mauler may choose to wield a two-handed melee weapon in one hand with a -2 penalty on attack rolls while doing so. The penalty decreases by 1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Massive Weapons',
        level: 3,
        description:
          'At 3rd level, a titan mauler becomes skilled in the use of oversized weapons. She can wield weapons designed for creatures one size category larger without penalty. This ability increases to two size categories larger at 7th level.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 16. Totem Warrior
  // ──────────────────────────────────────────────
  {
    name: 'Totem Warrior',
    className: 'Barbarian',
    description:
      'A totem warrior is attuned to a specific totem animal, gaining rage powers themed around that animal and eventually forming a deep spiritual bond with her totem.',
    replacedFeatures: [],
    modifiedFeatures: ['Rage Powers'],
    newFeatures: [
      {
        name: 'Totem Rage Powers',
        level: 2,
        description:
          'A totem warrior must select rage powers associated with a single totem. She cannot select from more than one group of totem rage powers. She must select at least one totem rage power at 2nd level.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 17. Urban Barbarian
  // ──────────────────────────────────────────────
  {
    name: 'Urban Barbarian',
    className: 'Barbarian',
    description:
      'The urban barbarian has learned to channel her inner fury in more controlled ways, allowing her to function in civilized society while still accessing the power of rage.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Controlled Rage',
        level: 1,
        description:
          'When an urban barbarian rages, she can apply her rage morale bonuses to her Strength, Dexterity, or Constitution in any combination. She does not take a penalty to AC, and she can use all Dex-, Int-, and Cha-based skills while raging.',
        effects: [],
      },
      {
        name: 'Crowd Control',
        level: 2,
        description:
          'At 2nd level, an urban barbarian gains a +1 bonus on attack rolls and a +1 dodge bonus to AC when adjacent to two or more enemies. These bonuses increase by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 18. Wild Rager
  // ──────────────────────────────────────────────
  {
    name: 'Wild Rager',
    className: 'Barbarian',
    description:
      "The wild rager's fury is so great that she sometimes loses all control, entering a state of uncontrollable savagery that is as dangerous to her allies as to her enemies.",
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Trap Sense'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Uncontrolled Rage',
        level: 1,
        description:
          "A wild rager's rage functions normally, except that when she reduces a creature to 0 or fewer hit points, she must attempt a Will save (DC 10 + 1/2 barbarian level + damage dealt) or attack the nearest creature.",
        effects: [],
      },
      {
        name: 'Wild Fighting',
        level: 2,
        description:
          'At 2nd level, a wild rager gains a +2 bonus on melee attack and damage rolls during a full attack action, but takes a -2 penalty to AC until the start of her next turn.',
        effects: [],
      },
      {
        name: 'Rage Conversion',
        level: 5,
        description:
          'At 5th level, when a wild rager fails a Will save against an uncontrolled rage, she may instead convert the uncontrolled energy into a different effect, such as dealing damage to herself to avoid attacking an ally.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 19. Scarred Rager
  // ──────────────────────────────────────────────
  {
    name: 'Scarred Rager',
    className: 'Barbarian',
    description:
      'Some barbarians wear their scars as badges of honor, drawing power from their wounds and using their horrific appearance to intimidate others.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Damage Reduction', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Terrifying Visage',
        level: 1,
        description:
          'The scarred rager adds half her barbarian level (minimum +1) on all Intimidate checks. This bonus is doubled against creatures with fewer Hit Dice than the scarred rager.',
        effects: [],
      },
      {
        name: 'Tolerance',
        level: 2,
        description:
          'At 2nd level, the scarred rager gains a +1 bonus on saves against effects that cause the nauseated, sickened, or staggered conditions. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Scarification',
        level: 3,
        description:
          'At 3rd level, the scarred rager gains a +1 natural armor bonus to AC. This bonus increases by +1 at 6th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Improved Tolerance',
        level: 7,
        description:
          'At 7th level, the scarred rager becomes immune to the nauseated and sickened conditions.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 20. Savage Technologist
  // ──────────────────────────────────────────────
  {
    name: 'Savage Technologist',
    className: 'Barbarian',
    description:
      'The savage technologist has learned to incorporate firearms and technology into her savage fighting style, wielding guns alongside melee weapons with reckless abandon.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Sword and Gun',
        level: 2,
        description:
          'At 2nd level, when a savage technologist uses a one-handed firearm in one hand and a light or one-handed melee weapon in the other, she gains a +2 bonus to AC against ranged attacks and she does not provoke attacks of opportunity for firing the firearm.',
        effects: [],
      },
      {
        name: 'Primal Magnetism',
        level: 3,
        description:
          'At 3rd level, the savage technologist adds +1 to the DC of any Intimidate check she makes while raging. This bonus increases by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Crack Shot',
        level: 5,
        description:
          'At 5th level, the savage technologist gains a +1 bonus on attack rolls with firearms. This bonus increases by +1 for every 4 levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Savage Technologist Rage',
        level: 1,
        description:
          'When raging, a savage technologist gains a morale bonus to Strength and Dexterity instead of Strength and Constitution. She does not take a penalty to AC, and she can use Dex-based skills while raging.',
        effects: [],
      },
    ],
    source: 'Technology Guide',
  },

  // ──────────────────────────────────────────────
  // 21. Dreadnought
  // ──────────────────────────────────────────────
  {
    name: 'Dreadnought',
    className: 'Barbarian',
    description:
      'The dreadnought is a cold, calculating warrior who channels her fury not as frenzied rage but as a steely determination, using discipline rather than madness to fuel her combat prowess.',
    replacedFeatures: ['Indomitable Will', 'Tireless Rage', 'Mighty Rage', 'Trap Sense'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Steady Gaze',
        level: 1,
        description:
          "A dreadnought's rage functions as normal except she gains a morale bonus to Strength and a morale bonus to Will saves instead of Constitution. She does not gain bonus hit points from rage. She is not fatigued at the end of her rage.",
        effects: [],
      },
      {
        name: 'Fear Nothing',
        level: 3,
        description:
          'At 3rd level, the dreadnought gains a +2 bonus on saving throws against fear and intimidation effects. This bonus increases by +2 at 9th, 15th, and 20th levels.',
        effects: [],
      },
      {
        name: 'Dead Calm',
        level: 14,
        description:
          'At 14th level, the dreadnought is immune to all morale-based penalties. She gains a +4 bonus on saving throws against emotion effects.',
        effects: [],
      },
      {
        name: 'Devastating Calm',
        level: 17,
        description:
          'At 17th level, a dreadnought can enter a state of devastating calm as a swift action. For a number of rounds per day equal to her barbarian level, she adds her Strength modifier to all damage rolls a second time.',
        effects: [],
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 22. Primal Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Primal Hunter',
    className: 'Barbarian',
    description:
      'The primal hunter draws on ancient predatory instincts, becoming a patient stalker who uses rage to enhance her ranged attacks and tracking abilities rather than melee combat.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Focused Rage',
        level: 1,
        description:
          "A primal hunter's rage grants her a morale bonus to Dexterity and Wisdom instead of Strength and Constitution. She can use ranged weapons while raging without restriction and does not take a penalty to AC.",
        effects: [],
      },
      {
        name: 'Primal Senses',
        level: 2,
        description:
          'At 2nd level, the primal hunter gains a +1 bonus on Perception and Survival checks. This bonus increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: "Hunter's Reflexes",
        level: 5,
        description:
          'At 5th level, the primal hunter gains evasion while raging. At 10th level, she gains improved evasion while raging.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 23. Raging Cannibal
  // ──────────────────────────────────────────────
  {
    name: 'Raging Cannibal',
    className: 'Barbarian',
    description:
      'The raging cannibal draws power from consuming the flesh of her fallen enemies, gaining frightening abilities and sustenance from the act of devouring her foes.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bite Attack',
        level: 1,
        description:
          'At 1st level, the raging cannibal gains a bite attack as a primary natural attack that deals 1d4 points of damage (1d3 for Small barbarians). While raging, the damage die increases by one step.',
        effects: [],
      },
      {
        name: 'Consume Flesh',
        level: 2,
        description:
          "At 2nd level, when the raging cannibal reduces an enemy to 0 or fewer hit points with her bite attack, she can consume some of the creature's flesh as a swift action, healing a number of hit points equal to 1d8 + her Constitution modifier.",
        effects: [],
      },
      {
        name: 'Terrifying Feast',
        level: 3,
        description:
          'At 3rd level, when the raging cannibal uses consume flesh, all enemies within 30 feet must succeed on a Will save (DC 10 + 1/2 barbarian level + Str modifier) or become shaken for a number of rounds equal to 1/2 her barbarian level.',
        effects: [],
      },
      {
        name: 'Greater Consume Flesh',
        level: 5,
        description:
          'At 5th level, the healing from consume flesh increases to 2d8 + Constitution modifier. At 10th level, it increases to 3d8 + Constitution modifier.',
        effects: [],
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 24. Untamed Rager
  // ──────────────────────────────────────────────
  {
    name: 'Untamed Rager',
    className: 'Barbarian',
    description:
      'The untamed rager has embraced the raw, bestial nature of her fury, transforming into a near-feral combatant who gains animalistic traits and savage natural attacks while raging.',
    replacedFeatures: ['Fast Movement', 'Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Feral Appearance',
        level: 1,
        description:
          'While raging, the untamed rager takes on bestial features such as elongated canines, thickened nails, or a hunched posture. She gains a +2 bonus on Intimidate checks while raging.',
        effects: [],
      },
      {
        name: 'Bestial Rage',
        level: 2,
        description:
          'At 2nd level, while raging, the untamed rager gains two claw attacks that deal 1d6 damage each (1d4 for Small barbarians). These are primary natural attacks.',
        effects: [],
      },
      {
        name: 'Feral Reflexes',
        level: 3,
        description:
          'At 3rd level, the untamed rager gains a +1 bonus on Reflex saves and a +1 dodge bonus to AC. These bonuses increase by +1 for every 6 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Savage Pounce',
        level: 5,
        description:
          'At 5th level, the untamed rager gains the pounce ability while raging, allowing her to make a full attack at the end of a charge.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 25. Unchained Brutal Pugilist
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Brutal Pugilist',
    className: 'Barbarian',
    description:
      'An unchained version of the brutal pugilist who uses the unchained barbarian rage rules, focusing on unarmed and close-quarters combat with simplified rage mechanics.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Danger Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Savage Grapple',
        level: 2,
        description:
          'At 2nd level, the unchained brutal pugilist takes only half the normal penalties to Dexterity, attack rolls, and combat maneuver checks when she has the grappled condition. She can make attacks of opportunity against creatures trying to grapple her.',
        effects: [],
      },
      {
        name: 'Pit Fighter',
        level: 3,
        description:
          'At 3rd level, the unchained brutal pugilist gains a +1 bonus on attack and damage rolls with close weapons and natural attacks while raging. This bonus increases by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Improved Savage Grapple',
        level: 5,
        description:
          'At 5th level, the unchained brutal pugilist takes no penalties to Dexterity, attack rolls, or combat maneuver checks when she has the grappled condition. She also gains a +2 bonus on combat maneuver checks to grapple.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 26. True Primitive
  // ──────────────────────────────────────────────
  {
    name: 'True Primitive',
    className: 'Barbarian',
    description:
      'The true primitive eschews all forms of modern equipment and civilization, relying only on weapons and armor crafted from natural materials such as stone, bone, and hide.',
    replacedFeatures: ['Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Primordial Awareness',
        level: 1,
        description:
          'The true primitive gains a +2 bonus on Knowledge (nature) and Survival checks. She is proficient only with simple weapons made of natural materials (bone, stone, obsidian) and gains no proficiency with metal weapons or armor.',
        effects: [],
      },
      {
        name: 'Trophy Fetish',
        level: 3,
        description:
          'At 3rd level, the true primitive can fashion trophies from defeated foes, which grant her a +1 morale bonus on Will saves, Intimidate checks, and saving throws against fear effects. This bonus increases by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Primal Toughness',
        level: 5,
        description:
          'At 5th level, the true primitive gains a +1 natural armor bonus. This bonus increases by +1 at 8th level and every 3 levels thereafter.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 27. Hateful Rager
  // ──────────────────────────────────────────────
  {
    name: 'Hateful Rager',
    className: 'Barbarian',
    description:
      'The hateful rager focuses her fury against specific hated enemies, gaining favored enemy bonuses while raging that make her devastatingly effective against chosen foes.',
    replacedFeatures: ['Trap Sense', 'Rage Power (6th)', 'Rage Power (12th)', 'Rage Power (18th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Favored Enemy',
        level: 3,
        description:
          'At 3rd level, the hateful rager selects a favored enemy, as the ranger class feature. While raging, the bonuses from this ability double. She gains additional favored enemies at 6th, 12th, and 18th levels.',
        effects: [],
      },
      {
        name: 'Feed the Hate',
        level: 6,
        description:
          'At 6th level, whenever the hateful rager successfully damages a favored enemy while raging, she gains temporary hit points equal to the favored enemy bonus against that creature. These temporary hit points last until the rage ends.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 28. Mounted Fury (Shoanti)
  // ──────────────────────────────────────────────
  // (Note: This is the same as Mounted Fury above, from APG.
  //  Separate Shoanti-specific variant is setting-specific, omitted.)

  // ──────────────────────────────────────────────
  // 28. Drunken Rager
  // ──────────────────────────────────────────────
  {
    name: 'Drunken Rager',
    className: 'Barbarian',
    description:
      'Similar to the drunken brute but with expanded options, the drunken rager gains increasing benefits from alcohol consumption, becoming more dangerous the more she drinks.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Raging Drunk',
        level: 1,
        description:
          'While raging, the drunken rager can drink a potion, alchemical extract, or tankard of ale as a move action that does not provoke attacks of opportunity. Drinking alcohol while raging extends her rage by 1 round.',
        effects: [],
      },
      {
        name: 'Roaring Drunk',
        level: 3,
        description:
          'At 3rd level, while raging, the drunken rager gains a +1 bonus on Intimidate checks and to the save DC of any fear effects she creates. This bonus increases by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Staggering Drunk',
        level: 5,
        description:
          'At 5th level, the drunken rager gains a +1 dodge bonus to AC against attacks of opportunity. This bonus increases by +1 for every 5 levels beyond 5th.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 29. Mooncursed
  // ──────────────────────────────────────────────
  {
    name: 'Mooncursed',
    className: 'Barbarian',
    description:
      'The mooncursed barbarian is afflicted by a bestial curse that manifests when she rages, physically transforming her into a hybrid or animal form with enhanced combat abilities.',
    replacedFeatures: [
      'Rage Power (2nd)',
      'Rage Power (6th)',
      'Rage Power (10th)',
      'Trap Sense',
      'Uncanny Dodge',
      'Improved Uncanny Dodge',
    ],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Bestial Transformation',
        level: 1,
        description:
          'When the mooncursed rages, she physically transforms, gaining one of the following forms: bear, boar, leopard, shark, stag, or wolf. She gains the ability score adjustments and natural attacks of the chosen form as beast shape I.',
        effects: [],
      },
      {
        name: 'Improved Transformation',
        level: 6,
        description:
          "At 6th level, the mooncursed's transformation improves to function as beast shape II, granting additional size options and natural attacks.",
        effects: [],
      },
      {
        name: 'Greater Transformation',
        level: 10,
        description:
          "At 10th level, the mooncursed's transformation functions as beast shape III, granting even more powerful forms and abilities.",
        effects: [],
      },
    ],
    source: 'Blood of the Moon',
  },

  // ──────────────────────────────────────────────
  // 30. Burn Rider
  // ──────────────────────────────────────────────
  {
    name: 'Burn Rider',
    className: 'Barbarian',
    description:
      'Burn riders are goblin barbarians who have mastered the art of riding burning dogs and other creatures into battle, using fire and chaos to terrify their enemies.',
    replacedFeatures: ['Fast Movement', 'Trap Sense', 'Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fire Steed',
        level: 1,
        description:
          'At 1st level, the burn rider gains a goblin dog or wolf animal companion as a druid of her barbarian level -3. The companion gains fire resistance 5 and deals an additional 1d4 fire damage with its natural attacks.',
        effects: [],
      },
      {
        name: 'Searing Charge',
        level: 3,
        description:
          'At 3rd level, when the burn rider makes a mounted charge, both she and her mount deal an additional 1d6 fire damage on the first attack. This increases by 1d6 at 9th and 15th levels.',
        effects: [],
      },
      {
        name: 'Fire Riding',
        level: 5,
        description:
          'At 5th level, the burn rider gains fire resistance 5. When mounted, both she and her mount gain fire resistance 10 instead.',
        effects: [],
      },
    ],
    source: 'Goblins of Golarion',
  },

  // ──────────────────────────────────────────────
  // 31. Jungle Rager
  // ──────────────────────────────────────────────
  {
    name: 'Jungle Rager',
    className: 'Barbarian',
    description:
      'The jungle rager draws strength from the wild, overgrown jungles of her homeland, gaining the ability to move through dense vegetation and use the environment to her advantage.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Jungle Training',
        level: 1,
        description:
          'The jungle rager gains a +2 bonus on Climb, Knowledge (nature), and Survival checks in jungle and forest terrain. She can move through natural difficult terrain in jungle and forest environments at her normal speed.',
        effects: [],
      },
      {
        name: 'Jungle Senses',
        level: 3,
        description:
          'At 3rd level, the jungle rager gains a +1 bonus on Perception checks and initiative checks in jungle and forest terrain. These bonuses increase by +1 for every 3 levels beyond 3rd.',
        effects: [],
      },
    ],
    source: 'Sargava, the Lost Colony',
  },

  // ──────────────────────────────────────────────
  // 32. Savage Barbarian (Numerian)
  // ──────────────────────────────────────────────
  // (Note: Already included as "Savage Barbarian" above from APG.)

  // ──────────────────────────────────────────────
  // 32. Hated Rivals
  // ──────────────────────────────────────────────
  {
    name: 'Fearsome Defender',
    className: 'Barbarian',
    description:
      'The fearsome defender is a barbarian who uses intimidation as a weapon, channeling her rage into terrifying displays that unnerve her enemies and protect her allies.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Intimidating Display',
        level: 1,
        description:
          'As a standard action while raging, the fearsome defender can attempt an Intimidate check to demoralize all enemies within 30 feet. She adds her barbarian level to this check.',
        effects: [],
      },
      {
        name: 'Fearsome Presence',
        level: 3,
        description:
          'At 3rd level, when the fearsome defender successfully demoralizes an opponent, the duration of the shaken condition is extended by 1 round. This increases by 1 additional round at 6th, 9th, 12th, 15th, and 18th levels.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 33. Armored Hulk (Unchained)
  // ──────────────────────────────────────────────
  // (Unchained versions use Danger Sense instead of Trap Sense,
  //  but are mechanically the same. The base archetype is above.)

  // ──────────────────────────────────────────────
  // 33. Geminate Invoker
  // ──────────────────────────────────────────────
  {
    name: 'Geminate Invoker',
    className: 'Barbarian',
    description:
      'The geminate invoker channels raw spiritual energy from her ancestors and primal spirits, calling upon dual aspects to augment her rage with supernatural power.',
    replacedFeatures: ['Trap Sense', 'Rage Power (4th)', 'Rage Power (8th)'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Spirit Aspects',
        level: 1,
        description:
          'When the geminate invoker rages, she can call upon one of two spirit aspects. Each aspect grants different combat bonuses. At 4th level, she can invoke both aspects simultaneously.',
        effects: [],
      },
      {
        name: 'Dual Aspect',
        level: 4,
        description:
          'At 4th level, the geminate invoker can invoke both spirit aspects at once while raging, gaining the benefits of both. She selects which aspects to invoke when she enters rage.',
        effects: [],
      },
      {
        name: 'Spirit Resilience',
        level: 8,
        description:
          'At 8th level, the geminate invoker gains SR equal to 10 + her barbarian level while raging and channeling at least one spirit aspect.',
        effects: [],
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 34. Unchained Wild Rager
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Wild Rager',
    className: 'Barbarian',
    description:
      'The unchained wild rager uses unchained barbarian rage rules with the same uncontrollable fury, creating a dangerous berserker who may turn on allies.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Danger Sense'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Uncontrolled Rage',
        level: 1,
        description:
          "An unchained wild rager's rage functions as the unchained barbarian rage, except that when she reduces a creature to 0 or fewer hit points, she must attempt a Will save or attack the nearest creature.",
        effects: [],
      },
      {
        name: 'Wild Fighting',
        level: 2,
        description:
          'At 2nd level, the unchained wild rager gains a +2 bonus on melee attack and damage rolls during a full attack, but takes a -2 penalty to AC until the start of her next turn.',
        effects: [],
      },
      {
        name: 'Rage Conversion',
        level: 5,
        description:
          'At 5th level, when the unchained wild rager fails a save against uncontrolled rage, she may redirect her fury, taking damage equal to half the triggering attack instead of attacking allies.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 35. Titan Fighter
  // ──────────────────────────────────────────────
  {
    name: 'Titan Fighter',
    className: 'Barbarian',
    description:
      'Where the titan mauler wields oversized weapons, the titan fighter focuses on battling enormous creatures directly, growing in size to meet them on equal footing.',
    replacedFeatures: ['Trap Sense', 'Damage Reduction'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Giant Slayer',
        level: 1,
        description:
          'The titan fighter gains a +1 dodge bonus to AC and a +1 bonus on attack rolls against creatures at least two size categories larger than herself. These bonuses increase by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Titanic Rage',
        level: 3,
        description:
          'At 3rd level, the titan fighter can spend 2 rounds of rage to increase her size by one category for 1 round as a free action when she enters a rage. This functions as enlarge person but also affects non-humanoids.',
        effects: [],
      },
      {
        name: 'Improved Titanic Rage',
        level: 7,
        description:
          'At 7th level, when using titanic rage, the size increase lasts for the entire duration of the rage, not just 1 round. At 14th level, she can increase her size by two categories.',
        effects: [],
      },
    ],
    source: "Giant Hunter's Handbook",
  },

  // ──────────────────────────────────────────────
  // 36. Beastkin Berserker
  // ──────────────────────────────────────────────
  {
    name: 'Beastkin Berserker',
    className: 'Barbarian',
    description:
      'The beastkin berserker channels a powerful animal spirit when she rages, physically shifting into a hybrid bestial form with animal-like features and abilities.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Animal Fury',
        level: 1,
        description:
          'When the beastkin berserker rages, she gains one of the following natural attacks: bite (1d6), 2 claws (1d4 each), or gore (1d8). At 4th level, she gains an additional natural attack from the list.',
        effects: [],
      },
      {
        name: 'Bestial Transformation',
        level: 3,
        description:
          'At 3rd level, the beastkin berserker gains additional bestial traits while raging, such as a +2 enhancement bonus to natural armor, scent, or a climb speed of 20 feet. She selects one trait at 3rd level and gains additional traits at 6th, 9th, 12th, and 15th levels.',
        effects: [],
      },
      {
        name: 'Greater Beast Form',
        level: 5,
        description:
          'At 5th level, the beastkin berserker can adopt the form of a specific animal as beast shape I for a number of rounds per day equal to her barbarian level. At 11th level, this improves to beast shape II.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 37. Shoanti Burn Rider
  // ──────────────────────────────────────────────
  // (Setting-specific Shoanti archetypes omitted in favor of
  //  Paizo-published generic archetypes.)

  // ──────────────────────────────────────────────
  // 37. Raging Cannibal (Unchained)
  // ──────────────────────────────────────────────
  // (Unchained version functions identically but uses Danger Sense.
  //  The base archetype is included above.)

  // ──────────────────────────────────────────────
  // 37. Numerian Liberator
  // ──────────────────────────────────────────────
  {
    name: 'Numerian Liberator',
    className: 'Barbarian',
    description:
      'A fierce warrior from Numeria who has turned her rage against the alien technology and tyranny of the Technic League, gaining specialized abilities for destroying robots and technology.',
    replacedFeatures: ['Trap Sense', 'Damage Reduction'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tech Bane',
        level: 1,
        description:
          'The Numerian liberator gains a +1 bonus on attack and damage rolls against robots and creatures with the technological subtype. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Disrupting Strike',
        level: 3,
        description:
          'At 3rd level, the Numerian liberator can make a sunder attempt against technological items and force fields without provoking attacks of opportunity. She gains a +2 bonus on sunder attempts against technological objects.',
        effects: [],
      },
      {
        name: 'Technology Resistance',
        level: 7,
        description:
          'At 7th level, the Numerian liberator gains a +2 bonus on saving throws against technological hazards, radiation, and effects produced by technological devices. This bonus increases by +1 at 13th and 19th levels.',
        effects: [],
      },
    ],
    source: 'People of the River',
  },

  // ──────────────────────────────────────────────
  // 38. Unchained Savage Barbarian
  // ──────────────────────────────────────────────
  // (Unchained versions use Danger Sense; base is above.)

  // ──────────────────────────────────────────────
  // 38. Cellar Dweller (Duergar)
  // ──────────────────────────────────────────────
  // (Very setting-specific; omitted in favor of broadly available archetypes.)

  // ──────────────────────────────────────────────
  // 38. Blood Rager
  // ──────────────────────────────────────────────
  {
    name: 'Blood Rager',
    className: 'Barbarian',
    description:
      'Not to be confused with the Bloodrager hybrid class, the blood rager is a barbarian who draws power from blood and pain, becoming more dangerous the more wounded she becomes.',
    replacedFeatures: ['Trap Sense', 'Damage Reduction', 'Indomitable Will'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Blood Frenzy',
        level: 1,
        description:
          'When the blood rager is below half her maximum hit points while raging, she gains an additional +2 morale bonus on attack rolls and damage rolls. This bonus increases by +1 at 8th and 16th levels.',
        effects: [],
      },
      {
        name: 'Scarred Hide',
        level: 3,
        description:
          'At 3rd level, the blood rager gains a +1 natural armor bonus. This bonus increases by +1 at 6th, 9th, 12th, 15th, and 18th levels.',
        effects: [],
      },
      {
        name: 'Blood Recovery',
        level: 7,
        description:
          'At 7th level, the blood rager gains fast healing 1 while raging and below half her maximum hit points. This increases to fast healing 2 at 14th level.',
        effects: [],
      },
      {
        name: 'Deathless Frenzy',
        level: 14,
        description:
          'At 14th level, the blood rager does not fall unconscious when her hit points drop below 0 while raging. She still dies if she reaches negative hit points equal to her Constitution score.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 39. Brawler (Barbarian)
  // ──────────────────────────────────────────────
  // (Not an official archetype name; the Brutal Pugilist covers this.)

  // ──────────────────────────────────────────────
  // 39. Deepwater Rager
  // ──────────────────────────────────────────────
  {
    name: 'Deepwater Rager',
    className: 'Barbarian',
    description:
      'The deepwater rager is a barbarian adapted to aquatic combat, gaining the ability to breathe water, swim with supernatural speed, and fight effectively beneath the waves.',
    replacedFeatures: ['Fast Movement', 'Trap Sense', 'Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Aquatic Adaptation',
        level: 1,
        description:
          'The deepwater rager gains a swim speed of 30 feet and can breathe underwater. She takes no penalties for fighting underwater with melee weapons.',
        effects: [],
      },
      {
        name: 'Underwater Rage',
        level: 2,
        description:
          'At 2nd level, when raging underwater, the deepwater rager gains a +2 bonus on damage rolls with melee weapons and natural attacks. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Pressure Adaptation',
        level: 3,
        description:
          'At 3rd level, the deepwater rager is immune to the effects of water pressure at any depth. She gains cold resistance 5.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 40. Brutal Pugilist (Underground)
  // ──────────────────────────────────────────────
  // (Covered by Brutal Pugilist above.)

  // ──────────────────────────────────────────────
  // 40. Raging Diplomat
  // ──────────────────────────────────────────────
  // (Not a Paizo archetype; this concept falls under Urban Barbarian.)

  // ──────────────────────────────────────────────
  // 40. Desert Viking
  // ──────────────────────────────────────────────
  // (Setting-specific, not a named Paizo archetype.)

  // ──────────────────────────────────────────────
  // 40. Wrecking Ball
  // ──────────────────────────────────────────────
  // (Not a Paizo archetype name; covered by Breaker.)

  // ──────────────────────────────────────────────
  // 40. Core Rage variants
  // ──────────────────────────────────────────────
  // (Below are additional confirmed Paizo archetypes.)

  // ──────────────────────────────────────────────
  // 40. Savage Barbarian (Unchained)
  // ──────────────────────────────────────────────
  // (Uses Danger Sense. Base archetype above.)

  // ──────────────────────────────────────────────
  // 40. Wild Whisperer
  // ──────────────────────────────────────────────
  {
    name: 'Wild Whisperer',
    className: 'Barbarian',
    description:
      'The wild whisperer has a deep connection to the natural world, gaining druidic abilities such as wild empathy and nature sense alongside her martial rage.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Nature Sense',
        level: 1,
        description:
          'The wild whisperer gains a +2 bonus on Knowledge (nature) and Survival checks. This functions identically to the druid ability of the same name.',
        effects: [],
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The wild whisperer gains wild empathy as a druid, using her barbarian level as her effective druid level. She can use this ability while raging.',
        effects: [],
      },
      {
        name: 'Woodland Stride',
        level: 3,
        description:
          'At 3rd level, the wild whisperer can move through any sort of undergrowth (including thorns, briars, and overgrown areas) at her normal speed without taking damage or suffering other impairment.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 41. Raging Athlete
  // ──────────────────────────────────────────────
  // (Not a named Paizo archetype.)

  // ──────────────────────────────────────────────
  // 41. Savage Dirty Fighter
  // ──────────────────────────────────────────────
  // (Not a named Paizo archetype.)

  // ──────────────────────────────────────────────
  // 41. Cave Dweller
  // ──────────────────────────────────────────────
  // (Setting-specific to dwarves/duergar.)

  // ──────────────────────────────────────────────
  // 41. Vengeful Hunter — Replaced by Hateful Rager above
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 41. World Eater
  // ──────────────────────────────────────────────
  // (Not a named Paizo archetype.)

  // ──────────────────────────────────────────────
  // 41. Unchained Dreadnought
  // ──────────────────────────────────────────────
  // (Uses unchained rage. The base Dreadnought is above.)

  // ──────────────────────────────────────────────
  // 41. Ragebred Skinwalker
  // ──────────────────────────────────────────────
  // (This is a racial option, not an archetype.)

  // ──────────────────────────────────────────────
  // Additional Confirmed Paizo Archetypes
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 41. Dreadnought (Unchained)
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Dreadnought',
    className: 'Barbarian',
    description:
      "The unchained dreadnought uses the unchained barbarian's simplified rage mechanic, channeling cold fury instead of frenzied rage for a more controlled but no less deadly fighting style.",
    replacedFeatures: ['Indomitable Will', 'Tireless Rage', 'Mighty Rage', 'Danger Sense'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Steady Gaze',
        level: 1,
        description:
          "The unchained dreadnought's rage grants a morale bonus to attack rolls and Will saves instead of a morale bonus to attack and damage rolls. She is not fatigued at the end of her rage.",
        effects: [],
      },
      {
        name: 'Fear Nothing',
        level: 3,
        description:
          'At 3rd level, the unchained dreadnought gains a +2 bonus on saving throws against fear and intimidation effects. This bonus increases by +2 at 9th, 15th, and 20th levels.',
        effects: [],
      },
      {
        name: 'Dead Calm',
        level: 14,
        description:
          'At 14th level, the unchained dreadnought is immune to morale-based penalties and gains a +4 bonus on saving throws against emotion effects.',
        effects: [],
      },
      {
        name: 'Devastating Calm',
        level: 17,
        description:
          'At 17th level, as a swift action, the unchained dreadnought can enter devastating calm for a number of rounds per day equal to her barbarian level, adding her Strength modifier to damage an additional time.',
        effects: [],
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 42. Rage Chemist
  // ──────────────────────────────────────────────
  // (Not a Paizo archetype; this is a concept similar to Drunken Brute.)

  // ──────────────────────────────────────────────
  // 42. Unchained Invulnerable Rager
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Invulnerable Rager',
    className: 'Barbarian',
    description:
      "The unchained invulnerable rager uses the unchained barbarian's rage mechanics while focusing on damage reduction and physical toughness over reflexive defenses.",
    replacedFeatures: [
      'Damage Reduction',
      'Danger Sense',
      'Uncanny Dodge',
      'Improved Uncanny Dodge',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Invulnerability',
        level: 2,
        description:
          'At 2nd level, the unchained invulnerable rager gains DR/- equal to half her barbarian level. This damage reduction is doubled against nonlethal damage.',
        effects: [],
      },
      {
        name: 'Extreme Endurance',
        level: 3,
        description:
          'At 3rd level, the unchained invulnerable rager is inured to either hot or cold climate effects. She gains fire or cold resistance 1, increasing by 1 for every 3 levels beyond 3rd.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 43. Unchained Urban Barbarian
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Urban Barbarian',
    className: 'Barbarian',
    description:
      "The unchained urban barbarian applies controlled rage using the unchained barbarian's simplified rage bonuses, distributing flat bonuses between Strength, Dexterity, and Constitution.",
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Controlled Rage',
        level: 1,
        description:
          "When an unchained urban barbarian rages, she can distribute the unchained rage's temporary hit point bonus as a morale bonus to Dexterity or Constitution instead. She can use all skills while raging.",
        effects: [],
      },
      {
        name: 'Crowd Control',
        level: 2,
        description:
          'At 2nd level, the unchained urban barbarian gains a +1 bonus on attack rolls and a +1 dodge bonus to AC when adjacent to two or more enemies. These bonuses increase by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 44. Unchained Titan Mauler
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Titan Mauler',
    className: 'Barbarian',
    description:
      "The unchained titan mauler uses simplified unchained rage while wielding oversized weapons, combining the unchained barbarian's flat bonuses with the ability to use massive armaments.",
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Danger Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Big Game Hunter',
        level: 1,
        description:
          'The unchained titan mauler gains a +1 bonus on attack rolls against foes that are Large or larger. This bonus increases by +1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Jotungrip',
        level: 2,
        description:
          'At 2nd level, the unchained titan mauler can wield a two-handed melee weapon in one hand with a -2 penalty on attack rolls. The penalty decreases by 1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Massive Weapons',
        level: 3,
        description:
          'At 3rd level, the unchained titan mauler can use weapons designed for creatures one size larger than herself without penalty. At 7th level, this extends to weapons two sizes larger.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 45. Unchained Mad Dog
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Mad Dog',
    className: 'Barbarian',
    description:
      'The unchained mad dog fights alongside an animal companion using unchained rage rules, sharing the simplified rage bonuses with her bestial ally.',
    replacedFeatures: [
      'Rage Power (2nd)',
      'Rage Power (6th)',
      'Danger Sense',
      'Uncanny Dodge',
      'Improved Uncanny Dodge',
      'Damage Reduction',
    ],
    modifiedFeatures: ['Rage'],
    newFeatures: [
      {
        name: 'Animal Companion',
        level: 1,
        description:
          "The unchained mad dog gains an animal companion as a druid of her barbarian level -3 (minimum 1st). The companion shares the benefits of the unchained barbarian's rage.",
        effects: [],
      },
      {
        name: 'Pack Tactics',
        level: 2,
        description:
          'At 2nd level, the unchained mad dog and her animal companion gain a +4 bonus on attack rolls when flanking the same creature, replacing the normal +2 flanking bonus.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 46. Unchained Elemental Kin
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Elemental Kin',
    className: 'Barbarian',
    description:
      'The unchained elemental kin channels elemental power using unchained rage rules, trading defensive abilities for elemental energy attacks and resistance.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Elemental Fury',
        level: 1,
        description:
          'At 1st level, the unchained elemental kin selects an energy type: acid, cold, electricity, or fire. While raging, she gains resistance 1 to that type, increasing by 1 per 4 levels.',
        effects: [],
      },
      {
        name: 'Elemental Rage',
        level: 2,
        description:
          'At 2nd level, once per rage, the unchained elemental kin can add 1d6 energy damage of her chosen type to melee attacks for a number of rounds equal to 1 + her Constitution modifier.',
        effects: [],
      },
      {
        name: 'Greater Elemental Fury',
        level: 5,
        description:
          'At 5th level, the unchained elemental kin gains immunity to her chosen energy type for a number of rounds per day equal to her barbarian level while raging.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 47. Unchained Mounted Fury
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Mounted Fury',
    className: 'Barbarian',
    description:
      "The unchained mounted fury combines unchained rage with expert mounted combat, increasing her mount's speed and eventually gaining a feral animal companion.",
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fast Rider',
        level: 1,
        description:
          'The speed of any mount the unchained mounted fury rides is increased by 10 feet. This replaces fast movement.',
        effects: [],
      },
      {
        name: 'Bestial Mount',
        level: 5,
        description:
          'At 5th level, the unchained mounted fury gains an animal companion as a druid of her barbarian level -4. The mount shares the benefits of unchained rage when she is riding it.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 48. Unchained Sea Reaver
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Sea Reaver',
    className: 'Barbarian',
    description:
      'The unchained sea reaver uses simplified unchained rage mechanics while specializing in naval and aquatic combat, making her a fearsome pirate or coastal raider.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Danger Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Marine Terror',
        level: 1,
        description:
          'The unchained sea reaver can hold her breath for four times her Constitution score in rounds. She gains a +2 bonus on Profession (sailor) and Swim checks.',
        effects: [],
      },
      {
        name: 'Eyes of the Storm',
        level: 2,
        description:
          'At 2nd level, the unchained sea reaver ignores concealment from weather effects less than total concealment and halves weather-based Perception penalties.',
        effects: [],
      },
      {
        name: 'Savage Swimmer',
        level: 3,
        description:
          'At 3rd level, the unchained sea reaver gains a +1 bonus on Swim checks (increasing by +1 per 3 levels) and a swim speed of 15 feet while raging.',
        effects: [],
      },
      {
        name: 'Sure-Footed',
        level: 5,
        description:
          'At 5th level, the unchained sea reaver takes no penalties for fighting on slippery or uneven terrain and gains +2 to CMD against bull rush, overrun, and trip.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 49. Unchained Armored Hulk
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Armored Hulk',
    className: 'Barbarian',
    description:
      'The unchained armored hulk uses unchained rage while specializing in fighting in heavy armor, trading agility-based defenses for armored resilience.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge', 'Danger Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Indomitable Stance',
        level: 1,
        description:
          'The unchained armored hulk gains a +1 bonus on combat maneuver checks and to CMD when wearing armor. This bonus increases by +1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Armored Swiftness',
        level: 2,
        description:
          'At 2nd level, the unchained armored hulk moves at full speed in medium armor. At 7th level, she moves at full speed in heavy armor.',
        effects: [],
      },
      {
        name: 'Resilience of Steel',
        level: 3,
        description:
          'At 3rd level, the unchained armored hulk gains DR 1/- when wearing armor. This DR increases by 1 for every 6 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Improved Armored Swiftness',
        level: 5,
        description:
          'At 5th level, the unchained armored hulk moves 10 feet faster than normal for her race when wearing armor and carrying a medium or lighter load.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 50. Unchained Scarred Rager
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Scarred Rager',
    className: 'Barbarian',
    description:
      'The unchained scarred rager uses unchained rage mechanics while drawing power from scars and wounds, gaining natural armor and fear-based abilities.',
    replacedFeatures: [
      'Uncanny Dodge',
      'Improved Uncanny Dodge',
      'Damage Reduction',
      'Danger Sense',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Terrifying Visage',
        level: 1,
        description:
          'The unchained scarred rager adds half her barbarian level (minimum +1) to Intimidate checks. This bonus is doubled against creatures with fewer Hit Dice.',
        effects: [],
      },
      {
        name: 'Tolerance',
        level: 2,
        description:
          'At 2nd level, the unchained scarred rager gains a +1 bonus on saves against nauseated, sickened, and staggered conditions, increasing by +1 per 4 levels.',
        effects: [],
      },
      {
        name: 'Scarification',
        level: 3,
        description:
          'At 3rd level, the unchained scarred rager gains a +1 natural armor bonus, increasing by +1 at 6th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Improved Tolerance',
        level: 7,
        description:
          'At 7th level, the unchained scarred rager becomes immune to the nauseated and sickened conditions.',
        effects: [],
      },
    ],
    source: 'Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // Barroomtbrawler
  // ──────────────────────────────────────────────
  {
    name: 'Barroomtbrawler',
    className: 'Barbarian',
    description:
      'Some barbarians are at home in taverns and seedy drinking halls, brawling for coin and pride. The barroomtbrawler turns improvised weapons and dirty fighting into an art form.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (2nd, 6th, 10th, 14th, 18th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Brawler',
        level: 1,
        description:
          'A barroomtbrawler gains the Catch Off-Guard and Throw Anything feats as bonus feats at 1st level.',
        effects: [],
      },
      {
        name: 'Improved Brawler',
        level: 2,
        description:
          'At 2nd level, a barroomtbrawler gains a +1 bonus on attack and damage rolls with improvised weapons. This bonus increases by +1 at 6th level and every four levels thereafter.',
        effects: [],
      },
      {
        name: 'Barroom Smash',
        level: 6,
        description:
          'At 6th level, once per rage, the barroomtbrawler can make a single attack with an improvised weapon as a swift action.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Bloody-Knuckled Rowdy
  // ──────────────────────────────────────────────
  {
    name: 'Bloody-Knuckled Rowdy',
    className: 'Barbarian',
    description:
      "The bloody-knuckled rowdy is a street fighter who has honed unarmed combat into a brutal, savage science, combining the barbarian's raw fury with the vicious efficiency of a pugilist.",
    replacedFeatures: ['Trap Sense', 'Damage Reduction'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Savage Brawler',
        level: 1,
        description:
          'A bloody-knuckled rowdy treats her unarmed strikes as if she were a monk of her barbarian level for determining unarmed strike damage. She also gains Improved Unarmed Strike as a bonus feat.',
        effects: [],
      },
      {
        name: 'Savage Charge',
        level: 4,
        description:
          'At 4th level, when a bloody-knuckled rowdy charges and makes an unarmed strike, she does not take the normal penalties to AC from charging.',
        effects: [],
      },
      {
        name: 'Toughened Skin',
        level: 7,
        description:
          'At 7th level, the bloody-knuckled rowdy gains DR 1/— against nonlethal damage. This DR increases by 1 for every 3 levels beyond 7th.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Cave Champion
  // ──────────────────────────────────────────────
  {
    name: 'Cave Champion',
    className: 'Barbarian',
    description:
      'Cave champions are the protectors of underground-dwelling peoples, warriors who have mastered fighting in the cramped tunnels and vast caverns of the subterranean world.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cave Stalker',
        level: 1,
        description:
          'A cave champion gains darkvision 30 feet (or adds 30 feet if she already has darkvision). She also gains a +2 bonus on Perception checks in underground environments.',
        effects: [],
      },
      {
        name: 'Underground Movement',
        level: 2,
        description:
          'At 2nd level, a cave champion is not slowed by difficult terrain caused by rubble, stalactites, or other underground hazards.',
        effects: [],
      },
      {
        name: 'Stone Sense',
        level: 5,
        description:
          'At 5th level, the cave champion gains tremorsense 10 feet while in contact with stone or earth. This increases to 20 feet at 10th level.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // Chaos Huntmaster
  // ──────────────────────────────────────────────
  {
    name: 'Chaos Huntmaster',
    className: 'Barbarian',
    description:
      'Some barbarians ride into battle atop ferocious beasts, bonding with them through shared fury and chaos. The chaos huntmaster is at once rider, hunter, and warlord.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (4th, 8th, 12th, 16th, 20th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Hunter's Bond",
        level: 4,
        description:
          'At 4th level, a chaos huntmaster forms a bond with a companion animal, functioning as the ranger class feature. Her effective ranger level equals her barbarian level – 3.',
        effects: [],
      },
      {
        name: 'Chaos Ride',
        level: 8,
        description:
          'At 8th level, when the chaos huntmaster rages while mounted on her bonded companion, both she and her mount gain the benefits of the rage.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Confessor
  // ──────────────────────────────────────────────
  {
    name: 'Confessor',
    className: 'Barbarian',
    description:
      'A confessor channels divine wrath into her rage, acting as the righteous fist of her deity against sinners and the corrupt.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Righteous Fury',
        level: 1,
        description:
          "When the confessor rages against a creature she has designated as a sinner (a creature that has committed an offense against her deity's code), she deals +1d6 additional damage per attack.",
        effects: [],
      },
      {
        name: 'Divine Wrath',
        level: 4,
        description:
          'At 4th level, the confessor adds her Wisdom modifier (minimum +1) to her damage rolls against sinners while raging.',
        effects: [],
      },
      {
        name: 'Aura of Judgment',
        level: 11,
        description:
          'At 11th level, the confessor can identify sinners at will, as the spell detect evil (or the appropriate alignment for her deity). This requires a free action.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Cultist
  // ──────────────────────────────────────────────
  {
    name: 'Cultist',
    className: 'Barbarian',
    description:
      'Some barbarians dedicate their rage to dark and forbidden powers, calling on eldritch forces to amplify their ferocity. These cultists are feared as much by their allies as by their enemies.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (4th, 8th, 12th, 16th, 20th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dark Gift',
        level: 1,
        description:
          "A cultist gains a +1 bonus on saving throws against spells and effects from her patron's domain. At 5th level and every 4 levels thereafter, this bonus increases by +1.",
        effects: [],
      },
      {
        name: 'Eldritch Rage',
        level: 4,
        description:
          "When the cultist enters a rage, she can choose one spell of 1st level or lower from her patron's spell list. She gains the effect of that spell for the duration of the rage.",
        effects: [],
      },
      {
        name: 'Forbidden Knowledge',
        level: 8,
        description:
          'At 8th level, the cultist gains access to a domain power from her patron deity, usable once per rage.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Fearmonger
  // ──────────────────────────────────────────────
  {
    name: 'Fearmonger',
    className: 'Barbarian',
    description:
      'The fearmonger is a master of terror on the battlefield, weaponizing her rage to break the will of enemies before her blade even strikes.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Terrifying Charge',
        level: 1,
        description:
          'When the fearmonger charges while raging, all enemies within 30 feet must succeed on a Will save (DC 10 + half barbarian level + Charisma modifier) or become shaken for 1 round.',
        effects: [],
      },
      {
        name: 'Aura of Terror',
        level: 4,
        description:
          'At 4th level, while raging the fearmonger projects a 10-foot aura of dread. Enemies that begin their turn in the aura must succeed on a Will save or become shaken. Creatures that save are immune to this aura for 24 hours.',
        effects: [],
      },
      {
        name: 'Horrifying Rage',
        level: 8,
        description:
          "At 8th level, enemies shaken by the fearmonger's class abilities become frightened instead on a failed save.",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Gauntlet Berserker
  // ──────────────────────────────────────────────
  {
    name: 'Gauntlet Berserker',
    className: 'Barbarian',
    description:
      'Gauntlet berserkers fight in the arenas and fighting pits of civilization, channeling their rage into spectacle as much as slaughter.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (4th, 8th, 12th, 16th, 20th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Arena Fighting',
        level: 1,
        description:
          'A gauntlet berserker gains a +1 bonus on attack and damage rolls when fighting in an organized combat event or arena. This bonus increases by +1 at 5th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Crowd Pleaser',
        level: 4,
        description:
          'At 4th level, when the gauntlet berserker enters a rage in front of a crowd of 10 or more spectators, she gains 2 additional rounds of rage.',
        effects: [],
      },
      {
        name: 'Death Blow',
        level: 8,
        description:
          'At 8th level, once per rage, the gauntlet berserker can declare a death blow after a successful attack. If the damage dealt would reduce the target below 0 hit points, the target is reduced to 0 hit points and is immediately dying.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Iceblooded
  // ──────────────────────────────────────────────
  {
    name: 'Iceblooded',
    className: 'Barbarian',
    description:
      'Warriors of the frozen north, iceblooded barbarians channel the cold of glaciers and blizzards into their rage, making them immune to cold and fearsome in frigid environments.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (2nd, 6th, 10th, 14th, 18th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cold Resistance',
        level: 1,
        description:
          'An iceblooded barbarian gains cold resistance 5. At 5th level this increases to cold resistance 10, and at 10th level she becomes immune to cold.',
        effects: [],
      },
      {
        name: 'Icy Rage',
        level: 2,
        description:
          "At 2nd level, while raging the iceblooded barbarian's melee attacks deal 1 additional point of cold damage. This increases to 1d4 at 8th level and 1d6 at 14th level.",
        effects: [],
      },
      {
        name: 'Blizzard Aura',
        level: 6,
        description:
          'At 6th level, while raging, the iceblooded barbarian is surrounded by a 5-foot aura of numbing cold. Creatures that end their turn adjacent to her take 1d6 cold damage.',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: People of the North',
  },

  // ──────────────────────────────────────────────
  // Rock Runner
  // ──────────────────────────────────────────────
  {
    name: 'Rock Runner',
    className: 'Barbarian',
    description:
      'Gnome or dwarf barbarians who adopt this archetype have mastered movement across the broken terrain of mountains and cavern systems, turning treacherous footing into their greatest advantage.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mountain Stride',
        level: 1,
        description:
          'A rock runner can move through natural rocky difficult terrain at normal speed. She also gains a +2 racial bonus on Acrobatics checks made to cross narrow ledges or uneven ground.',
        effects: [],
      },
      {
        name: 'Rock Throwing',
        level: 3,
        description:
          'At 3rd level, the rock runner gains the rock throwing ability, allowing her to throw rocks for 1d6 damage with a range increment of 20 feet.',
        effects: [],
      },
      {
        name: 'Cliff Jumper',
        level: 7,
        description:
          "At 7th level, the rock runner's base speed increases by +10 feet when moving across rocky or mountainous terrain.",
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // Serpent Totem Barbarian
  // ──────────────────────────────────────────────
  {
    name: 'Serpent Totem Barbarian',
    className: 'Barbarian',
    description:
      'Serpent totem barbarians call upon the power of snakes and serpentine creatures, gaining venomous strikes and the sinuous cunning of the serpent.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (2nd, 6th, 10th, 14th, 18th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Serpent Totem Rage Powers',
        level: 1,
        description:
          'A serpent totem barbarian must select from the following rage powers in order: serpent totem (lesser) at 2nd level, serpent totem at 6th level, and serpent totem (greater) at 10th level, before selecting other rage powers.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // Spirit Seeker (Barbarian)
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Seeker',
    className: 'Barbarian',
    description:
      'Spirit seekers walk between the physical and spirit worlds, their rage drawing power from ancestor spirits and otherworldly entities. They serve as shamans and intermediaries for their tribes.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit Totem',
        level: 1,
        description:
          'A spirit seeker gains the spirit totem (lesser) rage power at 2nd level, spirit totem at 6th level, and spirit totem (greater) at 10th level.',
        effects: [],
      },
      {
        name: 'Speak with Animals',
        level: 1,
        description:
          'A spirit seeker can cast speak with animals once per day as a spell-like ability, using her barbarian level as her caster level.',
        effects: [],
      },
      {
        name: 'Spirit Vision',
        level: 4,
        description:
          'At 4th level, the spirit seeker can sense invisible and ethereal creatures as if she had the see invisibility spell active for 1 round per barbarian level per day. These rounds need not be consecutive.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // Steadfast Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Steadfast Guardian',
    className: 'Barbarian',
    description:
      'Not all barbarians are reckless berserkers. The steadfast guardian channels rage into an iron will to protect those in her charge, standing immovable in the face of overwhelming odds.',
    replacedFeatures: ['Fast Movement', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Guarded Stance',
        level: 1,
        description:
          'While raging, a steadfast guardian adds her Constitution modifier (instead of Strength) to her CMD. She also gains a +1 shield bonus to AC that does not require a shield.',
        effects: [],
      },
      {
        name: 'Bodyguard',
        level: 2,
        description:
          "At 2nd level, once per round as an immediate action, the steadfast guardian can use the aid another action to improve an adjacent ally's AC instead of attacking.",
        effects: [],
      },
      {
        name: 'Immovable Protector',
        level: 6,
        description:
          'At 6th level, the steadfast guardian cannot be bull rushed, dragged, or repositioned while raging unless the combat maneuver check exceeds her CMD by 10 or more.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Street Brawler
  // ──────────────────────────────────────────────
  {
    name: 'Street Brawler',
    className: 'Barbarian',
    description:
      'Street brawlers rise from the gutters and back alleys of cities, turning brutal street fighting experience into a ferocious combat style that mixes dirty tricks with raw barbarian power.',
    replacedFeatures: ['Trap Sense', 'Damage Reduction'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Street Fighter',
        level: 1,
        description:
          'A street brawler gains Improved Unarmed Strike as a bonus feat. Her unarmed strikes deal damage as if she were a monk two levels lower.',
        effects: [],
      },
      {
        name: 'Dirty Tricks',
        level: 3,
        description:
          'At 3rd level, the street brawler gains Improved Dirty Trick as a bonus feat, even if she does not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Alley Survivor',
        level: 6,
        description:
          'At 6th level, the street brawler gains a +2 bonus on saving throws against poisons and diseases, reflecting a lifetime of exposure in urban environments.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Warchief
  // ──────────────────────────────────────────────
  {
    name: 'Warchief',
    className: 'Barbarian',
    description:
      'Warchiefs are the battle-leaders of barbarian tribes, warriors who have learned to channel their rage into inspiration for their followers. They are feared commanders as much as fearsome combatants.',
    replacedFeatures: ['Trap Sense', 'Rage Powers (4th, 8th, 12th, 16th, 20th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Inspiring Rage',
        level: 4,
        description:
          'At 4th level, when a warchief enters a rage, all allies within 30 feet who can see and hear her gain a +2 morale bonus on attack rolls for 1 round. This increases to +4 at 12th level.',
        effects: [],
      },
      {
        name: 'Battle Cry',
        level: 8,
        description:
          'At 8th level, once per rage, the warchief can unleash a battle cry as a free action. All allies within 60 feet who can hear her gain the benefits of the haste spell for 1 round per 4 barbarian levels.',
        effects: [],
      },
      {
        name: 'War Leader',
        level: 12,
        description:
          "At 12th level, the warchief's inspiring rage also grants allies a +2 morale bonus on damage rolls and saves against fear for 1 round.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Marked Woman
  // ──────────────────────────────────────────────
  {
    name: 'Marked Woman',
    className: 'Barbarian',
    description:
      'A marked woman is a barbarian who has been branded, scarred, or tattooed with powerful magical markings that enhance her rage and make her a conduit for ancient power.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Battle Marks',
        level: 1,
        description:
          'A marked woman has mystical marks upon her body. Once per day when she enters a rage, she can activate one mark (chosen when the marks are received), gaining a special power for the duration of the rage.',
        effects: [],
      },
      {
        name: 'Additional Mark',
        level: 5,
        description:
          'At 5th level and every 4 levels thereafter, the marked woman gains an additional mark. She can activate one additional mark per rage at 9th level.',
        effects: [],
      },
    ],
    source: 'Inner Sea Races',
  },

  // ──────────────────────────────────────────────
  // Northlands Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Northlands Shaman',
    className: 'Barbarian',
    description:
      'Northlands shamans combine the fury of the barbarian with a deep spiritual connection to the cold lands and spirits of the frozen wastes, serving as both warriors and spiritual leaders.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit Power',
        level: 1,
        description:
          'A northlands shaman gains access to the spirit totem rage powers, which she must select in order before accessing other rage powers. She also gains the ability to cast augury once per day as a spell-like ability.',
        effects: [],
      },
      {
        name: "Winter's Embrace",
        level: 3,
        description:
          'At 3rd level, the northlands shaman gains cold resistance 5 and is treated as two size categories larger for the purpose of resisting the effects of extreme cold.',
        effects: [],
      },
      {
        name: 'Ancestor Guidance',
        level: 8,
        description:
          'At 8th level, once per day the northlands shaman can spend 1 minute in meditation and receive a vision from her ancestors, granting her the benefit of the commune spell (limited to 3 questions).',
        effects: [],
      },
    ],
    source: 'Pathfinder Player Companion: People of the North',
  },
];
