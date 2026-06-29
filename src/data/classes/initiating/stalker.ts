// Stalker — Path of War base initiating class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/classes/stalker/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per level 1-20
export const STALKER_PROGRESSION: InitiatingProgressionTable = [
  [6, 4, 1], // 1
  [7, 4, 2], // 2
  [8, 5, 2], // 3
  [9, 5, 2], // 4
  [10, 6, 3], // 5
  [11, 6, 3], // 6
  [12, 6, 3], // 7
  [13, 7, 3], // 8
  [14, 7, 4], // 9
  [15, 8, 4], // 10
  [16, 8, 5], // 11
  [16, 8, 5], // 12
  [17, 9, 5], // 13
  [17, 9, 5], // 14
  [18, 10, 6], // 15
  [18, 10, 6], // 16
  [19, 10, 6], // 17
  [19, 11, 7], // 18
  [20, 11, 7], // 19
  [21, 12, 7], // 20
];

export const STALKER_CLASS: ExpandedClassData = {
  name: 'Stalker',
  category: 'Path of War',
  maxLevel: 20,
  hitDie: 8,
  skillRanksPerLevel: 6,
  classSkills: [
    'Acrobatics',
    'Appraise',
    'Bluff',
    'Climb',
    'Craft',
    'Disable Device',
    'Disguise',
    'Escape Artist',
    'Heal',
    'Intimidate',
    'Knowledge (local)',
    'Knowledge (martial)',
    'Knowledge (nature)',
    'Knowledge (religion)',
    'Perception',
    'Profession',
    'Sense Motive',
    'Stealth',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Good,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  armorProficiencies: ['Light armor'],
  startingWealth: '4d6 × 10 gp',
  alignment: 'Any',
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A stalker begins his career with knowledge of six martial maneuvers. The disciplines available to him are Broken Blade, Solar Wind, Steel Serpent, Thrashing Dragon, Veiled Moon, and either Riven Hourglass or Tempest Gale (chosen at character creation). The stalker gains the associated skill of each of his chosen disciplines as a class skill if it is not already on his class skill list. Once he knows a maneuver, he must ready it before he can use it (see Maneuvers Readied). A maneuver usable by stalkers is considered an extraordinary ability unless otherwise noted in its description. A stalker's maneuvers are not affected by spell resistance, and he does not provoke attacks of opportunity when he initiates one. He learns additional maneuvers at higher levels, as shown on the class table. The stalker must meet a maneuver's prerequisite to learn it. A stalker adds his Wisdom modifier to any d20 rolls made as part of a maneuver (the stalker's initiation modifier is Wisdom). Upon reaching 4th level, and at every even numbered stalker level after that, he can choose to learn a new maneuver in place of one he already knows. In effect, the stalker loses the old maneuver in exchange for the new one. The stalker need not replace the old maneuver with a maneuver of the same level. He can choose a new maneuver of any level he likes, as long as he observes his restriction on the highest-level maneuvers he knows.",
      effects: [],
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A stalker can ready four of his six starting maneuvers, but as he advances in level and learns more maneuvers, he must choose which maneuvers to ready. He readies his maneuvers by meditating and focusing his ki for 10 minutes. The maneuvers he chooses remain readied until he decides to repeat this again and change them. Stalkers do not need to sleep or rest for any long period of time to ready their maneuvers; any time he spends 10 minutes in meditation, he can change his readied maneuvers. He may not ready any individual maneuver more than once. He begins an encounter with all readied maneuvers unexpended, regardless of how many times he may have already used them since he chose them. When the stalker initiates a maneuver, he expends it for the current encounter, so each of his readied maneuver can be used once per encounter (until he recovers them).',
      effects: [],
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'Stalkers begin play with knowledge of one stance from any discipline open to stalkers. At the indicated levels (see class table), the stalker selects an additional new stance. Unlike maneuvers, stances are not expended and he does not have to ready them. All the stances he knows are available to him at all times, and he can change the stance he is currently using as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance description. Unlike with maneuvers, the stalker cannot learn a new stance at higher levels in place of one he already knows.',
      effects: [],
    },
    {
      name: 'Ki Pool',
      level: 1,
      id: 'ki-pool',
      shortDescription: 'Supernatural energy pool (1/2 level + WIS mod points)',
      description:
        "At 1st level, a stalker gains a pool of ki points, supernatural energy he can use to accomplish amazing feats. The number of points in the stalker's ki pool is equal to 1/2 his stalker level + his Wisdom modifier (minimum of 1). At 1st level, the stalker may spend 1 point of ki to grant himself a +4 insight bonus to a single Perception or Sense Motive check as an immediate action, as he uses his ki to feel out the vibrations of others and their hidden motives. At 5th level, the stalker may spend one point of ki as a swift action to read his target opponent, and may apply his deadly strike to all martial strikes initiated by the stalker for a number of rounds equal to his stalker initiation modifier against this target. Successful critical hits during this time extend the duration by one round (no more than one extension per round). At 7th level, the stalker may spend 1 point from his ki pool to gain a +4 insight bonus on a saving throw as an immediate action. At 9th level, the stalker may delve into his subconscious in battle and remember key lessons from his training. The stalker gains moments of martial insight a number of times per day equal to his Wisdom modifier. By spending one ki point as a swift action, he can trade one readied maneuver for another known maneuver of the same level or lower. The new maneuver is immediately readied and accessible for use, and its recovery follows normal rules. The ki pool is replenished each day after 8 hours of rest and meditation; these hours do not need to be consecutive. If the stalker possesses levels in another class that grants points to a ki pool, stalker levels stack with the levels of that class to determine the total number of ki points in the combined pool, but only one ability score modifier is added to the total.",
      resourcePool: {
        id: 'stalker_ki',
        name: 'Ki Pool',
        rechargeOn: 'rest',
        maxFormula: 'max(1, floor(stalkerLevel / 2) + wisMod)',
        restRecoveryMode: 'full',
      },
      effects: [],
    },
    {
      name: 'Deadly Strike',
      level: 1,
      description:
        'The stalker is capable of maximizing his deadliness whenever he lands a critical blow upon his opponent, opening his target up for future punishment as the stalker becomes attuned to his prey. Whenever the stalker scores a successful critical hit against a creature, his deadly strike ability activates against that creature for a number of rounds equal to his stalker initiation modifier (Wisdom). While deadly strike is active against a target, the stalker inflicts bonus damage equal to 1d6 on all attacks against that creature. This damage increases by 1d6 at every four levels after 1st (2d6 at 5th, 3d6 at 9th, 4d6 at 13th, 5d6 at 17th). When the stalker scores a critical hit, this extra damage is not multiplied, it is simply added to the damage. If the stalker scores a successful critical hit during the time his deadly strike is active, the duration of this ability is extended by one round (no more than one extension can be made per round). Weapons with a x3 critical multiplier increase the deadly strike damage dice to d8s, and weapons with a x4 critical multiplier increase the dice to d10s. Deadly strike may not be used with weapons that inflict non-lethal damage. The stalker must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. Creatures immune to critical hits or precision damage cannot be targeted by a deadly strike. A stalker cannot deadly strike while attacking a creature who has concealment. Ranged attacks only count within 30 feet.',
      effects: [],
    },
    {
      name: 'Stalker Art',
      level: 1,
      description:
        "As a stalker gains experience, he learns a number of arts that aid him and confound his foes. Starting at 1st level, a stalker gains one stalker art. He gains an additional art at 3rd level and new arts every four class levels attained after 3rd level (7th, 11th, 15th, and 19th level). A stalker cannot select an individual art more than once unless otherwise noted. Arts marked (Su) are supernatural abilities, (Ex) are extraordinary abilities. Available stalker arts include: Advanced Study, Alacrity, Bloodseeker, Combat Art, Combat Precognition, Concealed Recovery, Critical Edge, Critical Training, Deadly Ambush, Deadly Insight, Deadly Recovery, Evasion, Fear Monger, Ki Vampirism, Killer's Implements, Lord of War, Mind Bending, Monastic Weapon Training, Murderous Insight, Obfuscation, Phantom Reach, Precocious Step, Rogue Talent, and Sniper's Tools.",
      effects: [],
    },
    {
      name: 'Stalker Art: Advanced Study',
      level: 1,
      description:
        "The stalker's knowledge of the martial disciplines expands, imparting new maneuvers as if the character had taken the Advanced Study feat. The stalker must meet the prerequisites of the Advanced Study feat. This art may be selected multiple times.",
      effects: [],
    },
    {
      name: 'Stalker Art: Alacrity',
      level: 1,
      id: 'stalker-art-alacrity',
      shortDescription: 'Swift, 1 ki — +30 ft. speed for 1 minute (fatigue after)',
      activationMode: 'toggle',
      description:
        'The stalker gains a +10-ft. enhancement bonus to his base speed and he may add his stalker initiation modifier to Acrobatics checks, due to his nimble and finely honed body. These benefits apply only when he is wearing no armor or light armor, not using a shield, and not carrying a medium or heavy load. As a swift action, the stalker may spend one point of ki to increase the enhancement bonus to an additional 30 feet for one minute, becoming fatigued afterward for 1d4 minutes.',
      effects: [],
    },
    {
      name: 'Stalker Art: Bloodseeker',
      level: 1,
      description: 'The stalker gains the scent special ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Combat Art',
      level: 1,
      description:
        'A stalker that selects this art gains a bonus combat feat. The stalker must meet the prerequisites of the selected feat. This art may be selected multiple times, each time granting a new bonus combat feat.',
      effects: [],
    },
    {
      name: 'Stalker Art: Combat Precognition',
      level: 1,
      id: 'stalker-art-combat-precognition',
      shortDescription: 'Immediate, 1 ki — attackers roll twice, take worse result (1 round)',
      activationMode: 'toggle',
      description:
        "Spending one point of ki as an immediate action forces opponents who attack the stalker to roll their attack rolls twice and take the worse of the two results due to the stalker's precognitive abilities. This art lasts for one round. This is a supernatural ability.",
      effects: [],
    },
    {
      name: 'Stalker Art: Concealed Recovery',
      level: 1,
      description:
        'The stalker may utilize his ki-fueled attunement to the world around him to defend himself while he centers his spirit for martial maneuver recovery. When recovering maneuvers (either as a full-round action or as a standard action), the stalker enjoys concealment (with a 20% miss chance). At 11th level, this improves to total concealment (50% miss chance). This is a supernatural ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Critical Edge',
      level: 1,
      description:
        "The stalker's deadly efficiency in combat allows him to increase the critical threat range of any weapon he wields by +1. This bonus is applied after abilities such as Improved Critical or the keen weapon property and cannot be doubled. This is an extraordinary ability.",
      effects: [],
    },
    {
      name: 'Stalker Art: Critical Training',
      level: 1,
      description:
        "The stalker's deadly strike damage increases by an additional damage die, and he may treat his class level as his base attack bonus for the purposes of qualifying for critical feats. This is an extraordinary ability.",
      effects: [],
    },
    {
      name: 'Stalker Art: Deadly Ambush',
      level: 1,
      description:
        'The stalker may now use his deadly strike class feature against flat-footed targets and targets that are being denied their Dexterity modifier to AC, as well as on critical hits and when focusing his ki to read his opponent. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Deadly Insight',
      level: 1,
      description:
        "The stalker may use his deadly strikes in conjunction with his combat insight to read his opponent's defenses and effortlessly attack beyond his foe's guard. The stalker spends one ki point as a swift action to read a target opponent and apply deadly strike damage to all attacks against that target for a number of rounds equal to his stalker initiation modifier. Critical hits extend the duration by one round (maximum one extension per round). This is a supernatural ability.",
      effects: [],
    },
    {
      name: 'Stalker Art: Deadly Recovery',
      level: 1,
      description:
        'While recovering maneuvers as a full-round action, the stalker gains the use of the Combat Reflexes feat (using his stalker initiation modifier in place of his Dexterity modifier for determining the number of additional attacks of opportunity). He may also add his deadly strike damage to any attacks of opportunity he makes while he is recovering maneuvers. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Evasion',
      level: 1,
      description:
        'A stalker can avoid damage from many area-effect attacks by channeling his ki into his reflexes. If a stalker makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if the stalker is wearing light armor or no armor. A helpless stalker does not gain the benefit of evasion. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Fear Monger',
      level: 1,
      description:
        'The stalker gains Cornugon Smash and Dazzling Display as bonus feats. The stalker must meet the prerequisites of these feats. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Ki Vampirism',
      level: 11,
      id: 'stalker-art-ki-vampirism',
      shortDescription: 'Immediate on kill/crit — regain 1 ki (3 + WIS mod/day)',
      description:
        'If the stalker reduces a living foe to 0 or fewer hit points with a martial strike or scores a successful critical hit, he may regain 1 point of ki as an immediate action. The stalker may use this ability a number of times per day equal to 3 + his stalker initiation modifier. This ability does not function against constructs, undead, or creatures with fewer than 1/2 HD. This is a supernatural ability. Minimum stalker level 11.',
      resourcePool: {
        id: 'ki_vampirism',
        name: 'Ki Vampirism',
        rechargeOn: 'rest',
        maxFormula: '3 + wisMod',
        restRecoveryMode: 'full',
      },
      effects: [],
    },
    {
      name: "Stalker Art: Killer's Implements",
      level: 1,
      description:
        'The stalker chooses a melee weapon he is proficient with, and gains the benefits of the Weapon Finesse and Deadly Agility feats when using that weapon, even if that weapon could not normally be used with those feats. At 6th level and every five levels thereafter, he may choose an additional weapon. The stalker can change his chosen weapons by spending ten minutes in practice. This art counts as both Weapon Finesse and Deadly Agility for the purposes of meeting feat prerequisites. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Lord of War',
      level: 1,
      description:
        'The stalker adds Scarlet Throne or Piercing Thunder to his list of available disciplines. He gains the associated skill as a class skill and a +2 competence bonus on checks with that skill. This art may be selected once per discipline. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Mind Bending',
      level: 5,
      description:
        "As a standard action, the stalker spends one ki point and makes eye contact with the target creature, using his ki to influence the target's thoughts. The target must make a Will save (DC 13 + the stalker's initiation modifier) or be subject to a charm monster spell. This is a supernatural ability. Minimum stalker level 5.",
      effects: [],
    },
    {
      name: 'Stalker Art: Monastic Weapon Training',
      level: 1,
      description:
        'The stalker gains the Improved Unarmed Strike feat and gains proficiency with all weapons that are considered monk weapons.',
      effects: [],
    },
    {
      name: 'Stalker Art: Murderous Insight',
      level: 1,
      id: 'stalker-art-murderous-insight',
      shortDescription:
        'Swift, 1 ki — roll twice on one attack/round, take higher (1 + WIS mod rounds)',
      activationMode: 'toggle',
      description:
        'The stalker designates his combat senses towards ending the lives of his opponents and gains momentary flashes of insight in how to best accomplish this. The stalker can activate this ability by spending one point of ki as a swift action; for a number of rounds equal to 1 + his stalker initiation modifier, he can roll twice on a single attack roll each round and take the higher value. This is a supernatural ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Obfuscation',
      level: 7,
      id: 'stalker-art-obfuscation',
      shortDescription: 'Full-round, 1+ ki — psychic cloud mind field for WIS mod minutes',
      activationMode: 'toggle',
      description:
        "The stalker knows how to maintain a quiet, innocuous attitude as if he were nothing more than a part of the scenery. The stalker spends a point of ki as a full-round action to activate his obfuscation, and as long as he remains in a non-threatening posture (carrying no weapons in hand and moving at half his base speed), the stalker radiates a psychic field that causes others to ignore his presence for a number of minutes equal to his stalker initiation modifier. Subjects who would normally react to the stalker's presence must make a Will save (DC 15 + his stalker initiation modifier) or be under the influence of the cloud mind psionic power. The DC increases by +1 for every 2 additional ki points spent (maximum increase equal to his initiation modifier). This is a supernatural ability. Minimum stalker level 7.",
      effects: [],
    },
    {
      name: 'Stalker Art: Phantom Reach',
      level: 1,
      description:
        'The stalker is capable of extending the reach of melee range martial strikes by infusing ki into the maneuver, causing a phantom echo to rush towards the enemy and initiate the attack. The stalker can activate this ability by spending one point of ki as a swift action; if he does, the next melee martial strike he initiates this turn is treated as if it instead had a range of close (25 ft. + 5 ft. per 2 levels). Strikes with range greater than melee do not function with this art. This is a supernatural ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Precocious Step',
      level: 1,
      id: 'stalker-art-precocious-step',
      shortDescription: 'Swift, 1 ki — move without provoking AoO for WIS mod rounds',
      activationMode: 'toggle',
      description:
        'By relying on his combat insight to steer him effortlessly through a dangerous spot, the stalker may spend one point of ki as a swift action and move without provoking attacks of opportunity for a number of rounds equal to his stalker initiation modifier (minimum 1). This is a supernatural ability.',
      effects: [],
    },
    {
      name: 'Stalker Art: Rogue Talent',
      level: 1,
      description:
        "Some stalkers have learned techniques that are similar to those of the rogue, and may select rogue talents instead of stalker arts. Stalkers may not learn advanced talents, nor can they gain the Ki Pool or Underhanded rogue talents. Talents that apply to a rogue's sneak attack apply to a stalker's deadly strike ability.",
      effects: [],
    },
    {
      name: "Stalker Art: Sniper's Tools",
      level: 1,
      description:
        'The stalker chooses a ranged weapon he is proficient with, and gains the benefits of the Point Blank Shot and Precise Shot feats when using that weapon. At 6th level and every five levels thereafter, he may choose an additional weapon. The stalker can change his chosen weapons by spending ten minutes in practice. This art counts as both Point Blank Shot and Precise Shot for the purposes of meeting feat prerequisites. This is an extraordinary ability.',
      effects: [],
    },
    {
      name: 'Stalker Art',
      level: 3,
      description: 'The stalker gains an additional stalker art.',
      effects: [],
    },
    {
      name: 'Stalker Art',
      level: 7,
      description: 'The stalker gains an additional stalker art.',
      effects: [],
    },
    {
      name: 'Stalker Art',
      level: 11,
      description: 'The stalker gains an additional stalker art.',
      effects: [],
    },
    {
      name: 'Stalker Art',
      level: 15,
      description: 'The stalker gains an additional stalker art.',
      effects: [],
    },
    {
      name: 'Stalker Art',
      level: 19,
      description: 'The stalker gains an additional stalker art.',
      effects: [],
    },
    {
      name: 'Combat Insight',
      level: 2,
      description:
        'At 2nd level, the keen senses and awareness of the stalker deliver him a sort of sixth sense. This insight performs as an intuitive alarm, alerting him of danger. The stalker adds his stalker initiation modifier (Wisdom) to his initiative score and to Reflex saving throws as an insight bonus.',
      effects: [],
    },
    {
      name: 'Dodge Bonus',
      level: 2,
      description:
        "At 2nd level, the stalker's heightened perception of danger allows him to defend himself from attacks as they are made against him, anticipating the attacks as they come. A stalker gains a +1 dodge bonus to his Armor Class at 2nd level, which improves by an additional +1 every four stalker levels thereafter (+2 at 6th, +3 at 10th, +4 at 14th, +5 at 18th). When recovering maneuvers as a full-round action, the stalker adds his stalker initiation modifier to his AC as an additional dodge bonus.",
      effects: [],
    },
    {
      name: 'Combat Insight: Uncanny Dodge',
      level: 4,
      description:
        'At 4th level, the heightened perceptions of the stalker allow him to know when his prey could get the jump on him, granting him the uncanny dodge class feature as the rogue ability of the same name. The stalker cannot be caught flat-footed, nor does he lose his Dexterity bonus to AC if the attacker is invisible. He still loses his Dexterity bonus to AC if immobilized or if an opponent successfully uses the feint action against him.',
      effects: [],
    },
    {
      name: 'Deadly Strike Increase',
      level: 5,
      description: "The stalker's deadly strike damage increases to 2d6.",
      effects: [],
    },
    {
      name: 'Blending',
      level: 6,
      description:
        "At 6th level, the stalker's natural attunement to the flow of ki in other people grants him insight in reading others and avoiding their notice. The character gains a +2 insight bonus to Perception, Sense Motive, and Stealth checks. This is a supernatural ability.",
      effects: [],
    },
    {
      name: 'Dodge Bonus Increase',
      level: 6,
      description: "The stalker's dodge bonus to AC increases to +2.",
      effects: [],
    },
    {
      name: 'Combat Insight: Critical Hits',
      level: 8,
      description:
        "At 8th level, the killer's instinct in the stalker is honed to a razor's fine edge, allowing him to add his stalker initiation modifier as a competence bonus to confirm critical hits. This ability counts as if the character possessed the Critical Focus feat, and for the purposes of taking critical feats that the character qualifies for. If the character already possesses the Critical Focus feat, he loses it and may select a replacement critical feat for which he qualifies.",
      effects: [],
    },
    {
      name: 'Deadly Strike Increase',
      level: 9,
      description: "The stalker's deadly strike damage increases to 3d6.",
      effects: [],
    },
    {
      name: 'Dual Strike',
      level: 10,
      id: 'dual-strike',
      shortDescription:
        'Full-round — initiate two strikes simultaneously (uses/day scale with level)',
      description:
        "Once per day at 10th level, the stalker's deadly skill in combat improves, allowing him to initiate two martial strikes as a full-round action. The strikes the stalker initiates must have an initiation action of one standard action, and he must have both strikes readied. Boosts may not be applied to a dual strike due to the need to concentrate on two separate martial movements. When a dual strike is used, the action must be declared beforehand, and both strikes are resolved separately and are expended. At 14th level, the stalker may use dual strike 2/day, and at 18th level, 3/day.",
      resourcePool: {
        id: 'dual_strike',
        name: 'Dual Strike',
        rechargeOn: 'rest',
        maxFormula: 'floor((stalkerLevel - 6) / 4)',
        restRecoveryMode: 'full',
      },
      effects: [],
    },
    {
      name: 'Dodge Bonus Increase',
      level: 10,
      description: "The stalker's dodge bonus to AC increases to +3.",
      effects: [],
    },
    {
      name: 'Combat Insight: Ki Recovery',
      level: 12,
      description:
        "At 12th level, the stalker's insight allows him to funnel the ki of his foes into his form with his deadly attacks. The character can recover a single expended maneuver when he scores a successful critical hit against a living creature. This ability does not function against constructs, undead, or creatures with fewer than 1/2 HD. This is a supernatural ability.",
      effects: [],
    },
    {
      name: 'Deadly Strike Increase',
      level: 13,
      description: "The stalker's deadly strike damage increases to 4d6.",
      effects: [],
    },
    {
      name: 'Dual Strike Increase',
      level: 14,
      description: 'The stalker may use dual strike 2/day.',
      effects: [],
    },
    {
      name: 'Dodge Bonus Increase',
      level: 14,
      description: "The stalker's dodge bonus to AC increases to +4.",
      effects: [],
    },
    {
      name: 'Improved Blending',
      level: 16,
      description:
        "At 16th level, the stalker's blending ability improves, and the character is permanently under the effects of a pass without trace spell. This is a supernatural ability.",
      effects: [],
    },
    {
      name: 'Deadly Strike Increase',
      level: 17,
      description: "The stalker's deadly strike damage increases to 5d6.",
      effects: [],
    },
    {
      name: 'Combat Insight: Blindsight',
      level: 18,
      description:
        'At 18th level, the heightened precognitive abilities of the stalker manifest in his ability to sense things around him that others cannot, granting him blindsight with a range of 30 feet. This is a supernatural ability.',
      effects: [],
    },
    {
      name: 'Dual Strike Increase',
      level: 18,
      description: 'The stalker may use dual strike 3/day.',
      effects: [],
    },
    {
      name: 'Dodge Bonus Increase',
      level: 18,
      description: "The stalker's dodge bonus to AC increases to +5.",
      effects: [],
    },
    {
      name: 'Retributive Ki',
      level: 20,
      description:
        "At 20th level, the stalker's mystical ki power allows for him to generate a powerful burst of energy to gain retribution on those who would injure him. When the stalker is harmed by an attack, spell, or ability of an enemy, as an immediate action he may spend two ki points to initiate a martial strike that he has readied (with an initiation action of one standard action) in retaliation against that attack. He uses the range of the attacker's ability as the range of his strike, creating a phantom echo of himself with his ki (as with the Phantom Reach art) that rushes out and strikes his attacker if they are outside of the stalker's normal reach. Use of this ability expends the strike as normal, and the strike functions as normal otherwise. This is a supernatural ability.",
      effects: [],
    },
  ],
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: [
      'broken-blade',
      'solar-wind',
      'steel-serpent',
      'thrashing-dragon',
      'veiled-moon',
      'riven-hourglass',
      'tempest-gale',
    ],
    progressionTableKey: 'stalker',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'As a full-round action that does not provoke attacks of opportunity, the stalker recovers a number of expended maneuvers equal to his stalker initiation modifier (minimum 2). When recovering in this way, he may move up to his base speed, gains a +4 insight bonus to AC, and the next attack he makes this encounter adds his deadly strike damage if it hits.',
      },
      secondary: {
        type: 'swift_one',
        resourceId: 'stalker_ki',
      },
    },
  },
  source: 'Path of War',
};
