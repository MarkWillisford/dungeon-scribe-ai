import { ArchetypeData } from '../types';

export const SLAYER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Ankou's Shadow
  // ──────────────────────────────────────────────
  {
    name: "Ankou's Shadow",
    className: 'Slayer',
    description:
      "An Ankou's shadow serves as the mortal arm of death itself, mastering the arts of shadow and assassination to eliminate those whose thread of fate has been cut. She blends seamlessly into darkness, striking from the unseen and vanishing before her mark's companions can react.",
    replacedFeatures: ['Track', 'Swift Tracker', 'Quarry', 'Improved Quarry'],
    modifiedFeatures: ['Slayer Talents', 'Studied Target'],
    newFeatures: [
      {
        name: 'Shadow Walk',
        level: 1,
        description:
          "An Ankou's shadow gains a +2 bonus on Stealth checks. This bonus increases by +1 for every 4 levels beyond 1st. She can move at full speed without penalty to Stealth.",
      },
      {
        name: 'Death Mark',
        level: 4,
        description:
          'At 4th level, when the slayer deals sneak attack damage to a creature she has studied, she can spend a move action to mark that creature for death. The marked creature provokes attacks of opportunity from the slayer even when it would not normally do so, for 1 minute.',
      },
      {
        name: 'Inevitable Strike',
        level: 8,
        description:
          'At 8th level, once per day the slayer can declare an Inevitable Strike before making an attack against her studied target. This attack automatically threatens a critical hit (she still confirms normally). At 16th level, she may use this ability twice per day.',
      },
      {
        name: 'Walk Between Worlds',
        level: 12,
        description:
          "At 12th level, the Ankou's shadow can become invisible as a swift action for 1 round per slayer level per day. These rounds need not be consecutive. She can split this duration into multiple uses.",
      },
    ],
    source: 'Pathfinder RPG: Faiths & Philosophies',
  },

  // ──────────────────────────────────────────────
  // 2. Bounty Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Bounty Hunter',
    className: 'Slayer',
    description:
      'A bounty hunter specializes in tracking and capturing targets alive, using nonlethal methods and restraining techniques to bring in her quarry for reward. She excels at pursuit, incapacitation, and negotiating with local authorities rather than outright slaughter.',
    replacedFeatures: ['Swift Tracker', 'Quarry', 'Improved Quarry', 'Master Slayer'],
    modifiedFeatures: ['Studied Target', 'Track'],
    newFeatures: [
      {
        name: 'Capture Alive',
        level: 1,
        description:
          'A bounty hunter takes no penalty on attack rolls when attempting to deal nonlethal damage with lethal weapons against a studied target. She gains a +2 bonus on combat maneuver checks to grapple, disarm, or trip studied targets.',
      },
      {
        name: 'Legal Authority',
        level: 2,
        description:
          'At 2nd level, the bounty hunter gains a writ of authority from a legal organization. She gains a +4 bonus on Diplomacy checks when dealing with local law enforcement and can detain creatures she has defeated in combat without inciting hostility from lawful factions.',
      },
      {
        name: 'Wanted, Dead or Alive',
        level: 6,
        description:
          "At 6th level, when the bounty hunter successfully captures a studied target alive (reduces to 0 hp nonlethally or grapples into submission), she gains a morale bonus on her next day's skill checks and attack rolls equal to the target's CR.",
      },
      {
        name: 'Expert Tracker',
        level: 8,
        description:
          'At 8th level, the bounty hunter can track at full speed without penalty. She also gains the ability to use Survival to follow tracks in urban environments as if using the Stealth skill.',
      },
      {
        name: 'Master Captor',
        level: 14,
        description:
          'At 14th level, once per day the bounty hunter can attempt a special capture maneuver against a studied target at the end of a full-attack action. The target must succeed at a Fortitude save (DC 10 + half slayer level + Strength modifier) or become helpless for 1 round.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Bruiser
  // ──────────────────────────────────────────────
  {
    name: 'Bruiser',
    className: 'Slayer',
    description:
      'A bruiser forgoes the subtlety of conventional slayer training, relying on brute force and intimidation to overwhelm opponents. She trades some of her precision skills for a more straightforward, thuggish combat style that leaves enemies battered and demoralized.',
    replacedFeatures: ['Sneak Attack (some progression)', 'Track', 'Swift Tracker'],
    modifiedFeatures: ['Slayer Talents', 'Studied Target'],
    newFeatures: [
      {
        name: 'Brawler Training',
        level: 1,
        description:
          'A bruiser treats her unarmed strikes as one size category larger for the purpose of damage. She also gains Improved Unarmed Strike as a bonus feat.',
      },
      {
        name: 'Intimidating Study',
        level: 1,
        description:
          "When the bruiser uses studied target, she may also attempt to demoralize that target as a free action (Intimidate check). If successful, the target takes a cumulative –1 penalty on saves versus the bruiser's abilities for the duration of the studied target effect.",
      },
      {
        name: 'Powerful Blow',
        level: 4,
        description:
          'At 4th level, once per round the bruiser can declare a Powerful Blow before making a melee attack. If the attack hits, it deals additional damage equal to half her slayer level. The target must also succeed at a Fortitude save (DC 10 + damage dealt) or be staggered for 1 round.',
      },
      {
        name: 'Terror Strike',
        level: 10,
        description:
          'At 10th level, whenever the bruiser knocks a creature unconscious or kills it in melee, all enemies within 30 feet who witnessed the act must succeed at a Will save (DC 10 + half slayer level + Str modifier) or become shaken for 1d4 rounds.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Cutthroat
  // ──────────────────────────────────────────────
  {
    name: 'Cutthroat',
    className: 'Slayer',
    description:
      'A cutthroat is an urban predator who thrives in the criminal underworld, specializing in swift kills, fast getaways, and the ruthless exploitation of social situations. She sacrifices some tracking ability for superior social manipulation and urban survival skills.',
    replacedFeatures: ['Track', 'Swift Tracker', 'Quarry'],
    modifiedFeatures: ['Slayer Talents', 'Sneak Attack'],
    newFeatures: [
      {
        name: 'Criminal Contact',
        level: 1,
        description:
          'A cutthroat gains a +2 bonus on Bluff, Disguise, and Sleight of Hand checks. At 5th level and every 5 levels thereafter, this bonus increases by +2. She can gather information in a settlement in half the normal time.',
      },
      {
        name: 'Quick Kill',
        level: 2,
        description:
          'At 2nd level, once per day the cutthroat can attempt to kill a studied target instantly. She must be adjacent to a flat-footed or unaware studied target and make a melee attack. If the attack deals damage, the target must succeed at a Fortitude save (DC 10 + sneak attack dice) or be slain outright.',
      },
      {
        name: 'Vanishing Act',
        level: 4,
        description:
          'At 4th level, once per day after making a melee attack as part of a full-attack action, the cutthroat can immediately take a 5-foot step and attempt a Stealth check to hide, even without cover. At 10th level, she can use this ability twice per day.',
      },
      {
        name: 'Underworld Reputation',
        level: 8,
        description:
          "At 8th level, the cutthroat's reputation in criminal circles precedes her. Creatures who recognize her (Knowledge (local) DC 15) must make a Will save (DC 10 + half slayer level + Cha modifier) or be shaken when attacking her.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. Deliverer
  // ──────────────────────────────────────────────
  {
    name: 'Deliverer',
    className: 'Slayer',
    description:
      'A deliverer is a holy assassin devoted to a deity of strife or death, carrying out divine executions against those her god has marked for destruction. She channels divine power through her weapons and uses her faith to enhance the lethality of her studied strikes.',
    replacedFeatures: ['Slayer Talents (specific)', 'Track', 'Swift Tracker'],
    modifiedFeatures: ['Studied Target', 'Sneak Attack'],
    newFeatures: [
      {
        name: 'Smite Evil',
        level: 1,
        description:
          'A deliverer gains the smite evil ability of a paladin, usable once per day. She uses her slayer level as her paladin level for all smite evil effects. At 4th level and every 3 levels thereafter, she gains an additional daily use.',
      },
      {
        name: 'Divine Purpose',
        level: 3,
        description:
          'At 3rd level, the deliverer can designate her studied target as a divine mark once per day. Her sneak attack damage against the divine mark gains the good descriptor and overcomes damage reduction as if it were a good-aligned weapon.',
      },
      {
        name: 'Holy Strike',
        level: 7,
        description:
          "At 7th level, the deliverer's sneak attacks against studied targets deal +2d6 divine damage if the target is evil. This divine damage bypasses all damage reduction.",
      },
      {
        name: 'Celestial Execution',
        level: 14,
        description:
          'At 14th level, once per day the deliverer can make a single devastating attack against a studied evil target. If the attack hits, the target must succeed at a Fortitude save (DC 10 + half slayer level + Wisdom modifier) or be slain. On a successful save, the target takes an additional 10d6 divine damage.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 6. Grave Warden
  // ──────────────────────────────────────────────
  {
    name: 'Grave Warden',
    className: 'Slayer',
    description:
      "A grave warden dedicates her skills to hunting and destroying undead creatures, combining the slayer's martial precision with deep knowledge of undead weaknesses. She studies undead as her favored quarry, learning to exploit the vulnerabilities of the walking dead.",
    replacedFeatures: ['Studied Target (non-undead focus)', 'Track', 'Swift Tracker'],
    modifiedFeatures: ['Studied Target', 'Slayer Talents'],
    newFeatures: [
      {
        name: 'Undead Studied Target',
        level: 1,
        description:
          "A grave warden's studied target bonus is doubled when applied against undead creatures. She also gains a +2 bonus on Knowledge (religion) checks to identify undead and recall their special abilities.",
      },
      {
        name: 'Consecrated Strike',
        level: 2,
        description:
          "At 2nd level, the grave warden's weapons are treated as good-aligned for the purpose of overcoming undead damage reduction. She also adds half her slayer level to damage rolls against undead.",
      },
      {
        name: 'Detect Undead',
        level: 4,
        description:
          'At 4th level, the grave warden can detect undead at will as a spell-like ability, as the spell. She automatically knows the direction of the nearest undead creature within 60 feet as a free action.',
      },
      {
        name: 'Undead Bane',
        level: 8,
        description:
          "At 8th level, the grave warden's weapons gain the undead bane property when attacking her studied target. At 16th level, all her weapons are treated as undead bane regardless of studied target status.",
      },
      {
        name: 'Grave Mastery',
        level: 14,
        description:
          "At 14th level, the grave warden is immune to the energy drain ability of undead and gains a +4 bonus on saves versus negative energy effects. When she slays an undead studied target, she regains hit points equal to the target's CR.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Guerrilla
  // ──────────────────────────────────────────────
  {
    name: 'Guerrilla',
    className: 'Slayer',
    description:
      'A guerrilla is a master of ambush tactics and irregular warfare, striking from concealment and melting back into the terrain before the enemy can respond. She trades some precision combat ability for exceptional skills at battlefield deception, terrain exploitation, and coordinating ambushes.',
    replacedFeatures: ['Sneak Attack (1 die)', 'Slayer Talents (2)', 'Quarry'],
    modifiedFeatures: ['Track', 'Studied Target'],
    newFeatures: [
      {
        name: 'Ambush Commander',
        level: 1,
        description:
          'A guerrilla can spend 1 minute preparing an ambush site, granting herself and allies who follow her direction a +2 bonus on attack rolls and Stealth checks in the first round of combat if they successfully surprise the enemy. This bonus increases by +1 for every 5 levels.',
      },
      {
        name: 'Terrain Mastery',
        level: 2,
        description:
          "At 2nd level, the guerrilla selects a terrain type (as the ranger's favored terrain). She gains a +2 bonus on initiative, Perception, Stealth, and Survival checks in that terrain. She selects an additional terrain at 6th level and every 4 levels thereafter.",
      },
      {
        name: 'Guerrilla Strike',
        level: 4,
        description:
          'At 4th level, whenever the guerrilla attacks a flat-footed target from a position of cover or concealment, she adds her studied target bonus to damage even if she did not spend an action to study the target that round.',
      },
      {
        name: 'Fade Away',
        level: 10,
        description:
          'At 10th level, after reducing a studied target to 0 hit points or fewer, the guerrilla can immediately attempt a Stealth check as a free action, even without cover or concealment, to hide from all other creatures. She gains a +10 bonus on this check.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Kintargo Contract Killer
  // ──────────────────────────────────────────────
  {
    name: 'Kintargo Contract Killer',
    className: 'Slayer',
    description:
      "A Kintargo contract killer is a professional assassin trained in the tradition of Cheliax's city of silver, specializing in the use of elaborate contracts and legal loopholes to operate openly as a licensed killer. She uses social cunning and legal documentation as weapons alongside her blades.",
    replacedFeatures: ['Track', 'Swift Tracker', 'Quarry', 'Improved Quarry'],
    modifiedFeatures: ['Studied Target', 'Slayer Talents'],
    newFeatures: [
      {
        name: 'Licensed Killer',
        level: 1,
        description:
          "A Kintargo contract killer begins play with a letter of marque from a noble house, thieves' guild, or government organization. She gains a +4 bonus on Diplomacy and Intimidate checks against members of that organization and can requisition minor resources (safe houses, basic equipment) once per month.",
      },
      {
        name: 'Contract Mark',
        level: 2,
        description:
          'At 2nd level, the contract killer can spend 1 hour researching a target and establish a formal contract mark. Against her contracted target, her studied target bonus increases by +2 and her sneak attack deals an additional die of damage.',
      },
      {
        name: 'Escape Clause',
        level: 5,
        description:
          'At 5th level, the contract killer has learned to read situations with legal precision. Once per day, when she would fail a saving throw, she can reroll it and take the higher result. This represents her ability to find the escape clause in any situation.',
      },
      {
        name: 'Perfect Kill',
        level: 11,
        description:
          'At 11th level, once per day the contract killer can make a single melee attack against a contracted target that, if it hits and deals damage, forces the target to succeed at a Fortitude save (DC 10 + sneak attack dice) or take 1d4 points of Constitution damage per slayer level.',
      },
    ],
    source: "Pathfinder RPG: Hell's Rebels AP",
  },

  // ──────────────────────────────────────────────
  // 9. Spy
  // ──────────────────────────────────────────────
  {
    name: 'Spy',
    className: 'Slayer',
    description:
      'A spy is as adept at gathering information and maintaining a cover identity as she is at killing. She trades some of her combat talents for exceptional deception skills, the ability to extract information from enemies, and a network of contacts and safe houses.',
    replacedFeatures: ['Track', 'Swift Tracker', 'Quarry', 'Improved Quarry'],
    modifiedFeatures: ['Slayer Talents', 'Sneak Attack'],
    newFeatures: [
      {
        name: 'Covert Training',
        level: 1,
        description:
          'A spy adds Bluff, Diplomacy, and Disguise to her list of class skills. She gains a +2 bonus on each of these skills, and this bonus increases by +1 for every 4 levels beyond 1st.',
      },
      {
        name: 'Hidden Agenda',
        level: 1,
        description:
          'A spy can maintain a false identity with extreme believability. She gains a +4 bonus on Disguise checks and can use Bluff to pass secret messages as a move action rather than a standard action.',
      },
      {
        name: 'Interrogation',
        level: 4,
        description:
          "At 4th level, the spy can extract information from a helpless or willing creature. Spending 10 minutes in conversation, she learns 3 pieces of useful information (GM's discretion) about the creature's knowledge. She can use this ability a number of times per day equal to her Intelligence modifier.",
      },
      {
        name: 'Sleeper Agent',
        level: 8,
        description:
          'At 8th level, the spy can embed herself so thoroughly in an organization that even magical detection may fail. She gains a +4 bonus on saves versus magical compulsion to reveal her true identity and any spell that would compel her to speak truthfully must overcome her SR of 10 + her slayer level.',
      },
      {
        name: 'Master of Disguise',
        level: 12,
        description:
          'At 12th level, the spy can change her appearance as a move action (as alter self) at will. She does not need props or equipment to use this ability, and observers must succeed at a Perception check (DC 25 + spy level) to notice the transformation.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Stygian Slayer
  // ──────────────────────────────────────────────
  {
    name: 'Stygian Slayer',
    className: 'Slayer',
    description:
      'A stygian slayer draws upon shadow magic and dark arts learned in the planes of shadow to enhance her assassination techniques. She can animate temporary shadow duplicates of her slain foes and harness negative energy to empower her strikes.',
    replacedFeatures: ['Track', 'Swift Tracker', 'Quarry'],
    modifiedFeatures: ['Sneak Attack', 'Slayer Talents'],
    newFeatures: [
      {
        name: 'Shadow Step',
        level: 1,
        description:
          'A stygian slayer can shift through shadow as a swift action, teleporting up to 10 feet to an unoccupied space she can see that is in dim light or darkness. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Shadow Strike',
        level: 3,
        description:
          "At 3rd level, the stygian slayer's sneak attacks deal shadow damage that bypasses concealment-based miss chances. Creatures damaged by her sneak attack must succeed at a Will save (DC 10 + half slayer level + Wis modifier) or take a –2 penalty on Perception checks for 1 minute.",
      },
      {
        name: 'Animate Shadow',
        level: 6,
        description:
          "At 6th level, when the stygian slayer slays a studied target, she can immediately animate its shadow as a shadow creature under her control. This shadow has HD equal to half the slain creature's HD and persists for 1 hour per slayer level.",
      },
      {
        name: 'Dark Consumption',
        level: 12,
        description:
          "At 12th level, once per day when the stygian slayer kills a studied target with a sneak attack, she consumes its life force, gaining temporary hit points equal to the target's maximum hit points (capped at twice her slayer level). These temporary hit points last 1 hour.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Vanguard
  // ──────────────────────────────────────────────
  {
    name: 'Vanguard',
    className: 'Slayer',
    description:
      'A vanguard is a team-based slayer who sacrifices solo lethality for the ability to coordinate her companions and break enemy formations. She excels at creating openings for her allies, drawing enemy attention, and maintaining tactical cohesion under fire.',
    replacedFeatures: ['Sneak Attack (1 die)', 'Quarry', 'Improved Quarry'],
    modifiedFeatures: ['Studied Target', 'Slayer Talents'],
    newFeatures: [
      {
        name: 'Tactical Leader',
        level: 1,
        description:
          'A vanguard grants all allies within 30 feet who can see and hear her a +1 bonus on initiative checks. At 5th level and every 5 levels thereafter, this bonus increases by +1.',
      },
      {
        name: 'Opening Strike',
        level: 2,
        description:
          "At 2nd level, when the vanguard successfully strikes a studied target, all allies who make an attack against that target before the start of the vanguard's next turn gain a +2 bonus on attack rolls. This bonus does not stack with itself.",
      },
      {
        name: 'Formation Fighting',
        level: 6,
        description:
          'At 6th level, the vanguard and her adjacent allies do not provide flanking bonuses to enemies. Additionally, she and her adjacent allies gain a +1 dodge bonus to AC and CMD when adjacent to at least one other ally.',
      },
      {
        name: 'Coordinated Assault',
        level: 10,
        description:
          'At 10th level, once per round as a swift action, the vanguard can mark a studied target for coordinated assault. Each ally who attacks that target this round deals an additional 1d6 damage per 5 slayer levels the vanguard possesses.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },
];
