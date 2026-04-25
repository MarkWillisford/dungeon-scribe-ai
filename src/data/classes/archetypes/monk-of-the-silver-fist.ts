import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// ──────────────────────────────────────────────
// Monk of the Silver Fist — Monk archetype (Path of War: Expanded)
// GRANT archetype: gives the initiating system to the Monk.
// Source: https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/dreamscarred-press-monk-archetypes/monk-of-the-silver-fist-monk-archetype/
// ──────────────────────────────────────────────

/**
 * Archetype Maneuver Progression (shared by PoW GRANT archetypes).
 * 20 rows: [maneuversKnown, maneuversReadied, stancesKnown]
 */
export const MONK_OF_THE_SILVER_FIST_PROGRESSION: InitiatingProgressionTable = [
  // Lvl  MK  MR  SK
  [3, 3, 1], // 1
  [4, 3, 1], // 2
  [5, 3, 1], // 3
  [6, 4, 2], // 4
  [6, 4, 2], // 5
  [6, 4, 2], // 6
  [7, 4, 3], // 7
  [7, 4, 3], // 8
  [8, 4, 3], // 9
  [8, 5, 3], // 10
  [9, 5, 4], // 11
  [9, 5, 4], // 12
  [10, 5, 5], // 13
  [11, 5, 5], // 14
  [11, 6, 5], // 15
  [12, 6, 5], // 16
  [13, 6, 5], // 17
  [14, 6, 5], // 18
  [14, 6, 5], // 19
  [15, 7, 5], // 20
];

