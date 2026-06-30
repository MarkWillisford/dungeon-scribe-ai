import { ArchetypeData } from '../types';

/**
 * Warder SWAP archetypes from Path of War / Path of War: Expanded.
 * These modify the Warder's discipline list rather than granting initiating
 * to a non-initiating class.
 *
 * Base Warder disciplines: Broken Blade, Golden Lion, Iron Tortoise,
 * Primal Fury, and one of Eternal Guardian or Piercing Thunder.
 */
export const WARDER_POW_ARCHETYPES: ArchetypeData[] = [
  // ── Fiendbound Marauder ──────────────────────────────────────────
  {
    name: 'Fiendbound Marauder',
    className: 'Warder',
    description:
      'Some warders make dark pacts with fiendish entities, trading their stalwart defensive training for sinister powers granted by their unholy patrons. These fiendbound marauders wield spectral claws of dark energy and mark their foes with supernatural curses, serving as terrifying enforcers on the battlefield.',
    replacedFeatures: [
      'Aegis',
      'Clad in Steel',
      'Tactical Acumen',
      'Extended Defense (5th, 8th, 11th, 14th, 17th)',
    ],
    modifiedFeatures: ["Armiger's Mark"],
    newFeatures: [
      {
        name: "Fiend's Grip",
        level: 1,
        description:
          "The fiendbound marauder can manifest a spectral claw as a move action using a gauntlet as a focus. This is a light weapon that deals 1d8 points of bludgeoning or slashing damage (for a Medium wielder), possesses the grapple and reach weapon properties, threatens a critical hit on a natural 20, and grants the grab ability on attacks made with it. The fiendbound marauder applies her full Strength bonus to damage even when used off-hand. The fiend's grip is treated as both a manufactured weapon and a natural weapon, and as a spiked gauntlet for the purpose of feats and abilities. It inherits magical properties and enhancement bonuses from the focus gauntlet used to manifest it. It can be dismissed as a free action. This ability replaces aegis and clad in steel.",
        effects: [],
      },
      {
        name: 'The Dark Mark',
        level: 2,
        description:
          "The fiendbound marauder's armiger's mark becomes a supernatural ability. Marked creatures also become cursed for the duration of the mark. This ability modifies armiger's mark.",
        effects: [],
      },
      {
        name: 'Canny Pugilist',
        level: 4,
        description:
          "At 4th level, the fiendbound marauder adds her initiation modifier as a competence bonus on combat maneuver checks made with her fiend's grip. This ability replaces tactical acumen.",
        effects: [],
      },
      {
        name: "Improved Fiend's Grip",
        level: 5,
        description:
          "At 5th level, the fiendbound marauder's fiend's grip gains the ghost touch weapon special ability, and manifesting it becomes a free action instead of a move action. At 11th level, the fiend's grip's critical multiplier increases to x3. This ability replaces extended defense at 5th and 11th levels.",
        effects: [],
      },
      {
        name: 'Fiendish Empowerment',
        level: 8,
        description:
          "At 8th level, while the fiendbound marauder's fiend's grip is manifested, her armor gains +1 ghost touch armor spikes and resistance 10 to two energy types of her choice. At 14th level, the enhancement bonus increases to +2, she gains resistance to three energy types, and the spikes deal additional damage. At 17th level, the enhancement bonus increases to +3 and her energy resistances increase to 20. This ability replaces extended defense at 8th, 14th, and 17th levels.",
        effects: [],
      },
    ],
    disciplineSwaps: {
      gained: ['black-seraph', 'cursed-razor', 'eternal-guardian'],
      lost: ['golden-lion', 'iron-tortoise'],
    },
    source: 'Path of War: Expanded',
  },

  // ── Ordained Defender ────────────────────────────────────────────
  {
    name: 'Ordained Defender',
    className: 'Warder',
    description:
      'Ordained defenders are warders trained by religious institutions to serve as martial protectors of the faith. Whether shining champions of good or wicked blackguards of dark gods, these warriors combine their defensive prowess with divine empowerment granted by their patron deities.',
    replacedFeatures: ['Bonus Feat (3rd)', 'Bonus Feat (13th)'],
    modifiedFeatures: ['Class Skills', 'Maneuvers (initiation modifier changed to Wisdom)'],
    newFeatures: [
      {
        name: 'Aura',
        level: 1,
        description:
          "An ordained defender who worships a chaotic, evil, good, or lawful deity has a particularly powerful aura (as a cleric) corresponding to the deity's alignment.",
        effects: [],
      },
      {
        name: 'Maneuvers',
        level: 1,
        description:
          "A good-aligned ordained defender adds Silver Crane to her list of available disciplines, an ordained defender who is neither good nor evil adds Eternal Guardian to her list of available disciplines, and an evil-aligned ordained defender adds Black Seraph to her list of available disciplines. If the ordained defender does not have this discipline's associated skill as a class skill, she gains it as a class skill. Her initiation modifier is Wisdom, and any warder class features that previously used her Intelligence modifier now use her Wisdom modifier. This ability modifies the warder's maneuvers.",
        effects: [],
      },
      {
        name: 'Divine Gift',
        level: 3,
        description:
          "At 3rd level, an ordained defender receives supernatural empowerment from her deity in the form of a divine gift. She receives her choice of one inquisitor inquisition or warpriest blessing. She may use this gift a number of times per day equal to 3 + 1/2 her ordained defender level (rounded down). The save DC for any abilities granted by this gift is equal to 10 + 1/2 the ordained defender's class level + the ordained defender's initiation modifier. This ability replaces the bonus feats gained at 3rd and 13th levels.",
        effects: [],
      },
    ],
    // Adds one discipline by alignment — does NOT lose one:
    //   Good → Silver Crane, Neither good nor evil → Eternal Guardian, Evil → Black Seraph
    disciplineSwaps: {
      gained: ['silver-crane', 'eternal-guardian', 'black-seraph'], // alignment-dependent, only one applies
      lost: [], // no discipline is traded away
    },
    source: 'Path of War: Expanded',
  },

  // ── Dervish Defender ─────────────────────────────────────────────
  {
    name: 'Dervish Defender',
    className: 'Warder',
    description:
      'Dervish defenders eschew heavy armor and shields in favor of fighting with a weapon in each hand, using twin blades as both sword and shield. These agile warders whirl through battle, deflecting attacks with their off-hand weapons and retaliating with deadly precision.',
    replacedFeatures: [
      'Weapon and Armor Proficiency',
      'Tactical Acumen',
      'Clad in Steel',
      'Steel Defense',
      'Born of Steel',
    ],
    modifiedFeatures: [
      'Bonus Feat (1st — grants Two-Weapon Fighting)',
      'Maneuvers (discipline list altered)',
    ],
    newFeatures: [
      {
        name: 'Two-Weapon Defense',
        level: 1,
        description:
          'While wearing light armor or no armor, wielding a weapon in each hand (or using a double weapon), and not using a shield heavier than a buckler, the warder may add her warder initiation bonus (if any) to her Armor Class. This bonus applies against touch attacks and when the warder is flat-footed, but is lost when the warder is helpless.',
        effects: [],
      },
      {
        name: 'Dervish Defense',
        level: 4,
        description:
          "At 4th level, whenever a dervish defender uses a counter to successfully negate an opponent's attack and the opponent is threatened by her, she can make an attack of opportunity against that opponent. This ability replaces tactical acumen.",
        effects: [],
      },
      {
        name: 'Shield of Blades',
        level: 6,
        description:
          'At 6th level, while wielding light blades, double weapons, or close weapons, the dervish defender improves her shield bonus to AC by an amount equal to her aegis bonus. The dervish defender may spend an immediate action to sacrifice this shield bonus and grant an adjacent creature an equivalent bonus to AC until the beginning of her next turn. This ability replaces clad in steel.',
        effects: [],
      },
      {
        name: 'Grace of Blades',
        level: 15,
        description:
          "At 15th level, when the dervish defender makes a single attack while holding a weapon in each hand, she adds her off-hand weapon's damage as bonus damage as if she had hit with one of her off-hand weapons. When making multiple attacks while wielding multiple weapons, she increases her weapon damage by one die step. This ability replaces steel defense.",
        effects: [],
      },
      {
        name: 'Critical Evasion',
        level: 19,
        description:
          'This ability functions as born of steel, but only functions if the character is wearing light armor or no armor. This ability replaces born of steel.',
        effects: [],
      },
    ],
    disciplineSwaps: {
      gained: ['thrashing-dragon', 'riven-hourglass'],
      lost: ['iron-tortoise', 'piercing-thunder'],
    },
    source: 'Path of War: Expanded',
  },

  // ── Zweihander Sentinel ──────────────────────────────────────────
  {
    name: 'Zweihander Sentinel',
    className: 'Warder',
    description:
      'Zweihander sentinels abandon the shield entirely, instead using massive two-handed weapons as both their offense and defense. These warders treat their greatswords and polearms as shields, interposing them between their allies and incoming attacks with surprising agility.',
    replacedFeatures: [
      'Weapon and Armor Proficiency (shields)',
      'Aegis (6th level range increase)',
      'Aegis (12th level range increase)',
    ],
    modifiedFeatures: ['Maneuvers (discipline list altered)'],
    newFeatures: [
      {
        name: 'Zweihander Training',
        level: 1,
        description:
          'When wielding a two-handed weapon or a one-handed weapon in both hands, the warder gains a shield bonus to his armor class equal to his aegis class feature bonus.',
        effects: [],
      },
      {
        name: 'Armament Shield',
        level: 1,
        description:
          'The zweihander sentinel may treat her two-handed weapons as light shields for the purpose of shield bash attacks and any martial maneuvers that require a shield (such as Iron Tortoise techniques). The warder can use the weapon as an off-hand weapon even after attacking with both hands on the weapon.',
        effects: [],
      },
      {
        name: 'Defensive Reach',
        level: 6,
        description:
          'At 6th level, while wielding a non-reach two-handed weapon, the zweihander sentinel extends her reach by 5 feet for the purpose of making attacks of opportunity and counters. While wielding a reach weapon, she threatens adjacent enemies and can attack them as if the weapon were not a reach weapon. This ability replaces the aegis range increase at 6th level.',
        effects: [],
      },
      {
        name: 'Punishing Defenses',
        level: 12,
        description:
          'At 12th level, when making an attack of opportunity or when making an attack against a foe as part of a counter, the zweihander sentinel inflicts an additional 2d6 points of damage. This damage is not multiplied on critical hits. This ability replaces the aegis range increase at 12th level.',
        effects: [],
      },
    ],
    disciplineSwaps: {
      gained: ['scarlet-throne'],
      lost: ['broken-blade'],
    },
    source: 'Path of War',
  },

  // ── Hawkguard ────────────────────────────────────────────────────
  {
    name: 'Hawkguard',
    className: 'Warder',
    description:
      'Hawkguards are ranged-focused warders who maintain their defensive capabilities while using bows, crossbows, or throwing weapons instead of melee arms. These vigilant sentinels watch over their allies from a distance, raining down arrows on any who threaten their charges.',
    replacedFeatures: [
      'Weapon and Armor Proficiency',
      'Defensive Focus',
      'Extended Defense',
      'Adaptive Tactics',
    ],
    modifiedFeatures: ['Maneuvers (discipline list altered)'],
    newFeatures: [
      {
        name: 'Archer Training',
        level: 1,
        description:
          'At 1st level, the hawkguard selects one ranged weapon as her favored weapon. When wielding this weapon, she does not suffer a penalty to hit for wearing a buckler and retains her shield bonus to AC even when using that arm to attack with her chosen weapon. The hawkguard also gains Point-Blank Shot as a bonus feat.',
        effects: [],
      },
      {
        name: 'Ranged Defensive Focus',
        level: 1,
        description:
          "The hawkguard's defensive focus functions differently from the standard warder. When recovering maneuvers as a full-round action, she threatens a 15-foot radius (not adjacent squares) and makes ranged attacks of opportunity against creatures that provoke within this area. The range of this threatened area increases by 5 feet for every five initiator levels she possesses. This ability replaces defensive focus.",
        effects: [],
      },
      {
        name: 'Close Combat Archery',
        level: 3,
        description:
          'At 3rd level, the hawkguard no longer provokes attacks of opportunity when firing or reloading her favored weapon while threatened in melee combat. She can also attack adjacent foes with her ranged weapon during ranged defensive focus. This ability replaces improved defensive focus.',
        effects: [],
      },
      {
        name: 'Defending the Sky',
        level: 5,
        description:
          'At 5th level, once per day the hawkguard can extend the use of her counters. Counters with instantaneous duration gain a 1-round duration and can be used to defend allied creatures in addition to the hawkguard. She gains additional daily uses at 8th, 11th, 14th, and 17th levels. This ability replaces extended defense.',
        effects: [],
      },
      {
        name: 'Evasive Reflexes',
        level: 7,
        description:
          'At 7th level, the hawkguard gains evasion as a rogue, which functions even while wearing medium or heavy armor. As an immediate action, she can grant one ally within 30 feet the benefit of evasion for 1 round. This ability replaces adaptive tactics.',
        effects: [],
      },
    ],
    disciplineSwaps: {
      gained: ['solar-wind', 'tempest-gale'],
      lost: ['primal-fury'],
    },
    source: 'Path of War',
  },
];
