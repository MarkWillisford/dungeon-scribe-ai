import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// Path of War standard archetype maneuver progression (20 rows)
// [maneuversKnown, maneuversReadied, stancesKnown]
export const RUBATO_PROGRESSION: InitiatingProgressionTable = [
  [3, 3, 1], // Level 1
  [4, 3, 1], // Level 2
  [5, 3, 1], // Level 3
  [6, 4, 2], // Level 4
  [6, 4, 2], // Level 5
  [6, 4, 2], // Level 6
  [7, 4, 3], // Level 7
  [7, 4, 3], // Level 8
  [8, 4, 3], // Level 9
  [8, 5, 3], // Level 10
  [9, 5, 4], // Level 11
  [9, 5, 4], // Level 12
  [10, 5, 5], // Level 13
  [11, 5, 5], // Level 14
  [11, 6, 5], // Level 15
  [12, 6, 5], // Level 16
  [13, 6, 5], // Level 17
  [14, 6, 5], // Level 18
  [14, 6, 5], // Level 19
  [15, 7, 5], // Level 20
];

export const RUBATO_ARCHETYPE: ArchetypeData = {
  name: 'Rubato',
  className: 'Bard',
  description:
    'Some bards tap into the Primal Song and channel it in both life and war. These rubati blend martial prowess with bardic performance, wielding the rhythms of combat as deftly as any melody. Through their connection to the Primal Song, rubati learn martial maneuvers drawn from the disciplines of Elemental Flux, Golden Lion, and Mithral Current, replacing their spellcasting with martial initiating and transforming their bardic performances into powerful combat-enhancing techniques fueled by tempo.',
  replacedFeatures: [
    'Spells',
    'Cantrips',
    'Countersong',
    'Distraction',
    'Fascinate',
    'Suggestion',
    'Dirge of Doom',
    'Inspire Greatness',
    'Frightening Tune',
    'Inspire Heroics',
    'Mass Suggestion',
    'Deadly Performance',
    'Versatile Performance',
  ],
  modifiedFeatures: [],
  newFeatures: [
    // ── Maneuvers and Stances ──
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A rubato begins his career with knowledge of three martial maneuvers from the following disciplines: Elemental Flux, Golden Lion, and Mithral Current. If one of his selected disciplines' associated skills is not on his class skill list, he gains it as a class skill. A maneuver usable by rubati is considered an extraordinary ability unless otherwise noted in it or its discipline's description. A rubato's maneuvers are not affected by spell resistance, and he does not provoke attacks of opportunity when he initiates one. The rubato learns additional maneuvers at higher levels, as indicated on Table: Archetype Maneuver Progression. The maximum level of maneuvers gained through rubato levels is limited by those listed in that table as well, although this restriction does not apply to maneuvers added to his maneuvers known through other methods, such as prestige classes or the Advanced Study feat. A rubato must meet a maneuver's prerequisite to learn it. Upon reaching 4th level, and at every even numbered initiator level thereafter (6th, 8th, 10th, and so on), the rubato can choose to learn a new maneuver in place of one he already knows. In effect, he loses the old maneuver in exchange for the new one. He can choose a new maneuver of any level he likes, as long as he observes the restriction on the highest-level maneuvers he knows; the rubato need not replace the old maneuver with a maneuver of the same level. He can swap only a single maneuver at any given level. A rubato's initiation modifier is Charisma, and each rubato level is counted as a full initiator level. This ability replaces spells.",
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        "A rubato can ready all three of his maneuvers known at 1st level, and as he advances in level and learns more maneuvers, he is able to ready more, but must still choose which maneuvers to ready. A rubato must always ready his maximum number of maneuvers readied. He readies his maneuvers by practicing weapon drills or communing with the primal rhythm for ten minutes. The maneuvers he chooses remain readied until he decides to practice again and change them. The rubato does not need to sleep or rest for any long period of time in order to ready his maneuvers; any time he spends ten minutes practicing, he can change his readied maneuvers. A rubato begins an encounter with all his readied maneuvers unexpended, regardless of how many times he might have already used them since he chose them. When he initiates a maneuver, he expends it for the current encounter, so each of his readied maneuvers can be used once per encounter (unless he recovers them, as described below). A rubato can recover a single expended maneuver as a swift action by spending 2 points of tempo, or as a free action by spending 3 points of tempo. A rubato cannot recover a maneuver in the same round in which it was initiated.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'A rubato begins his career with knowledge of one stance from any discipline open to rubati. At 4th, 7th, 11th, and 13th levels, he can select an additional stance to learn. The maximum level of stances gained through rubato levels is limited by those listed in Table: Archetype Maneuver Progression. Unlike maneuvers, stances are not expended and the rubato does not have to ready them. All the stances he knows are available to him at all times, and he can change the stance he is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, a rubato cannot learn a new stance at higher levels in place of one he already knows.',
    },

    // ── Tempo ──
    {
      name: 'Tempo',
      level: 1,
      description:
        "When a rubato enters combat, he gains a tempo pool equal to 1/2 his class level (minimum 1) + his rubato initiation modifier at the start of his first turn. At the start of each of his turns, the rubato gains one point of tempo. Outside combat, a rubato has no tempo to spend. His tempo pool persists for one minute after the last enemy combatant is defeated, after which it dissipates. A rubato can spend tempo as if it were animus when augmenting maneuvers or using feats such as Animus Healing. This ability replaces cantrips.",
    },

    // ── Bardic Performance Replacements ──
    {
      name: 'Counterpoint',
      level: 1,
      description:
        "At 1st level, a rubato learns to weave his performance into the martial techniques of his allies, bolstering their defensive maneuvers. Allies who can perceive the rubato's performance gain a bonus equal to 1/2 the rubato's class level (minimum one) on all non-damage rolls made as part of initiating counters. This ability replaces countersong.",
    },
    {
      name: 'Metronome',
      level: 1,
      description:
        "At 1st level, a rubato can use his performance to regulate his internal rhythm, fueling his tempo pool. While maintaining this performance, the rubato adds one point of tempo to his tempo pool at the beginning of each of his turns (in addition to the one point he gains normally). At 5th level and every five levels thereafter (10th, 15th, 20th), the additional tempo gained per round from metronome increases by 1. This ability replaces distraction.",
    },
    {
      name: 'Dissonance',
      level: 1,
      description:
        "At 1st level, a rubato can use his performance to disrupt the focus and coordination of his enemies. Enemies within 30 feet who can perceive the rubato's performance must succeed on a Will save (DC 10 + 1/2 the rubato's class level + his rubato initiation modifier) or take a -1 penalty on all non-damage rolls made as part of their attacks or strikes. A creature that successfully saves against a rubato's dissonance is immune to that rubato's dissonance for the remainder of the encounter. The penalty increases by -1 at 5th level and every five levels thereafter (10th, 15th, 20th). This ability replaces fascinate.",
    },
    {
      name: 'Fortissimo',
      level: 6,
      description:
        'At 6th level, a rubato can channel a surge of tempo into a devastating strike. By spending 3 rounds of bardic performance and 2 points of tempo, when initiating a strike that requires a standard action, the rubato can increase the damage (including ability damage, if appropriate) dealt by that strike by 50%. This ability is activated after the attack roll is made but before damage is rolled. The rubato must wait 3 rounds before using fortissimo again. Fortissimo can be activated while the rubato is maintaining another bardic performance. This ability replaces suggestion.',
    },
    {
      name: 'Canon',
      level: 8,
      description:
        "At 8th level, a rubato can use his performance to synchronize the martial efforts of his allies. While maintaining this performance, when an affected ally initiates a maneuver, that ally can recover an expended maneuver of a different type. Each ally can benefit from canon no more than once per round. This ability replaces dirge of doom.",
    },
    {
      name: 'Accelerando',
      level: 9,
      description:
        'At 9th level, a rubato can use his performance to quicken the movements of his allies. Affected allies gain the benefits of the haste spell. This performance costs two rounds of bardic performance per round of maintenance. This ability replaces inspire greatness.',
    },
    {
      name: 'Crescendo',
      level: 14,
      description:
        'At 14th level, a rubato can channel an overwhelming surge of tempo into a single strike. By spending 4 rounds of bardic performance and 4 points of tempo, when initiating a strike that requires a standard action, the rubato can maximize the damage (including ability damage, if appropriate) dealt by that strike. Treat all damage dice rolled as part of the strike as though they had achieved the maximum result. Crescendo can be activated while the rubato is maintaining another bardic performance. This ability replaces frightening tune.',
    },
    {
      name: 'Harmonize',
      level: 15,
      description:
        "At 15th level, a rubato can use his performance to bring his allies into perfect martial harmony. By spending 2 tempo per round (rather than rounds of bardic performance), affected allies gain an insight bonus equal to the rubato's initiation modifier to their AC, on saving throws, and on skill checks made as part of initiating maneuvers. This bonus increases by +2 during any round in which the rubato recovers one or more maneuvers. This ability replaces inspire heroics.",
    },
    {
      name: 'Con Moto',
      level: 18,
      description:
        'At 18th level, a rubato can use his performance to grant his allies bursts of movement in the heat of battle. By spending 2 tempo as a free action (usable on an ally\'s turn), an affected ally may move up to 15 feet as part of initiating a maneuver, or increase existing movement granted by a maneuver by 15 feet. In addition, the save DC of that maneuver increases by 2. This ability replaces mass suggestion.',
    },
    {
      name: 'Fugue',
      level: 20,
      description:
        'At 20th level, a rubato has achieved such mastery of the Primal Song that he can maintain multiple performances simultaneously. The rubato may activate two bardic performances with the same action, paying any associated costs for each separately. Performances that already function while maintaining other performances (such as fortissimo and crescendo) do not count against this limit. This ability replaces deadly performance.',
    },

    // ── Martial Performer ──
    {
      name: 'Martial Performer',
      level: 2,
      description:
        "At 2nd level, a rubato learns to blend his musical talent with his martial training. The rubato can make Perform checks in place of checks with his disciplines' associated skills. This substitution only applies to skills associated with disciplines he has access to from his rubato levels (including disciplines acquired through traits or martial traditions). This ability replaces versatile performance.",
    },
  ],
  initiating: {
    type: 'Martial',
    initiatingAbility: 'CHA',
    ilProgression: 'full',
    disciplines: ['Elemental Flux', 'Golden Lion', 'Mithral Current'],
    progressionTableKey: 'RUBATO_PROGRESSION',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'A rubato can recover a single expended maneuver as a swift action by spending 2 points of tempo, or as a free action by spending 3 points of tempo. A rubato cannot recover a maneuver in the same round in which it was initiated.',
      },
    },
  },
  source: 'Path of War: Expanded',
};