export const MONK_OF_THE_SILVER_FIST_ARCHETYPE: ArchetypeData = {
  name: 'Monk of the Silver Fist',
  className: 'Monk',
  description:
    'The Monks of the Silver Fist are an order of martial artists that have perfected the way of the bodyguard. Their unique use of gauntlets and greaves protects their hands and adds weight to the attacks they make in defense of their charges.',

  replacedFeatures: [
    'Flurry of Blows',
    'Stunning Fist',
    'Unarmed Strike',
    'Abundant Step',
    'Quivering Palm',
  ],
  modifiedFeatures: ['Bonus Feats', 'Weapon and Armor Proficiency'],

  newFeatures: [
    // ── Weapon and Armor Proficiency ──
    {
      name: 'Weapon and Armor Proficiency',
      level: 1,
      description:
        'A monk of the silver fist gains proficiency with gauntlets and bucklers in addition to their normal weapon and armor proficiencies. This ability alters weapon and armor proficiency.',
    },

    // ── Maneuvers (replaces Flurry of Blows and Stunning Fist) ──
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'A monk of the silver fist begins his career with knowledge of three martial maneuvers. The disciplines available to him are Eternal Guardian, Iron Tortoise, and Mithral Current. If one of his selected disciplines\' associated skills is not on his class skill list, he gains it as a class skill (he gains Bluff and Perform as class skills). A maneuver usable by monks of the silver fist is considered an extraordinary ability unless otherwise noted in it or its discipline\'s description. A monk of the silver fist\'s maneuvers are not affected by spell resistance, and he does not provoke attacks of opportunity when he initiates one. The monk of the silver fist learns additional maneuvers at higher levels, as indicated on Table: Archetype Maneuver Progression. The maximum level of maneuvers gained through monk of the silver fist levels is limited by those listed in that table as well, although this restriction does not apply to maneuvers added to his maneuvers known through other methods, such as prestige classes or the Advanced Study feat. A monk of the silver fist must meet a maneuver\'s prerequisite to learn it. Upon reaching 4th level, and at every even numbered initiator level thereafter (6th, 8th, 10th, and so on), the monk of the silver fist can choose to learn a new maneuver in place of one he already knows. In effect, he loses the old maneuver in exchange for the new one. He can choose a new maneuver of any level he likes, as long as he observes the restriction on the highest-level maneuvers he knows; the monk of the silver fist need not replace the old maneuver with a maneuver of the same level. He can swap only a single maneuver at any given level. A monk of the silver fist\'s initiation modifier is Wisdom, and each monk of the silver fist level is counted as a full initiator level. This ability replaces flurry of blows and stunning fist.',
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A monk of the silver fist can ready all three of his maneuvers known at 1st level, and as he advances in level and learns more maneuvers, he is able to ready more, but must still choose which maneuvers to ready. A monk of the silver fist must always ready his maximum number of maneuvers readied. He readies his maneuvers by performing weapon drills or meditative exercises for ten minutes. The maneuvers he chooses remain readied until he decides to practice again and change them. The monk of the silver fist does not need to sleep or rest for any long period of time in order to ready his maneuvers; any time he spends ten minutes practicing, he can change his readied maneuvers. A monk of the silver fist begins an encounter with all his readied maneuvers unexpended, regardless of how many times he might have already used them since he chose them. When he initiates a maneuver, he expends it for the current encounter, so each of his readied maneuvers can be used once per encounter (unless he recovers them, as described below). In order for the monk of the silver fist to recover maneuvers, he must take on a protective form as a full-round action, moving up to his speed and granting an adjacent ally an insight bonus to AC and saving throws equal to his initiation modifier for one round. When he does so, he recovers a number of expended maneuvers equal to his initiation modifier (minimum 2). Alternately, the monk of the silver fist may take a moment to focus, recovering a single maneuver as a standard action.',
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'A monk of the silver fist begins his career with knowledge of one stance from any discipline open to him. At 4th, 7th, 11th, and 13th levels, he can select an additional stance to learn. The maximum level of stances gained through monk of the silver fist levels is limited by those listed in Table: Archetype Maneuver Progression. Unlike maneuvers, stances are not expended and the monk of the silver fist does not have to ready them. All the stances he knows are available to him at all times, and he can change the stance he is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, a monk of the silver fist cannot learn a new stance at higher levels in place of one he already knows.',
    },

    // ── Gauntlet Strike (replaces Unarmed Strike) ──
    {
      name: 'Gauntlet Strike',
      level: 1,
      description:
        'At 1st level, the monk of the silver fist gains Improved Unarmed Strike and Weapon Focus (gauntlet) as bonus feats. His gauntlet damage increases as he gains levels, dealing damage according to the following table. Small: 1d4 (1st-4th), 1d6 (5th-9th), 1d8 (10th-14th), 1d10 (15th-19th), 2d6 (20th). Medium: 1d6 (1st-4th), 1d8 (5th-9th), 1d10 (10th-14th), 2d6 (15th-19th), 2d8 (20th). Large: 1d8 (1st-4th), 2d6 (5th-9th), 2d8 (10th-14th), 3d6 (15th-19th), 3d8 (20th). This ability replaces unarmed strike.',
    },

    // ── Shielding Fist ──
    {
      name: 'Shielding Fist',
      level: 1,
      description:
        'At 1st level, while wearing gauntlets, the monk of the silver fist gains a +1 shield bonus to his AC and treats gauntlets as bucklers. Enchanted gauntlets apply their enhancement bonus to attacks, damage, and this shield bonus. The monk of the silver fist can wear gauntlets and use them as a shield without losing the benefit of his AC bonus class feature.',
    },

    // ── Bonus Feats (alters Bonus Feats) ──
    {
      name: 'Bonus Feats',
      level: 1,
      description:
        'At 1st level, a monk of the silver fist may select Improved Shield Bash, Buckler Bash, or Mithral Current Style as a bonus feat. At 6th level, the monk of the silver fist may select Bodyguard or Defensive Expertise as a bonus feat. At 10th level, the monk of the silver fist may select Discipline Mastery or In Harm\'s Way as a bonus feat. This ability alters bonus feats, but does not cause the monk of the silver fist archetype to be incompatible with other archetypes that alter the bonus feats class feature.',
    },

    // ── Mark of the Silver Fist ──
    {
      name: 'Mark of the Silver Fist',
      level: 4,
      description:
        'At 4th level, a monk of the silver fist can spend 1 ki point as a swift action to apply a special mark to one ally within 30 feet. For a number of rounds equal to 1 + the monk of the silver fist\'s initiation modifier, the marked ally gains a +4 circumstance bonus to AC, and any enemy that attacks the marked ally provokes an attack of opportunity from the monk of the silver fist. Only one mark can be active at a time. At 12th level, the monk of the silver fist can have two marks active simultaneously. At 16th level, the monk of the silver fist can have three marks active simultaneously. This is a supernatural ability.',
    },

    // ── Intercepting Fist (replaces Abundant Step) ──
    {
      name: 'Intercepting Fist',
      level: 12,
      description:
        'At 12th level, whenever an ally is targeted by an attack, the monk of the silver fist can spend 1 ki point as an immediate action to move up to his speed towards that ally. If his movement ends adjacent to the targeted ally, the monk of the silver fist becomes the target of the attack instead. This ability replaces abundant step.',
    },

    // ── Reach of the Silver Fist (replaces Quivering Palm) ──
    {
      name: 'Reach of the Silver Fist',
      level: 15,
      description:
        'At 15th level, when the monk of the silver fist initiates a melee strike targeting one creature, he can spend 1 ki point as a free action to also initiate the strike against a second target within close range (25 feet + 5 feet per 2 monk of the silver fist levels). This additional strike uses the monk of the silver fist\'s gauntlet damage. This ability can only be activated once per strike. This ability replaces quivering palm.',
    },
  ],

  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: ['eternal-guardian', 'iron-tortoise', 'mithral-current'],
    progressionTableKey: 'monk-of-the-silver-fist',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'As a full-round action, the monk of the silver fist moves up to his speed and grants an adjacent ally an insight bonus to AC and saving throws equal to his initiation modifier for one round. He recovers a number of expended maneuvers equal to his initiation modifier (minimum 2).',
      },
      secondary: {
        type: 'custom',
        description: 'As a standard action, recover a single expended maneuver.',
      },
    },
  },

  source: 'Path of War: Expanded',
};
