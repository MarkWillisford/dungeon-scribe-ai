import { ArchetypeData } from '../types';

export const RANGER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Battle Scout
  // ──────────────────────────────────────────────
  {
    name: 'Battle Scout',
    className: 'Ranger',
    description:
      'Skilled at leading the way through dangerous territory, the battle scout is a vigilant sentinel who excels at locating enemies and directing allies in combat.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Evasion',
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Advantageous Terrain',
        level: 1,
        description:
          "At 1st level, a battle scout can spend a move action to select a 40-foot radius area within line of sight. For a number of rounds equal to 1 + the ranger's Wisdom modifier, allies in that area gain a +2 dodge bonus to AC and a +2 bonus on Perception checks. This bonus increases by +1 at 5th level and every 5 levels thereafter.",
        effects: [],
      },
      {
        name: 'Infiltrator',
        level: 4,
        description:
          'At 4th level, a battle scout can study a creature or group he can see. This functions as the favored enemy ability, granting a +2 bonus. The bonus lasts for a number of minutes equal to half his ranger level.',
        effects: [],
      },
      {
        name: 'Improved Evasion',
        level: 9,
        description:
          'At 9th level, a battle scout gains improved evasion. This functions as the rogue talent of the same name.',
        effects: [],
      },
      {
        name: 'Superior Tactics',
        level: 20,
        description:
          'At 20th level, once per day when a battle scout uses advantageous terrain, the bonuses are doubled and the area increases to 80-foot radius.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Beast Master
  // ──────────────────────────────────────────────
  {
    name: 'Beast Master',
    className: 'Ranger',
    description:
      'Some rangers bond more closely with animals than with other people. The beast master forms powerful connections with multiple animal companions rather than one.',
    replacedFeatures: [
      "Hunter's Bond",
      'Combat Style Feat 2nd',
      'Combat Style Feat 6th',
      'Combat Style Feat 10th',
      'Combat Style Feat 14th',
      'Combat Style Feat 18th',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Animal Companion',
        level: 4,
        description:
          'At 4th level, the beast master gains an animal companion as a druid of his level -3. He may have up to two animal companions at a time, but the total effective druid levels are split between them.',
        effects: [],
      },
      {
        name: 'Improved Empathic Link',
        level: 6,
        description:
          'At 6th level, the beast master gains an empathic link with all of his animal companions. This functions like an empathic link with a familiar, with a range of 1 mile.',
        effects: [],
      },
      {
        name: 'Strong Bond',
        level: 12,
        description:
          'At 12th level, the beast master strengthens his connection to his companions. Each animal companion gains a +2 bonus to saves while within 30 feet of the beast master.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 3. Bow Nomad (Kasatha)
  // ──────────────────────────────────────────────
  {
    name: 'Bow Nomad',
    className: 'Ranger',
    description:
      'Bow nomads wander the wastes, honing their archery skills to supernatural precision. They favor mobility and ranged superiority over close-quarters fighting.',
    replacedFeatures: [
      'Endurance',
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: ['Combat Style Feats (must choose archery)'],
    newFeatures: [
      {
        name: 'Bow Spirit',
        level: 3,
        description:
          'At 3rd level, as a swift action, the bow nomad can imbue his bow with spiritual energy. For 1 round, the bow gains a +1 enhancement bonus. This bonus increases by +1 at 8th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Ranged Cleave',
        level: 3,
        description:
          'At 3rd level, once per round when the bow nomad drops a foe with a ranged attack, he may make an additional ranged attack at the same bonus against another target within 30 feet of the first.',
        effects: [],
      },
      {
        name: 'Rapid Movement',
        level: 8,
        description:
          "At 8th level, the bow nomad's base speed increases by 10 feet when wearing light or no armor.",
        effects: [],
      },
      {
        name: 'Arrow of Death',
        level: 17,
        description:
          'At 17th level, once per day the bow nomad can fire a death arrow. If the attack hits, the target must succeed on a Fortitude save (DC 10 + half ranger level + Wisdom modifier) or die.',
        effects: [],
      },
    ],
    source: 'People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 4. Corpse Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Corpse Hunter',
    className: 'Ranger',
    description:
      'Dedicated to hunting and destroying undead, the corpse hunter uses specialized knowledge and techniques to track and eliminate the walking dead.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride', 'Swift Tracker'],
    modifiedFeatures: ['Favored Enemy (must select undead first)'],
    newFeatures: [
      {
        name: 'Undead Sense',
        level: 1,
        description:
          'A corpse hunter can detect undead as the detect undead spell. He can use this ability a number of rounds per day equal to his ranger level. These rounds need not be consecutive.',
        effects: [],
      },
      {
        name: 'Life Bond',
        level: 3,
        description:
          'At 3rd level, a corpse hunter gains a +2 sacred bonus on saving throws against death effects, energy drain, and negative energy effects. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Disruptive Attack',
        level: 7,
        description:
          "At 7th level, the corpse hunter's weapon attacks count as if they had the disruption special ability against undead, forcing a Will save (DC 14) or be destroyed.",
        effects: [],
      },
      {
        name: 'Swift Destruction',
        level: 8,
        description:
          'At 8th level, the corpse hunter can move at full speed while tracking undead without penalty.',
        effects: [],
      },
    ],
    source: "Undead Slayer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 5. Deep Walker
  // ──────────────────────────────────────────────
  {
    name: 'Deep Walker',
    className: 'Ranger',
    description:
      'The deep walker devotes his life to exploring and patrolling the vast, lightless depths of the Darklands, adapting to the strange and dangerous subterranean world.',
    replacedFeatures: [
      'Wild Empathy',
      'Endurance',
      'Woodland Stride',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: ['Favored Terrain (must select underground first)'],
    newFeatures: [
      {
        name: 'Deep Knowledge',
        level: 1,
        description:
          'A deep walker gains a +2 bonus on Knowledge (dungeoneering) and Survival checks in underground environments. This bonus increases by +1 for every 5 ranger levels.',
        effects: [],
      },
      {
        name: 'Rock Hopper',
        level: 3,
        description:
          'At 3rd level, a deep walker can move through difficult terrain of stone, rock, or earth at normal speed and without taking damage or suffering any other impairment.',
        effects: [],
      },
      {
        name: 'Darkvision',
        level: 3,
        description:
          'At 3rd level, the deep walker gains darkvision 60 feet. If he already has darkvision, the range increases by 30 feet.',
        effects: [],
      },
      {
        name: 'Deep Lurker',
        level: 12,
        description:
          'At 12th level, the deep walker can use Stealth to hide in underground environments, even without cover or concealment.',
        effects: [],
      },
      {
        name: 'Deep Sight',
        level: 17,
        description:
          'At 17th level, the deep walker gains the ability to see in magical darkness as if it were normal light, out to a range of 120 feet.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 6. Demonslayer
  // ──────────────────────────────────────────────
  {
    name: 'Demonslayer',
    className: 'Ranger',
    description:
      'Devoted to the eradication of demons and other denizens of the Abyss, the demonslayer trains relentlessly to counter fiendish threats.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride', 'Swift Tracker'],
    modifiedFeatures: ['Favored Enemy (must select evil outsiders first)'],
    newFeatures: [
      {
        name: 'Detect Evil',
        level: 1,
        description:
          'A demonslayer can detect evil as the detect evil spell at will. He can, as a move action, concentrate on a single creature or object within 60 feet and determine if it is evil.',
        effects: [],
      },
      {
        name: 'Knowledge of the Enemy',
        level: 1,
        description:
          'A demonslayer adds half his level (minimum 1) to Knowledge (planes) checks to identify evil outsiders and their special powers or vulnerabilities.',
        effects: [],
      },
      {
        name: 'Sin Sense',
        level: 3,
        description:
          'At 3rd level, a demonslayer gains a +2 bonus on Sense Motive checks and Will saves against the special abilities, spells, and spell-like abilities of evil outsiders. This bonus increases by +1 every 5 levels.',
        effects: [],
      },
      {
        name: 'Resist Fiendish Corruption',
        level: 7,
        description:
          'At 7th level, the demonslayer gains a +4 bonus on saving throws against the supernatural and spell-like abilities of evil outsiders.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 7. Divine Tracker
  // ──────────────────────────────────────────────
  {
    name: 'Divine Tracker',
    className: 'Ranger',
    description:
      "Devoted to a deity, the divine tracker channels divine energy through his weapons, replacing hunter's bond with the blessings of his patron.",
    replacedFeatures: ["Hunter's Bond", 'Wild Empathy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deity',
        level: 1,
        description:
          'A divine tracker selects a deity. He can only select alignments and domains offered by his chosen deity. He gains Deific Obedience as a bonus feat at 1st level.',
        effects: [],
      },
      {
        name: 'Blessings',
        level: 4,
        description:
          "At 4th level, a divine tracker gains the warpriest's blessings class feature, choosing from among the blessings offered by his deity. He uses half his ranger level as his warpriest level to determine the blessings' effects. He can use each blessing's minor power a number of times per day equal to his Wisdom modifier.",
        effects: [],
      },
      {
        name: 'Faithful Empathy',
        level: 1,
        description:
          "A divine tracker can improve the attitude of animals sacred to his deity. This functions as wild empathy, but only works on animals associated with the deity's portfolio or domain.",
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Drake Warden
  // ──────────────────────────────────────────────
  {
    name: 'Drake Warden',
    className: 'Ranger',
    description:
      'Some rangers choose to bond with a drake rather than an animal companion, forming a powerful partnership with a young draconic creature.',
    replacedFeatures: ["Hunter's Bond", 'Evasion', 'Quarry', 'Improved Quarry'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Drake Companion',
        level: 4,
        description:
          "At 4th level, the drake warden gains a drake companion. The drake is a Small dragon with abilities that scale with the ranger's level. The drake functions similarly to an animal companion using the ranger's level -3 as the effective druid level.",
        effects: [],
      },
      {
        name: 'Drake Bond',
        level: 9,
        description:
          "At 9th level, the drake warden and his drake gain an empathic link with a range of 1 mile. The drake warden can see through the drake's eyes as a swift action, maintaining this link for a number of rounds per day equal to his ranger level.",
        effects: [],
      },
      {
        name: 'Drake Mastery',
        level: 11,
        description:
          "At 11th level, the drake gains the ability to fly with the ranger mounted on it if the drake is of sufficient size. The drake's natural attacks count as magic for the purpose of overcoming damage reduction.",
        effects: [],
      },
      {
        name: 'Greater Drake Bond',
        level: 19,
        description:
          "At 19th level, when the drake warden uses his drake bond to see through his drake's eyes, he can also cast ranger spells with a range of touch through the drake.",
        effects: [],
      },
    ],
    source: 'Legacy of Dragons',
  },

  // ──────────────────────────────────────────────
  // 9. Dungeon Rover
  // ──────────────────────────────────────────────
  {
    name: 'Dungeon Rover',
    className: 'Ranger',
    description:
      'The dungeon rover specializes in exploring dungeons, ruins, and other hazardous underground locales, trading wilderness expertise for dungeoneering prowess.',
    replacedFeatures: ['Woodland Stride', 'Camouflage', 'Hide in Plain Sight', 'Wild Empathy'],
    modifiedFeatures: ['Favored Terrain (must select underground first)'],
    newFeatures: [
      {
        name: 'Trapfinding',
        level: 1,
        description:
          'A dungeon rover adds half his level (minimum 1) to Perception checks to locate traps and to Disable Device checks. He can use Disable Device to disarm magical traps.',
        effects: [],
      },
      {
        name: 'Sure Footing',
        level: 3,
        description:
          'At 3rd level, a dungeon rover is not slowed by rubble, uneven stone, or other natural difficult terrain in underground environments.',
        effects: [],
      },
      {
        name: 'Stone Sense',
        level: 12,
        description:
          'At 12th level, the dungeon rover gains tremorsense 30 feet while standing on stone or earth surfaces.',
        effects: [],
      },
      {
        name: 'Master Explorer',
        level: 17,
        description:
          'At 17th level, the dungeon rover cannot be caught flat-footed in underground environments and always acts in the surprise round if combat starts there.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 10. Falconer
  // ──────────────────────────────────────────────
  {
    name: 'Falconer',
    className: 'Ranger',
    description:
      'Rangers who prefer the companionship of a raptor to other animals train as falconers, gaining a keen-eyed avian hunting partner.',
    replacedFeatures: ["Hunter's Bond", 'Evasion'],
    modifiedFeatures: ['Wild Empathy'],
    newFeatures: [
      {
        name: 'Feathered Companion',
        level: 1,
        description:
          "At 1st level, the falconer gains a bird animal companion (eagle, falcon, hawk, or owl). The bird functions as a druid animal companion using the ranger's level as his effective druid level.",
        effects: [],
      },
      {
        name: "Hunter's Aim",
        level: 4,
        description:
          'At 4th level, when his bird companion is within 30 feet, the falconer gains a +1 competence bonus on ranged attack rolls. This bonus increases by +1 for every 4 levels beyond 4th.',
        effects: [],
      },
      {
        name: 'Swoop for the Kill',
        level: 9,
        description:
          "At 9th level, the falconer's bird companion can make a special diving charge attack, gaining a +2 bonus on attack rolls and dealing double damage on a successful hit.",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 11. Freebooter
  // ──────────────────────────────────────────────
  {
    name: 'Freebooter',
    className: 'Ranger',
    description:
      'A pirate captain who directs his crew in combat, the freebooter rallies allies against specific foes with tactical coordination rather than personal vendetta.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Freebooter's Bane",
        level: 1,
        description:
          'As a move action, the freebooter can designate a single enemy. All allies within 30 feet who can see or hear the freebooter gain a +1 bonus on attack rolls and damage rolls against that target. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: "Freebooter's Bond",
        level: 4,
        description:
          'At 4th level, the freebooter can spend a move action to grant all allies within 30 feet the benefit of one teamwork feat he possesses for a number of rounds equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Called Shot',
        level: 20,
        description:
          'At 20th level, the freebooter can make a called shot as a standard action. If the attack hits, it is automatically a critical threat.',
        effects: [],
      },
    ],
    source: 'Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 12. Guide
  // ──────────────────────────────────────────────
  {
    name: 'Guide',
    className: 'Ranger',
    description:
      'Eschewing permanent hatreds, the guide focuses his skills on adapting to threats as they arise, studying enemies in the moment rather than in advance.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Ranger's Focus",
        level: 1,
        description:
          'As a swift action, the guide can focus on a single enemy within line of sight. He gains a +2 bonus on attack and damage rolls against that target. This bonus increases by +2 at 5th level and every 5 levels thereafter. This effect lasts until the target is dead or the guide designates a new focus. Usable a number of times per day equal to 1 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Terrain Bond',
        level: 4,
        description:
          "At 4th level, the guide forms a bond with the terrain around him. He grants all allies within line of sight and within 30 feet a +2 bonus on initiative checks and Perception, Stealth, and Survival skill checks while they are in the guide's favored terrain.",
        effects: [],
      },
      {
        name: 'Inspired Moment',
        level: 20,
        description:
          'At 20th level, once per day as a free action, the guide can have an inspired moment. For 1 round, he gains the effects of a haste spell, can take an additional standard action, and is treated as having every favored enemy and favored terrain simultaneously.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 13. Horse Lord
  // ──────────────────────────────────────────────
  {
    name: 'Horse Lord',
    className: 'Ranger',
    description:
      'A ranger who has dedicated himself to riding and mounted combat, the horse lord forms an unbreakable bond with his equine companion.',
    replacedFeatures: ["Hunter's Bond", 'Endurance', 'Woodland Stride', 'Swift Tracker', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mounted Bond',
        level: 1,
        description:
          "At 1st level, a horse lord gains the service of a loyal horse or pony. This functions as a druid's animal companion, using the ranger's level as his effective druid level. The horse lord must ride this mount to gain his favored terrain bonuses.",
        effects: [],
      },
      {
        name: 'Favored Mount',
        level: 3,
        description:
          "At 3rd level, the horse lord's mount gains any favored terrain bonuses the ranger possesses while the ranger is mounted on it.",
        effects: [],
      },
      {
        name: 'Mounted Evasion',
        level: 9,
        description:
          'At 9th level, while mounted, both the horse lord and his mount gain evasion. If either already has evasion, they gain improved evasion instead.',
        effects: [],
      },
      {
        name: 'Spirited Charge',
        level: 3,
        description:
          "At 3rd level, the horse lord gains Spirited Charge as a bonus feat, even if he doesn't meet the prerequisites. He also gains Mounted Combat at 1st level as a bonus feat.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 14. Infiltrator
  // ──────────────────────────────────────────────
  {
    name: 'Infiltrator',
    className: 'Ranger',
    description:
      'The infiltrator specializes in blending into enemy societies and cultures, using knowledge of his favored enemies to pass among them undetected.',
    replacedFeatures: ['Track', 'Wild Empathy', 'Woodland Stride'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Adaptation',
        level: 1,
        description:
          'At 1st level, an infiltrator can study a favored enemy for 1 minute and gain one ability the creature possesses. This can include movement types, resistances, senses (like darkvision up to 60 feet), or natural armor. This ability lasts for 10 minutes per ranger level and can be used once per day per favored enemy. An additional use per day is gained at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Misdirection',
        level: 3,
        description:
          'At 3rd level, the infiltrator registers as a member of one of his favored enemy types to detection spells such as detect evil, detect undead, and similar. He gains a +4 bonus on Bluff and Disguise checks to appear as a member of his favored enemy type.',
        effects: [],
      },
      {
        name: 'Master Infiltrator',
        level: 7,
        description:
          'At 7th level, the infiltrator can use adaptation to gain two abilities from a favored enemy simultaneously. At 14th level, he can gain three abilities at once.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Nirmathi Irregular
  // ──────────────────────────────────────────────
  {
    name: 'Nirmathi Irregular',
    className: 'Ranger',
    description:
      'A guerrilla fighter from the forests of Nirmathas, the irregular specializes in woodland ambushes and hit-and-run tactics against occupying forces.',
    replacedFeatures: ['Endurance', "Hunter's Bond", 'Evasion'],
    modifiedFeatures: ['Favored Terrain (must select forest first)'],
    newFeatures: [
      {
        name: 'Guerrilla Tactics',
        level: 1,
        description:
          'At 1st level, the Nirmathi irregular gains a +1 bonus on attack rolls during a surprise round and when attacking from concealment. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Irregular Bond',
        level: 4,
        description:
          'At 4th level, as a move action, the irregular can grant allies within 30 feet half of his favored enemy bonus against a single target for a number of rounds equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Evasive Maneuvers',
        level: 9,
        description:
          'At 9th level, when using the withdraw action, the irregular can move through difficult terrain at full speed and does not provoke attacks of opportunity from any creature he has designated as a favored enemy.',
        effects: [],
      },
    ],
    source: 'Lands of Conflict',
  },

  // ──────────────────────────────────────────────
  // 16. Shapeshifter
  // ──────────────────────────────────────────────
  {
    name: 'Shapeshifter',
    className: 'Ranger',
    description:
      'The shapeshifter taps into a primal connection with nature, gaining the ability to physically transform parts of his body to gain animalistic abilities.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Shifter's Blessing",
        level: 1,
        description:
          'As a swift action, the shapeshifter can take on an animalistic aspect for a number of rounds per day equal to 3 + his Wisdom modifier. These rounds do not need to be consecutive. Each aspect grants a specific bonus, such as claws (1d6 damage), climb speed 20 ft, swim speed 20 ft, or enhanced senses (scent).',
        effects: [],
      },
      {
        name: 'Dual Form Shifter',
        level: 5,
        description:
          "At 5th level, the shapeshifter can take on a second shifter's blessing simultaneously. At 10th level, he can maintain three at once. At 15th level, four; and at 20th level, all of them.",
        effects: [],
      },
      {
        name: 'Master Shifter',
        level: 20,
        description:
          'At 20th level, the shapeshifter can use beast shape IV as a spell-like ability for a number of minutes per day equal to his ranger level. These minutes need not be consecutive.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 17. Skirmisher
  // ──────────────────────────────────────────────
  {
    name: 'Skirmisher',
    className: 'Ranger',
    description:
      "The skirmisher relies on his wits, his might, and learned tricks rather than spellcasting, replacing ranger spells with hunter's tricks.",
    replacedFeatures: [],
    modifiedFeatures: ['Spellcasting'],
    newFeatures: [
      {
        name: "Hunter's Tricks",
        level: 5,
        description:
          "At 5th level, the skirmisher gains hunter's tricks instead of spells. He learns one trick at 5th level and an additional trick every 2 levels thereafter. He can use a total number of tricks per day equal to half his ranger level + his Wisdom modifier. Available tricks include Aiding Attack, Bolster Companion, Catfall, Chameleon Step, Cunning Pantomime, Defensive Bow Stance, Deft Strike, Distracting Attack, Hateful Attack, Heel, Hobbling Attack, Quick Climb, Quick Healing, Quick Swim, Ranger's Counsel, Rattling Strike, Second Chance Strike, Sic 'Em, Skill Sage, Stag's Leap, Surprise Shift, Tangling Attack, Trick Shot, Uncanny Senses, and Vengeance Strike.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 18. Spirit Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Ranger',
    className: 'Ranger',
    description:
      'The spirit ranger calls upon the spirits of nature rather than learning spells, gaining the ability to channel spiritual energy for mystical effects.',
    replacedFeatures: [],
    modifiedFeatures: ['Spellcasting'],
    newFeatures: [
      {
        name: 'Spirit Bond',
        level: 4,
        description:
          'At 4th level, instead of gaining spells, the spirit ranger can call upon the spirits of nature. As a swift action, he can channel a spirit to gain one of several benefits for 1 round per ranger level: wisdom of the spirits (+2 insight bonus on skill checks), wrath of the spirits (weapons count as magic, cold iron, and silver), or ward of the spirits (deflection bonus to AC equal to Wisdom modifier).',
        effects: [],
      },
      {
        name: 'Greater Spirit Bond',
        level: 12,
        description:
          'At 12th level, the spirit ranger can maintain two spirit effects simultaneously. The bonuses from wisdom of the spirits increase to +4.',
        effects: [],
      },
      {
        name: 'True Spirit Bond',
        level: 20,
        description:
          'At 20th level, the spirit ranger can maintain all spirit effects simultaneously and they function continuously without requiring activation.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Stormwalker
  // ──────────────────────────────────────────────
  {
    name: 'Stormwalker',
    className: 'Ranger',
    description:
      'A ranger attuned to storms and lightning, the stormwalker thrives in foul weather and uses the fury of the elements to devastating effect.',
    replacedFeatures: [
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Woodland Stride',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Stormwalk',
        level: 3,
        description:
          'At 3rd level, the stormwalker can move through wind effects unimpeded. He takes no penalty to Perception checks or ranged attacks in rain, sleet, or snow. He gains electricity resistance 5, which increases by 5 at 8th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Wind Stride',
        level: 7,
        description:
          'At 7th level, the stormwalker can walk on air during storms or heavy winds, as the air walk spell, for a number of rounds per day equal to his ranger level.',
        effects: [],
      },
      {
        name: 'Storm Sense',
        level: 12,
        description:
          'At 12th level, the stormwalker gains blindsense 30 feet in rain, fog, or similar precipitation.',
        effects: [],
      },
      {
        name: 'Eye of the Storm',
        level: 17,
        description:
          'At 17th level, the stormwalker can call lightning once per day as a spell-like ability (CL equals ranger level). He is also immune to electricity damage.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 20. Sable Company Marine
  // ──────────────────────────────────────────────
  {
    name: 'Sable Company Marine',
    className: 'Ranger',
    description:
      'An elite member of the Sable Company of Korvosa, the marine rides a hippogriff mount into battle and patrols the skies above the city.',
    replacedFeatures: ["Hunter's Bond", 'Endurance', 'Woodland Stride'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hippogriff Mount',
        level: 1,
        description:
          "At 1st level, the Sable Company Marine gains a hippogriff as a loyal mount. The hippogriff functions as an animal companion using the ranger's level as his effective druid level. He gains the Skill Focus (Ride) feat as a bonus feat.",
        effects: [],
      },
      {
        name: 'Aerial Acrobatics',
        level: 3,
        description:
          'At 3rd level, while mounted on his hippogriff, the marine gains a +2 bonus on Ride checks and can make a full attack after his mount has moved more than 5 feet.',
        effects: [],
      },
      {
        name: "Marine's Charge",
        level: 7,
        description:
          'At 7th level, the marine can charge while mounted on his hippogriff without taking the -2 penalty to AC. His mount can also make a dive attack during a charge, gaining double damage on the first attack.',
        effects: [],
      },
    ],
    source: "Curse of the Crimson Throne Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 21. Trapper
  // ──────────────────────────────────────────────
  {
    name: 'Trapper',
    className: 'Ranger',
    description:
      'A trapper is a ranger who focuses on using traps and snares rather than spells, setting mundane and extraordinary traps to hinder and harm foes.',
    replacedFeatures: [],
    modifiedFeatures: ['Spellcasting'],
    newFeatures: [
      {
        name: 'Trapfinding',
        level: 1,
        description:
          'A trapper adds half his ranger level (minimum 1) to Perception checks to locate traps and to Disable Device checks. He can use Disable Device to disarm magical traps.',
        effects: [],
      },
      {
        name: 'Launch Trap',
        level: 5,
        description:
          'At 5th level, instead of gaining spells, a trapper learns how to create and set extraordinary ranger traps. He learns one trap at 5th level and an additional trap every 2 levels thereafter. Available traps include alarm trap, burning trap, exploding trap, fire trap, freezing trap, marking trap, poison trap, snare trap, swarm trap, and tranquilizer trap. Setting a trap is a full-round action that can only be placed in a square adjacent to the ranger.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 22. Trophy Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Trophy Hunter',
    className: 'Ranger',
    description:
      'Specializing in firearms and the hunting of great beasts, the trophy hunter is a marksman who collects trophies from his defeated quarry.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Evasion'],
    modifiedFeatures: ['Combat Style Feats (adds firearm combat style)'],
    newFeatures: [
      {
        name: 'Improved Tracking',
        level: 1,
        description:
          'A trophy hunter gains a +2 bonus on Survival checks to follow or identify tracks. This bonus increases by +2 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: "Hunter's Aim",
        level: 3,
        description:
          'At 3rd level, the trophy hunter can add his Wisdom modifier to one firearm attack roll per round as a swift action.',
        effects: [],
      },
      {
        name: 'Firearm Mastery',
        level: 9,
        description:
          'At 9th level, the trophy hunter no longer provokes attacks of opportunity when firing a firearm. He also reduces the misfire chance of any firearm he uses by 1 (minimum 0).',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 23. Urban Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Urban Ranger',
    className: 'Ranger',
    description:
      'The urban ranger stalks the streets and alleyways of cities, specializing in navigating urban environments and tracking quarry through civilization.',
    replacedFeatures: [
      'Wild Empathy',
      'Endurance',
      'Woodland Stride',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: ['Favored Terrain (becomes Favored Community)'],
    newFeatures: [
      {
        name: 'Favored Community',
        level: 3,
        description:
          'At 3rd level, the urban ranger selects a specific city. He gains a +2 bonus on Bluff, Diplomacy, Gather Information (Diplomacy), Intimidate, Knowledge (local), Perception, Sense Motive, Stealth, and Survival checks within that community. He can also make Knowledge (local) checks untrained. This bonus increases by +2 at 8th, 13th, and 18th levels, and he selects additional communities at those levels.',
        effects: [],
      },
      {
        name: 'Trapfinding',
        level: 3,
        description:
          'At 3rd level, an urban ranger adds half his level to Perception checks to locate traps and to Disable Device checks. He can use Disable Device to disarm magical traps.',
        effects: [],
      },
      {
        name: 'Push Through',
        level: 7,
        description:
          'At 7th level, an urban ranger can move through crowds and difficult terrain in urban environments at normal speed. He is never entangled or hampered by a crowd.',
        effects: [],
      },
      {
        name: 'Blend In',
        level: 12,
        description:
          'At 12th level, an urban ranger can use Stealth to hide in his favored community, even while being observed and without cover or concealment.',
        effects: [],
      },
      {
        name: 'Invisibility Trick',
        level: 17,
        description:
          'At 17th level, an urban ranger can cast greater invisibility on himself as a spell-like ability for a number of rounds per day equal to his ranger level. These rounds need not be consecutive.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 24. Warden
  // ──────────────────────────────────────────────
  {
    name: 'Warden',
    className: 'Ranger',
    description:
      'The warden is a vigilant defender of a specific area, standing watch over his territory and repelling intruders with lethal efficiency.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Live in Comfort',
        level: 2,
        description:
          'At 2nd level, the warden is at home in his favored terrain. He and his allies within 30 feet reduce the effects of severe weather by one step while in his favored terrain.',
        effects: [],
      },
      {
        name: 'Terrain Bond',
        level: 4,
        description:
          'At 4th level, the warden forms a bond with his favored terrain. He grants all allies within line of sight and within 30 feet a +2 bonus on initiative checks and Perception, Stealth, and Survival checks while in his favored terrain.',
        effects: [],
      },
      {
        name: 'Able Explorer',
        level: 1,
        description:
          'At 1st level, the warden can add half his level to Climb, Knowledge (geography), Perception, Stealth, Survival, and Swim checks in his favored terrain. This replaces favored enemy.',
        effects: [],
      },
      {
        name: 'Master Warden',
        level: 20,
        description:
          'At 20th level, the warden can, once per day, treat any area as his most favored terrain for 1 hour. While in his actual favored terrain, he gains a +10 insight bonus on Stealth checks.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 25. Wild Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Wild Hunter',
    className: 'Ranger',
    description:
      'The wild hunter draws upon the primal spirits of nature and the hunt, gaining supernatural tracking abilities and an almost feral connection to the wild.',
    replacedFeatures: [
      'Track',
      'Wild Empathy',
      'Combat Style Feat 2nd',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Scent',
        level: 1,
        description:
          'At 1st level, the wild hunter gains the scent ability. He can detect creatures by smell within 30 feet. This distance doubles if the creature is upwind, and is halved if downwind.',
        effects: [],
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'A wild hunter gains wild empathy as per the standard ranger ability, but he also gains a +2 bonus on wild empathy checks with predatory animals.',
        effects: [],
      },
      {
        name: 'Hunting Pack',
        level: 2,
        description:
          'At 2nd level, the wild hunter can direct his animal companion and allies to flank more effectively. Allies within 30 feet gain a +1 bonus on attack rolls when flanking. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Primal Camouflage',
        level: 12,
        description:
          'At 12th level, the wild hunter can blend into natural surroundings, gaining concealment (20% miss chance) while in natural terrain. At 17th level, this becomes total concealment (50% miss chance).',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 26. Wild Stalker
  // ──────────────────────────────────────────────
  {
    name: 'Wild Stalker',
    className: 'Ranger',
    description:
      'The wild stalker forsakes his civilized nature to tap into primal rage, combining ranger tracking and fighting skills with the fury of a barbarian.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Evasion',
      'Quarry',
      'Improved Quarry',
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Strong Senses',
        level: 1,
        description:
          'At 1st level, the wild stalker gains low-light vision and the scent special ability.',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, the wild stalker cannot be caught flat-footed, nor does he lose his Dexterity bonus to AC when an attacker is invisible.',
        effects: [],
      },
      {
        name: 'Rage of the Wild',
        level: 4,
        description:
          'At 4th level, the wild stalker gains the rage ability as a barbarian of his ranger level -3. He can rage for a number of rounds per day equal to 4 + his Constitution modifier. At 5th level and every level thereafter, he gains 2 additional rounds of rage per day.',
        effects: [],
      },
      {
        name: 'Rage Powers',
        level: 5,
        description:
          'At 5th level and every 5 levels thereafter, the wild stalker selects a rage power as a barbarian. He uses his ranger level -3 as his effective barbarian level for qualifying for rage powers.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 9,
        description:
          'At 9th level, the wild stalker can no longer be flanked. He can react to opponents on opposite sides of him as easily as he can react to a single attacker.',
        effects: [],
      },
      {
        name: 'Wild Fury',
        level: 11,
        description:
          'At 11th level, while raging, the wild stalker gains a +2 bonus on tracking-related Survival checks and can use his favored terrain bonuses while raging.',
        effects: [],
      },
      {
        name: 'Rage of the Predator',
        level: 20,
        description:
          "At 20th level, while raging, the wild stalker's critical threat range with all weapons is doubled (this does not stack with Improved Critical or keen).",
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 27. Witchguard
  // ──────────────────────────────────────────────
  {
    name: 'Witchguard',
    className: 'Ranger',
    description:
      'A guardian devoted to protecting a witch or shaman, the witchguard serves as a bodyguard and defender, gaining protective abilities tied to his ward.',
    replacedFeatures: ["Hunter's Bond", 'Favored Enemy 2nd', 'Favored Enemy 3rd', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Witch's Ward",
        level: 4,
        description:
          'At 4th level, the witchguard selects a single spellcaster as his ward. While the ward is within 30 feet, the witchguard gains a +2 morale bonus on saving throws against spells and spell-like abilities. If the ward is a witch, this bonus increases to +3.',
        effects: [],
      },
      {
        name: 'Protective Instinct',
        level: 5,
        description:
          'At 5th level, the witchguard can, as an immediate action, take the damage from a single melee or ranged attack that would hit his ward, provided the ward is adjacent to him.',
        effects: [],
      },
      {
        name: 'Shield the Ward',
        level: 9,
        description:
          'At 9th level, the witchguard provides his ward with a +2 shield bonus to AC while the ward is adjacent to him. This bonus increases to +4 at 14th level.',
        effects: [],
      },
      {
        name: 'Life Bond',
        level: 10,
        description:
          "At 10th level, if the witchguard's ward is reduced to negative hit points while within 30 feet, the witchguard can transfer his own hit points to stabilize and heal the ward as a swift action.",
        effects: [],
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 28. Woodland Skirmisher
  // ──────────────────────────────────────────────
  {
    name: 'Woodland Skirmisher',
    className: 'Ranger',
    description:
      'A light and mobile combatant who excels at hit-and-run tactics in forested terrain, the woodland skirmisher strikes quickly before melting back into the trees.',
    replacedFeatures: ['Endurance', 'Evasion', 'Quarry', 'Improved Quarry'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sure-Footed',
        level: 3,
        description:
          'At 3rd level, the woodland skirmisher can move through natural difficult terrain at normal speed in forested environments. He also gains a +2 bonus on Acrobatics checks in these areas.',
        effects: [],
      },
      {
        name: 'Evasive Strike',
        level: 9,
        description:
          'At 9th level, whenever the woodland skirmisher hits a creature with a melee weapon attack, he can take a 5-foot step as a free action, even if he has already taken one this round. This movement does not provoke attacks of opportunity from the creature he hit.',
        effects: [],
      },
      {
        name: 'Disengage',
        level: 11,
        description:
          'At 11th level, the woodland skirmisher can use the withdraw action as a move action instead of a full-round action.',
        effects: [],
      },
      {
        name: 'Elusive Target',
        level: 19,
        description:
          'At 19th level, the woodland skirmisher gains a +4 dodge bonus to AC against attacks of opportunity.',
        effects: [],
      },
    ],
    source: 'Melee Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 29. Yokai Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Yokai Hunter',
    className: 'Ranger',
    description:
      'A specialized hunter trained in the traditions of Tian Xia, the yokai hunter combats oni, kami, and other supernatural creatures of the eastern lands.',
    replacedFeatures: ['Wild Empathy', 'Woodland Stride', 'Evasion', 'Camouflage'],
    modifiedFeatures: ['Favored Enemy (must select outsiders or undead first)'],
    newFeatures: [
      {
        name: 'Ward Expert',
        level: 1,
        description:
          'A yokai hunter gains Knowledge (religion) and Knowledge (planes) as class skills. He adds half his level (minimum 1) to Knowledge checks to identify supernatural creatures and their special abilities.',
        effects: [],
      },
      {
        name: 'Spirit Ofuda',
        level: 3,
        description:
          'At 3rd level, the yokai hunter can create paper talismans (ofuda) that function as protection from evil. He can create a number of ofuda per day equal to his Wisdom modifier. Each ofuda lasts for 1 minute per ranger level when activated.',
        effects: [],
      },
      {
        name: 'See the Unseen',
        level: 9,
        description:
          'At 9th level, the yokai hunter gains the ability to see invisible creatures and objects as the see invisibility spell. This ability functions continuously.',
        effects: [],
      },
      {
        name: 'Banishing Strike',
        level: 12,
        description:
          'At 12th level, once per day, the yokai hunter can channel spiritual energy into a weapon strike. If the attack hits an outsider or undead creature, the target must succeed on a Will save (DC 10 + half ranger level + Wisdom modifier) or be banished to its home plane or destroyed.',
        effects: [],
      },
    ],
    source: 'Dragon Empires Primer',
  },

  // ──────────────────────────────────────────────
  // 30. Dandy
  // ──────────────────────────────────────────────
  {
    name: 'Dandy',
    className: 'Ranger',
    description:
      'A socialite and courtier, the dandy uses charm and social acumen rather than woodland expertise, navigating courts and high society as deftly as other rangers traverse the wilds.',
    replacedFeatures: [
      'Wild Empathy',
      'Endurance',
      'Woodland Stride',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: ['Favored Terrain (becomes Favored Society)'],
    newFeatures: [
      {
        name: 'Favored Society',
        level: 3,
        description:
          'At 3rd level, the dandy selects a specific social circle (e.g., nobility, military, merchants). He gains a +2 bonus on Bluff, Diplomacy, Intimidate, Knowledge (nobility), and Sense Motive checks when interacting with members of that society. This bonus increases at 8th, 13th, and 18th levels.',
        effects: [],
      },
      {
        name: 'Charming',
        level: 1,
        description:
          'The dandy adds half his level (minimum 1) to Diplomacy and Bluff checks to influence humanoids. This replaces wild empathy.',
        effects: [],
      },
      {
        name: 'Social Grace',
        level: 3,
        description:
          'At 3rd level, the dandy can move through a crowd without penalty and gains a +4 bonus on Sense Motive checks to detect lies or hidden motives.',
        effects: [],
      },
      {
        name: 'Hidden Blade',
        level: 12,
        description:
          'At 12th level, the dandy can hide weapons on his person with a Sleight of Hand check, even against magical detection. Opponents never consider the dandy armed unless they succeed on a Perception check opposed by his Sleight of Hand.',
        effects: [],
      },
      {
        name: 'Master Manipulator',
        level: 17,
        description:
          'At 17th level, the dandy can use suggestion as a spell-like ability (CL equals ranger level) a number of times per day equal to his Wisdom modifier.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 31. Flamewarden
  // ──────────────────────────────────────────────
  {
    name: 'Flamewarden',
    className: 'Ranger',
    description:
      'A ranger devoted to combating undead and evil creatures through the purifying power of fire, the flamewarden channels flame through his weapons and abilities.',
    replacedFeatures: ["Hunter's Bond", 'Endurance', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Flaming Weapons',
        level: 4,
        description:
          'At 4th level, as a swift action, the flamewarden can imbue his weapons with fire for 1 round per ranger level per day. His weapons deal an additional 1d6 fire damage. At 12th level, this increases to 2d6.',
        effects: [],
      },
      {
        name: 'Fire Resistance',
        level: 3,
        description:
          'At 3rd level, the flamewarden gains fire resistance 5. This increases to 10 at 9th level and 20 at 15th level.',
        effects: [],
      },
      {
        name: 'Burning Resolve',
        level: 9,
        description:
          'At 9th level, the flamewarden is immune to fear effects and gains a +4 morale bonus on saving throws against death effects.',
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 32. Galvanic Saboteur
  // ──────────────────────────────────────────────
  {
    name: 'Galvanic Saboteur',
    className: 'Ranger',
    description:
      'Trained to combat constructs and technological threats, the galvanic saboteur specializes in disabling mechanical foes and sabotaging enemy equipment.',
    replacedFeatures: ['Wild Empathy', 'Woodland Stride', 'Camouflage'],
    modifiedFeatures: ['Favored Enemy (must select constructs first)'],
    newFeatures: [
      {
        name: 'Disable Construct',
        level: 1,
        description:
          'The galvanic saboteur gains Disable Device as a class skill and adds half his level (minimum 1) to Disable Device checks against traps, mechanical devices, and constructs.',
        effects: [],
      },
      {
        name: 'Disruptive Attack',
        level: 3,
        description:
          'At 3rd level, when the galvanic saboteur confirms a critical hit against a construct, the construct must succeed on a Fortitude save (DC 10 + half ranger level + Wisdom modifier) or be staggered for 1d4 rounds.',
        effects: [],
      },
      {
        name: 'Construct Sense',
        level: 12,
        description:
          'At 12th level, the galvanic saboteur can detect constructs within 60 feet, as the detect undead spell but applicable to constructs.',
        effects: [],
      },
    ],
    source: 'Technology Guide',
  },

  // ──────────────────────────────────────────────
  // 33. Hooded Champion
  // ──────────────────────────────────────────────
  {
    name: 'Hooded Champion',
    className: 'Ranger',
    description:
      'A vigilante of the wilds, the hooded champion is a skilled archer who uses panache and grit-like abilities to perform daring deeds with a bow.',
    replacedFeatures: [
      'Combat Style Feat 2nd',
      'Combat Style Feat 6th',
      'Combat Style Feat 10th',
      'Combat Style Feat 14th',
      'Combat Style Feat 18th',
      'Endurance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Panache',
        level: 1,
        description:
          'The hooded champion gains a panache pool equal to his Wisdom modifier (minimum 1). He regains panache when he reduces a creature to 0 or fewer hit points with a bow or when he confirms a critical hit with a bow.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 2,
        description:
          'At 2nd level, the hooded champion gains deeds similar to a swashbuckler but using a bow. He gains Derring-Do (add 1d6 to Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim checks), Dodging Panache (+2 dodge bonus to AC as an immediate action), and Precise Shot (spend 1 panache to ignore soft cover on ranged attacks).',
        effects: [],
      },
      {
        name: 'Improved Deeds',
        level: 6,
        description:
          'At 6th level, the hooded champion gains additional deeds: Covering Fire (spend 1 panache to grant an ally +2 AC against ranged attacks) and Pinpoint Targeting (spend 1 panache to resolve an attack against touch AC).',
        effects: [],
      },
      {
        name: 'Greater Deeds',
        level: 14,
        description:
          'At 14th level, the hooded champion gains advanced deeds including Arrow of Justice (spend 2 panache to bypass all DR on an arrow attack) and Rain of Arrows (spend 3 panache to attack all enemies in a 20-foot radius).',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 34. Ilsurian Archer
  // ──────────────────────────────────────────────
  {
    name: 'Ilsurian Archer',
    className: 'Ranger',
    description:
      'Trained in the archery traditions of the city of Ilsurie, these rangers are peerless marksmen who blend martial archery techniques with ranger skills.',
    replacedFeatures: ['Wild Empathy', "Hunter's Bond", 'Evasion'],
    modifiedFeatures: ['Combat Style Feats (must choose archery)'],
    newFeatures: [
      {
        name: "Archer's Focus",
        level: 1,
        description:
          'At 1st level, the Ilsurian archer can designate a single target as a move action. Against that target, he gains a +1 competence bonus on attack rolls with bows. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Trick Shots',
        level: 4,
        description:
          'At 4th level, the Ilsurian archer can perform combat maneuvers with his bow at range, including disarm, sunder, and trip. He uses his attack bonus in place of his CMB for these maneuvers.',
        effects: [],
      },
      {
        name: 'Master Archer',
        level: 9,
        description:
          'At 9th level, the Ilsurian archer ignores the first range increment penalty on all bow attacks. He also gains evasion when wearing light or no armor.',
        effects: [],
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 35. Sentinel
  // ──────────────────────────────────────────────
  {
    name: 'Sentinel',
    className: 'Ranger',
    description:
      "A watchful guardian who specializes in defending a location, the sentinel gains powerful defensive abilities but sacrifices some of the ranger's offensive versatility.",
    replacedFeatures: [
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      'Quarry',
      'Improved Quarry',
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Guardian Stance',
        level: 5,
        description:
          'At 5th level, as a swift action, the sentinel can enter a defensive stance. While in this stance, he gains a +2 dodge bonus to AC and a +2 bonus on saving throws. He cannot move more than 5 feet per round while in this stance. This bonus increases by +1 at 10th, 15th, and 20th levels.',
        effects: [],
      },
      {
        name: 'Stalwart',
        level: 11,
        description:
          'At 11th level, the sentinel can use mental and physical resiliency to avoid certain attacks. If he succeeds on a Fortitude or Will save against an effect that normally has a partial effect on a successful save, the sentinel instead avoids the effect entirely.',
        effects: [],
      },
      {
        name: 'Unyielding Defense',
        level: 19,
        description:
          'At 19th level, while in his guardian stance, the sentinel gains DR 5/- and cannot be moved from his position against his will by any effect short of a wish or miracle spell.',
        effects: [],
      },
      {
        name: 'Unshakable',
        level: 20,
        description:
          'At 20th level, the sentinel is immune to fear, paralysis, and stun effects while in his guardian stance.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 36. Trophy Hunter (Giantslayer)
  // ──────────────────────────────────────────────
  {
    name: 'Giantslayer',
    className: 'Ranger',
    description:
      'Trained specifically to combat giants and other massive foes, the giantslayer uses agility and precision to bring down creatures far larger than himself.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: ['Favored Enemy (must select giants first)'],
    newFeatures: [
      {
        name: 'Giant Killer',
        level: 1,
        description:
          'A giantslayer gains a +1 dodge bonus to AC and a +1 bonus on Reflex saves against attacks and effects from creatures at least two size categories larger than him. These bonuses increase by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Hamstring',
        level: 3,
        description:
          "At 3rd level, when the giantslayer confirms a critical hit against a creature larger than himself, the target's land speed is reduced by 10 feet (minimum 5 feet) for 1d4 rounds.",
        effects: [],
      },
      {
        name: 'Topple the Giant',
        level: 7,
        description:
          'At 7th level, the giantslayer can attempt a trip combat maneuver against a creature up to three size categories larger than himself, rather than the normal limit of one size category larger.',
        effects: [],
      },
    ],
    source: "Giantslayer Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 37. Beastkin Berserker
  // ──────────────────────────────────────────────
  {
    name: 'Beastkin Berserker',
    className: 'Ranger',
    description:
      'Drawing on a primal connection to bestial fury, the beastkin berserker melds rage and shapeshifting with ranger combat abilities.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Feral Rage',
        level: 1,
        description:
          'At 1st level, the beastkin berserker gains the ability to rage as a barbarian of his level -3 (minimum 1). While raging, he gains two claw attacks (1d4 for Medium, 1d3 for Small) in addition to his normal attacks.',
        effects: [],
      },
      {
        name: 'Beast Shape',
        level: 4,
        description:
          'At 4th level, while raging, the beastkin berserker partially transforms, gaining an animalistic feature: +2 natural armor, a bite attack (1d6), or a climb or swim speed of 30 feet. At 10th level, he gains two features at once.',
        effects: [],
      },
      {
        name: 'Savage Predator',
        level: 20,
        description:
          'At 20th level, while raging, the beastkin berserker can use beast shape III as a swift action. His natural attacks while in beast shape have a critical threat range of 18-20.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 38. Boundary Walker
  // ──────────────────────────────────────────────
  {
    name: 'Boundary Walker',
    className: 'Ranger',
    description:
      'A planar explorer, the boundary walker patrols the borders between the Material Plane and other dimensions, guarding against extraplanar incursion.',
    replacedFeatures: [
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Woodland Stride',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Favored Plane',
        level: 3,
        description:
          'At 3rd level, the boundary walker selects a plane of existence as a favored plane. He gains a +2 bonus on Knowledge (planes), Perception, Stealth, and Survival checks while on that plane. He selects additional favored planes at 8th, 13th, and 18th levels.',
        effects: [],
      },
      {
        name: 'Planar Shift',
        level: 7,
        description:
          'At 7th level, the boundary walker can plane shift to or from one of his favored planes once per day. At 12th level, he can do this twice per day.',
        effects: [],
      },
      {
        name: 'Dimensional Step',
        level: 12,
        description:
          'At 12th level, the boundary walker can use dimension door as a spell-like ability a number of times per day equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Planar Concealment',
        level: 17,
        description:
          'At 17th level, the boundary walker can use Stealth to hide from extraplanar senses, including blindsight, tremorsense, and true seeing, while on one of his favored planes.',
        effects: [],
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 39. Toxicologist
  // ──────────────────────────────────────────────
  {
    name: 'Toxicologist',
    className: 'Ranger',
    description:
      'An expert in venoms and poisons, the toxicologist uses natural toxins to weaken and incapacitate his quarry, combining ranger tracking with alchemical knowledge.',
    replacedFeatures: ['Endurance', 'Wild Empathy', 'Woodland Stride'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Poison Use',
        level: 1,
        description:
          'A toxicologist is trained in the use of poison and cannot accidentally poison himself when applying poison to a weapon.',
        effects: [],
      },
      {
        name: 'Toxic Agent',
        level: 1,
        description:
          'The toxicologist adds half his level (minimum 1) to Craft (alchemy) checks to create poisons. He can also harvest venom from slain creatures with a successful Survival check.',
        effects: [],
      },
      {
        name: 'Envenom Weapon',
        level: 3,
        description:
          'At 3rd level, as a swift action, the toxicologist can apply a dose of poison to a weapon without provoking an attack of opportunity. Poisons he applies last for a number of strikes equal to his Wisdom modifier (minimum 1) instead of just one.',
        effects: [],
      },
      {
        name: 'Improved Toxin',
        level: 7,
        description:
          'At 7th level, the save DC of poisons the toxicologist crafts or applies increases by +2. At 14th level, this bonus increases to +4.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 40. Venture Captain
  // ──────────────────────────────────────────────
  {
    name: 'Venture Captain',
    className: 'Ranger',
    description:
      'An experienced explorer and expedition leader, the venture captain excels at guiding groups through dangerous territory and adapting to new challenges.',
    replacedFeatures: ['Wild Empathy', "Hunter's Bond", 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Expedition Leader',
        level: 1,
        description:
          'The venture captain adds half his level (minimum 1) to Survival checks to avoid getting lost and to Knowledge (geography) checks. Allies within 30 feet gain half this bonus on the same checks.',
        effects: [],
      },
      {
        name: "Explorer's Bond",
        level: 4,
        description:
          'At 4th level, the venture captain can share his favored terrain bonuses with all allies within 30 feet. The allies receive the full bonus, and the venture captain retains his own bonus.',
        effects: [],
      },
      {
        name: 'Adaptive Explorer',
        level: 9,
        description:
          'At 9th level, the venture captain can spend 10 minutes studying a new environment to treat it as a favored terrain for 24 hours, gaining a +2 bonus. He can do this once per day, plus one additional time per day at 14th level.',
        effects: [],
      },
    ],
    source: 'Pathfinder Society Primer',
  },

  // ──────────────────────────────────────────────
  // 41. Wave Warden
  // ──────────────────────────────────────────────
  {
    name: 'Wave Warden',
    className: 'Ranger',
    description:
      'A ranger of the seas and coastlines, the wave warden patrols aquatic environments and specializes in combating sea-borne threats.',
    replacedFeatures: ['Woodland Stride', 'Endurance', 'Camouflage', 'Hide in Plain Sight'],
    modifiedFeatures: ['Favored Terrain (must select water first)'],
    newFeatures: [
      {
        name: 'Aquatic Prowess',
        level: 1,
        description:
          'The wave warden gains a swim speed equal to half his base land speed. He can hold his breath for a number of rounds equal to 4 times his Constitution score.',
        effects: [],
      },
      {
        name: 'Wave Strike',
        level: 3,
        description:
          'At 3rd level, the wave warden takes no penalty on attack rolls or damage rolls while fighting underwater. His ranged attacks function normally underwater to a range of 30 feet.',
        effects: [],
      },
      {
        name: "Ocean's Cloak",
        level: 12,
        description:
          'At 12th level, the wave warden can use Stealth in any aquatic environment, even without cover or concealment, as long as he is in or adjacent to a body of water.',
        effects: [],
      },
      {
        name: 'Lord of the Waves',
        level: 17,
        description:
          'At 17th level, the wave warden gains the ability to breathe water, a swim speed equal to his full land speed, and freedom of movement while in water as a constant effect.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 42. Wandering Marksman
  // ──────────────────────────────────────────────
  {
    name: 'Wandering Marksman',
    className: 'Ranger',
    description:
      'A traveling sharpshooter, the wandering marksman uses ranged combat expertise combined with ranger skills to bring down foes at extreme distances.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Evasion'],
    modifiedFeatures: ['Combat Style Feats (must choose archery or crossbow)'],
    newFeatures: [
      {
        name: 'Deadeye',
        level: 1,
        description:
          'At 1st level, the wandering marksman can add his Wisdom modifier to damage rolls with ranged attacks made within his first range increment.',
        effects: [],
      },
      {
        name: 'Focused Aim',
        level: 3,
        description:
          'At 3rd level, as a move action, the wandering marksman can aim at a target within line of sight. His next ranged attack against that target ignores cover (but not total cover) and gains a +2 circumstance bonus to the attack roll.',
        effects: [],
      },
      {
        name: 'Called Shot',
        level: 9,
        description:
          'At 9th level, the wandering marksman can make a called shot as a standard action without the normal -5 penalty. He can spend a full-round action to make a called shot at only a -2 penalty.',
        effects: [],
      },
    ],
    source: 'Ranged Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 43. Cinderwalker
  // ──────────────────────────────────────────────
  {
    name: 'Cinderwalker',
    className: 'Ranger',
    description:
      'A ranger adapted to volcanic and fiery environments, the cinderwalker traverses ash wastes and molten landscapes with ease.',
    replacedFeatures: ['Woodland Stride', 'Endurance', 'Camouflage'],
    modifiedFeatures: ['Favored Terrain (must select desert or mountain first)'],
    newFeatures: [
      {
        name: 'Firewalker',
        level: 3,
        description:
          'At 3rd level, the cinderwalker gains fire resistance 5 and can move through volcanic or burning terrain without penalty. At 8th level, this fire resistance increases to 10.',
        effects: [],
      },
      {
        name: 'Ash Shroud',
        level: 3,
        description:
          'At 3rd level, the cinderwalker can use ash and smoke to conceal himself. He gains a +4 bonus on Stealth checks in areas of smoke, ash, or volcanic terrain.',
        effects: [],
      },
      {
        name: 'Ember Sight',
        level: 12,
        description:
          'At 12th level, the cinderwalker can see through smoke, ash, and volcanic gases without penalty. He also gains darkvision 60 feet if he does not already have it.',
        effects: [],
      },
    ],
    source: 'People of the Wastes',
  },

  // ──────────────────────────────────────────────
  // 44. Warcat Handler
  // ──────────────────────────────────────────────
  {
    name: 'Warcat Handler',
    className: 'Ranger',
    description:
      'A ranger of Murraseth who bonds with a large feline companion, the warcat handler trains alongside great cats as partner combatants.',
    replacedFeatures: ["Hunter's Bond", 'Wild Empathy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Warcat Companion',
        level: 1,
        description:
          "At 1st level, the warcat handler gains a large cat animal companion (cheetah, leopard, lion, or tiger). The cat functions as a druid animal companion using the ranger's level as his effective druid level. He gains a +2 bonus on Handle Animal checks with felines.",
        effects: [],
      },
      {
        name: 'Feline Empathy',
        level: 1,
        description:
          'The warcat handler can improve the attitude of felines, functioning as wild empathy but only applying to cat-type animals and magical beasts.',
        effects: [],
      },
      {
        name: 'Pack Tactics',
        level: 4,
        description:
          'At 4th level, when the warcat handler and his companion both threaten the same enemy, they each gain a +2 bonus on attack rolls against that enemy. This stacks with the flanking bonus.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 45. Transporter
  // ──────────────────────────────────────────────
  {
    name: 'Transporter',
    className: 'Ranger',
    description:
      'A specialist in moving goods and people through dangerous terrain, the transporter focuses on protecting his charges and reaching destinations safely.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      "Hunter's Bond",
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Danger Sense',
        level: 1,
        description:
          'At 1st level, the transporter gains a +1 bonus on initiative checks and a +1 bonus on Reflex saves to avoid traps or natural hazards. These bonuses increase by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Protective Bond',
        level: 4,
        description:
          'At 4th level, the transporter can designate a number of charges equal to his Wisdom modifier. His charges gain half of his favored terrain bonus to AC and Reflex saves while within 30 feet of him.',
        effects: [],
      },
      {
        name: 'Safe Passage',
        level: 10,
        description:
          'At 10th level, the transporter and his charges cannot be tracked through his favored terrain. They also gain a +4 bonus on Survival checks to avoid natural hazards.',
        effects: [],
      },
      {
        name: 'Deliver the Goods',
        level: 20,
        description:
          'At 20th level, the transporter and all allies within 30 feet cannot be surprised. Additionally, once per day, the transporter can teleport himself and his charges up to 1 mile to a location he has previously visited.',
        effects: [],
      },
    ],
    source: 'Heroes of the Streets',
  },

  // ──────────────────────────────────────────────
  // 46. Wilderness Medic
  // ──────────────────────────────────────────────
  {
    name: 'Wilderness Medic',
    className: 'Ranger',
    description:
      'A healer of the wild, the wilderness medic combines ranger survival skills with medical knowledge to tend to the wounded in remote environments.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Combat Medic',
        level: 1,
        description:
          'The wilderness medic gains Heal as a class skill and adds half his level (minimum 1) to all Heal checks. He can use Heal to provide first aid as a move action instead of a standard action.',
        effects: [],
      },
      {
        name: 'Natural Remedies',
        level: 3,
        description:
          'At 3rd level, the wilderness medic can create natural remedies from the environment. He can create a number of herbal poultices per day equal to his Wisdom modifier. Each poultice heals 1d8 + his Wisdom modifier hit points. At 8th level, each heals 2d8 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Poison Treatment',
        level: 9,
        description:
          'At 9th level, the wilderness medic can use the Heal skill to neutralize poisons and diseases in a patient as if using neutralize poison or remove disease (CL equals ranger level).',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 47. Terrainwalker (Arctic)
  // ──────────────────────────────────────────────
  {
    name: 'Frozen Shadow',
    className: 'Ranger',
    description:
      'An arctic specialist, the frozen shadow is a ranger who hunts in frozen wastelands, using the cold and ice to his advantage.',
    replacedFeatures: ['Woodland Stride', 'Endurance', 'Camouflage'],
    modifiedFeatures: ['Favored Terrain (must select cold first)'],
    newFeatures: [
      {
        name: 'Cold Resistance',
        level: 3,
        description:
          'At 3rd level, the frozen shadow gains cold resistance 5. This increases to 10 at 8th level and 20 at 13th level.',
        effects: [],
      },
      {
        name: 'Ice Walker',
        level: 3,
        description:
          'At 3rd level, the frozen shadow can move across icy surfaces without penalty and cannot be tripped or knocked prone on ice. He leaves no trail on snow or ice and cannot be tracked in such environments.',
        effects: [],
      },
      {
        name: 'Snow Shroud',
        level: 12,
        description:
          'At 12th level, the frozen shadow can use Stealth to hide in any snowy or icy environment, even without cover or concealment.',
        effects: [],
      },
    ],
    source: 'People of the North',
  },

  // ──────────────────────────────────────────────
  // 48. Dragon Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Dragon Hunter',
    className: 'Ranger',
    description:
      'Trained to track and slay dragons, the dragon hunter combines knowledge of draconic lore with specialized combat techniques for fighting winged reptilian foes.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: ['Favored Enemy (must select dragons first)'],
    newFeatures: [
      {
        name: 'Dragonlore',
        level: 1,
        description:
          'The dragon hunter adds half his level (minimum 1) to Knowledge (arcana) checks to identify dragons and their abilities. He can make such checks untrained.',
        effects: [],
      },
      {
        name: 'Breath Evasion',
        level: 3,
        description:
          'At 3rd level, the dragon hunter gains a +2 bonus on Reflex saves against breath weapons. If he succeeds on a Reflex save against a breath weapon for half damage, he instead takes no damage. At 9th level, this functions as improved evasion against breath weapons.',
        effects: [],
      },
      {
        name: 'Wing Clipper',
        level: 7,
        description:
          'At 7th level, when the dragon hunter confirms a critical hit against a flying creature, the target must succeed on a Fortitude save (DC 10 + half ranger level + Strength modifier) or have its fly speed reduced by half for 1d4 rounds.',
        effects: [],
      },
    ],
    source: "Dragonslayer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 49. Sword-Devil
  // ──────────────────────────────────────────────
  {
    name: 'Sword-Devil',
    className: 'Ranger',
    description:
      'A whirlwind of blades, the sword-devil focuses on aggressive two-weapon fighting, sacrificing defense for devastating offense.',
    replacedFeatures: [
      'Endurance',
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Evasion',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: ['Combat Style Feats (must choose two-weapon fighting)'],
    newFeatures: [
      {
        name: "Sword Devil's Grace",
        level: 3,
        description:
          'At 3rd level, when wearing light or no armor and wielding two melee weapons, the sword-devil adds 1 point of his Dexterity bonus (if any) to damage rolls. This increases by 1 for every 4 levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Arcing Slash',
        level: 3,
        description:
          'At 3rd level, when the sword-devil hits with both weapons on the same target in one round, he deals an additional 1d6 damage. This increases by 1d6 at 8th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 9,
        description:
          'At 9th level, the sword-devil cannot be caught flat-footed and does not lose his Dexterity bonus to AC against invisible attackers.',
        effects: [],
      },
      {
        name: 'Whirlwind of Steel',
        level: 17,
        description:
          'At 17th level, once per day as a full-round action, the sword-devil can make a single attack at his highest base attack bonus against every creature within his reach.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 50. Blightwarden
  // ──────────────────────────────────────────────
  {
    name: 'Blightwarden',
    className: 'Ranger',
    description:
      'A ranger devoted to protecting nature from corruption and unnatural blights, the blightwarden combats aberrations, fungi, and sources of environmental decay.',
    replacedFeatures: ['Wild Empathy', 'Woodland Stride', 'Evasion'],
    modifiedFeatures: ['Favored Enemy (must select aberrations or plants first)'],
    newFeatures: [
      {
        name: 'Blight Sense',
        level: 1,
        description:
          'The blightwarden can detect areas of unnatural corruption or blight within 60 feet. He gains a +2 bonus on Perception and Survival checks to detect traps or hazards created by aberrations, oozes, or fungi.',
        effects: [],
      },
      {
        name: 'Resist Corruption',
        level: 3,
        description:
          'At 3rd level, the blightwarden gains a +2 bonus on saving throws against disease, poison, and the special abilities of aberrations and plant creatures. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Purifying Strike',
        level: 9,
        description:
          "At 9th level, the blightwarden's weapons are treated as if they had the bane property against aberrations and evil plant creatures for a number of rounds per day equal to his ranger level.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 51. Spell Breaker
  // ──────────────────────────────────────────────
  {
    name: 'Spell Breaker',
    className: 'Ranger',
    description:
      'A ranger trained to counter spellcasters, the spell breaker specializes in disrupting magic and hunting arcane and divine practitioners.',
    replacedFeatures: ['Wild Empathy', 'Woodland Stride', 'Evasion', 'Camouflage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Arcane Hunter',
        level: 1,
        description:
          'The spell breaker gains Spellcraft as a class skill and adds half his level (minimum 1) to Spellcraft checks to identify spells being cast.',
        effects: [],
      },
      {
        name: 'Disruptive',
        level: 3,
        description:
          'At 3rd level, the spell breaker gains Disruptive as a bonus feat, even if he does not meet the prerequisites. The DC to cast defensively increases by 4 for enemies he threatens.',
        effects: [],
      },
      {
        name: 'Spellkiller',
        level: 7,
        description:
          'At 7th level, the spell breaker gains Spellbreaker as a bonus feat. He can make attacks of opportunity against creatures that fail concentration checks while casting defensively in his threatened area.',
        effects: [],
      },
      {
        name: 'Antimagic Strike',
        level: 12,
        description:
          'At 12th level, once per day the spell breaker can make a strike that functions as a targeted dispel magic against one spell effect on the target (CL equals ranger level). At 17th level, he can use this twice per day.',
        effects: [],
      },
    ],
    source: 'Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 52. Darklands Tracker
  // ──────────────────────────────────────────────
  {
    name: 'Darklands Tracker',
    className: 'Ranger',
    description:
      'Specializing in the lightless reaches beneath the surface, the Darklands tracker navigates underground caverns and hunts denizens of the deep.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: ['Favored Terrain (must select underground first)'],
    newFeatures: [
      {
        name: 'Darkvision',
        level: 1,
        description:
          'At 1st level, the Darklands tracker gains darkvision 60 feet. If he already has darkvision, the range increases by 30 feet.',
        effects: [],
      },
      {
        name: 'Tunnel Runner',
        level: 3,
        description:
          'At 3rd level, the Darklands tracker can move through narrow passages, squeezes, and tunnels without penalty. He is never considered flat-footed while moving through such environments.',
        effects: [],
      },
      {
        name: 'Subterranean Awareness',
        level: 7,
        description:
          'At 7th level, the Darklands tracker gains tremorsense 15 feet while in contact with stone or earth. At 14th level, this increases to 30 feet.',
        effects: [],
      },
    ],
    source: 'Darklands Revisited',
  },

  // ──────────────────────────────────────────────
  // 53. Warden of the Wilds
  // ──────────────────────────────────────────────
  {
    name: 'Infiltrator (Vampire Hunter)',
    className: 'Ranger',
    description:
      'A ranger who specializes in hunting vampires and other blood-drinking undead, using knowledge of their weaknesses and entry-denial tactics.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: ['Favored Enemy (must select undead first)'],
    newFeatures: [
      {
        name: 'Vampire Lore',
        level: 1,
        description:
          'The vampire hunter adds half his level (minimum 1) to Knowledge (religion) checks to identify undead and their special abilities. He gains a +2 bonus on saving throws against the supernatural abilities of vampires.',
        effects: [],
      },
      {
        name: 'Threshold Guardian',
        level: 3,
        description:
          'At 3rd level, the vampire hunter can ward a building against undead entry. Spending 10 minutes to prepare wards on a structure creates a forbiddance effect against undead for 24 hours.',
        effects: [],
      },
      {
        name: 'Sunlight Strike',
        level: 7,
        description:
          'At 7th level, the vampire hunter can channel positive energy through his weapon attacks. Once per day per 5 ranger levels, his weapon attacks deal an additional 2d6 positive energy damage to undead for 1 round.',
        effects: [],
      },
    ],
    source: "Monster Hunter's Handbook",
  },

  // ──────────────────────────────────────────────
  // 54. Colluding Scoundrel
  // ──────────────────────────────────────────────
  {
    name: 'Colluding Scoundrel',
    className: 'Ranger',
    description:
      'A ranger who works best alongside allies, coordinating flanking maneuvers and leveraging teamwork feats to bring down foes.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      'Wild Empathy',
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Studied Target',
        level: 1,
        description:
          'At 1st level, the colluding scoundrel can study a target as a move action. He gains a +1 bonus on Bluff, Disguise, Intimidate, Knowledge, Perception, Sense Motive, and Survival checks against that target, as well as a +1 on attack and damage rolls. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Teamwork Feats',
        level: 1,
        description:
          'At 1st level and every 4 levels thereafter, the colluding scoundrel gains a bonus teamwork feat. As a swift action, he can grant one of his teamwork feats to all allies within 30 feet for a number of rounds equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Gang Up',
        level: 20,
        description:
          'At 20th level, the colluding scoundrel is always considered to be flanking any creature he threatens, as long as at least one ally also threatens that creature.',
        effects: [],
      },
    ],
    source: 'Villain Codex',
  },

  // ──────────────────────────────────────────────
  // 55. Elemental Envoy
  // ──────────────────────────────────────────────
  {
    name: 'Elemental Envoy',
    className: 'Ranger',
    description:
      'An envoy of the elemental planes, this ranger draws upon elemental power to augment his abilities and combat elemental threats.',
    replacedFeatures: [
      "Hunter's Bond",
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Elemental Affinity',
        level: 3,
        description:
          'At 3rd level, the elemental envoy selects an element (air, earth, fire, or water). He gains resistance 5 to the associated energy type (electricity, acid, fire, or cold). This resistance increases to 10 at 8th level and 20 at 13th level.',
        effects: [],
      },
      {
        name: 'Elemental Strike',
        level: 4,
        description:
          'At 4th level, as a swift action, the elemental envoy can imbue his weapon with elemental energy for 1 round per ranger level per day. His weapon deals an additional 1d6 energy damage of his chosen element.',
        effects: [],
      },
      {
        name: 'Elemental Body',
        level: 13,
        description:
          'At 13th level, the elemental envoy can assume an elemental form once per day as elemental body II (CL equals ranger level).',
        effects: [],
      },
      {
        name: 'Elemental Mastery',
        level: 18,
        description:
          'At 18th level, the elemental envoy becomes immune to his chosen energy type and can use elemental body IV once per day.',
        effects: [],
      },
    ],
    source: 'Planes of Power',
  },

  // ──────────────────────────────────────────────
  // 56. Trophy Hunter (Firearm variant - renamed)
  // ──────────────────────────────────────────────
  {
    name: 'Scatter Shot',
    className: 'Ranger',
    description:
      'A ranger trained in the use of scatter weapons and area-denial tactics, the scatter shot specializes in controlling the battlefield with firearm blasts.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride', 'Evasion'],
    modifiedFeatures: ['Combat Style Feats (adds firearm combat style)'],
    newFeatures: [
      {
        name: 'Scatter Mastery',
        level: 1,
        description:
          'The scatter shot is proficient with all firearms and gains a +1 bonus on attack rolls with scatter weapons. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Suppressing Fire',
        level: 3,
        description:
          'At 3rd level, as a standard action, the scatter shot can fire a scatter weapon to suppress a 15-foot cone. Creatures in the area must succeed on a Will save (DC 10 + half ranger level + Wisdom modifier) or be shaken for 1 round.',
        effects: [],
      },
      {
        name: 'Improved Scatter',
        level: 9,
        description:
          'At 9th level, the scatter shot increases the range and area of his scatter weapons. The cone size increases by 5 feet and the misfire value decreases by 1 (minimum 0).',
        effects: [],
      },
    ],
    source: "Armor Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // 57. Espionage Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Espionage Ranger',
    className: 'Ranger',
    description:
      'Blending ranger skills with spy tradecraft, the espionage ranger operates in both wilderness and urban environments to gather intelligence and eliminate targets.',
    replacedFeatures: ['Wild Empathy', 'Woodland Stride', 'Camouflage', 'Hide in Plain Sight'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Covert Tracking',
        level: 1,
        description:
          'The espionage ranger can track a target through urban environments using Perception instead of Survival. He adds half his level (minimum 1) to Perception checks made to shadow a creature.',
        effects: [],
      },
      {
        name: 'Master of Disguise',
        level: 3,
        description:
          'At 3rd level, the espionage ranger gains a +4 bonus on Disguise checks and can don a disguise in half the normal time.',
        effects: [],
      },
      {
        name: 'Blend In',
        level: 12,
        description:
          'At 12th level, the espionage ranger can use Stealth in any environment, even without cover or concealment, as long as there are other creatures nearby to blend in with.',
        effects: [],
      },
      {
        name: 'Vanish',
        level: 17,
        description:
          'At 17th level, the espionage ranger can become invisible (as greater invisibility) for a number of rounds per day equal to his ranger level. These rounds need not be consecutive.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 58. Pest Controller
  // ──────────────────────────────────────────────
  {
    name: 'Pest Controller',
    className: 'Ranger',
    description:
      'A specialist in dealing with vermin and swarms, the pest controller protects communities from plagues of insects and other small but dangerous creatures.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: ['Favored Enemy (must select vermin first)'],
    newFeatures: [
      {
        name: 'Vermin Empathy',
        level: 1,
        description:
          'The pest controller can influence the behavior of vermin as if using wild empathy, even though vermin are normally mindless. He uses ranger level + Wisdom modifier for these checks.',
        effects: [],
      },
      {
        name: 'Swarm Resistance',
        level: 3,
        description:
          'At 3rd level, the pest controller gains a +2 bonus on saving throws against distraction and the special abilities of swarms. He takes half damage from swarm attacks. At 8th level, he becomes immune to distraction and takes no damage from swarm attacks.',
        effects: [],
      },
      {
        name: 'Swarm Bane',
        level: 7,
        description:
          "At 7th level, the pest controller's weapon attacks can deal full damage to swarms, regardless of the swarm's normal weapon immunity.",
        effects: [],
      },
    ],
    source: 'Animal Archive',
  },

  // ──────────────────────────────────────────────
  // 59. Season Sage
  // ──────────────────────────────────────────────
  {
    name: 'Season Sage',
    className: 'Ranger',
    description:
      'Attuned to the cycle of the seasons, the season sage draws different abilities from the current season, adapting his powers to the time of year.',
    replacedFeatures: [
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Season's Blessing",
        level: 3,
        description:
          'At 3rd level, the season sage gains a benefit based on the current season: Spring grants fast healing 1 in natural environments; Summer grants +2 attack and damage with fire effects; Autumn grants +2 on saves against enchantment and illusion; Winter grants cold resistance 10.',
        effects: [],
      },
      {
        name: 'Seasonal Shift',
        level: 8,
        description:
          "At 8th level, the season sage can change his active season's blessing to any season as a standard action. This lasts for 1 minute per ranger level and can be used a number of times per day equal to his Wisdom modifier.",
        effects: [],
      },
      {
        name: 'Eternal Season',
        level: 13,
        description:
          'At 13th level, the season sage can maintain the benefits of two seasons simultaneously.',
        effects: [],
      },
      {
        name: 'Lord of All Seasons',
        level: 18,
        description:
          'At 18th level, the season sage gains the benefits of all four seasons simultaneously.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 60. Chameleon
  // ──────────────────────────────────────────────
  {
    name: 'Chameleon',
    className: 'Ranger',
    description:
      'A master of camouflage and deception, the chameleon ranger adapts to any environment with supernatural speed, blending in wherever he goes.',
    replacedFeatures: [
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Wild Empathy',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Adaptive Camouflage',
        level: 1,
        description:
          'At 1st level, the chameleon gains a +4 bonus on Stealth checks. After spending 1 minute observing a new environment, this bonus increases to +6.',
        effects: [],
      },
      {
        name: 'Terrain Adaptation',
        level: 3,
        description:
          'At 3rd level, after spending 1 hour in a new terrain, the chameleon treats it as a favored terrain with a +2 bonus. This does not stack with actual favored terrain bonuses. The adaptation lasts until he enters a new terrain type.',
        effects: [],
      },
      {
        name: 'Blend',
        level: 8,
        description:
          'At 8th level, the chameleon can use Stealth even while being observed, as long as he is within 10 feet of terrain that matches his current adaptation.',
        effects: [],
      },
      {
        name: 'Perfect Copy',
        level: 13,
        description:
          'At 13th level, the chameleon can perfectly mimic the appearance of his surroundings. He is invisible (as invisibility) as long as he remains still. Moving breaks the effect, but he can reactivate it as a swift action.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 61. Bekyar Kidnapper
  // ──────────────────────────────────────────────
  {
    name: 'Bekyar Kidnapper',
    className: 'Ranger',
    description:
      'A Bekyar kidnapper is a ranger from the Bekyar tribes of the Mwangi Expanse who specializes in capturing prey alive, using entangling techniques and knowledge of humanoids.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Evasion'],
    modifiedFeatures: ['Favored Enemy (must select humanoids first)'],
    newFeatures: [
      {
        name: 'Snare Expertise',
        level: 1,
        description:
          'A Bekyar kidnapper gains a +2 bonus on combat maneuver checks to grapple and on Craft checks to create snares and nets. He can use a net or bolas as if he had the Exotic Weapon Proficiency feat.',
        effects: [],
      },
      {
        name: 'Take Alive',
        level: 3,
        description:
          'At 3rd level, the Bekyar kidnapper can designate one target per round as his capture target. When striking that target with a weapon attack, he can choose to deal nonlethal damage without the normal -4 penalty on the attack roll.',
        effects: [],
      },
      {
        name: 'Efficient Capture',
        level: 7,
        description:
          'At 7th level, the Bekyar kidnapper can maintain a grapple as a move action instead of a standard action. He also gains a +4 bonus on Survival checks to track humanoids.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 62. Bog Strider
  // ──────────────────────────────────────────────
  {
    name: 'Bog Strider',
    className: 'Ranger',
    description:
      'A bog strider is a ranger who has mastered the murky wetlands and treacherous bogs, moving effortlessly through swamps while hunting those who venture into his territory.',
    replacedFeatures: ['Woodland Stride', 'Endurance', 'Camouflage'],
    modifiedFeatures: ['Favored Terrain (must select swamp first)'],
    newFeatures: [
      {
        name: 'Bog Movement',
        level: 3,
        description:
          'At 3rd level, the bog strider can move through bogs, quicksand, and other swamp terrain at normal speed without penalty. He gains a swim speed of 15 feet.',
        effects: [],
      },
      {
        name: 'Mire Sense',
        level: 3,
        description:
          'At 3rd level, the bog strider gains a +4 bonus on Perception checks while in swamp terrain and cannot be surprised in his favored swamp terrain.',
        effects: [],
      },
      {
        name: 'Swamp Lurker',
        level: 12,
        description:
          'At 12th level, the bog strider can use Stealth to hide in swamp environments even without cover or concealment, and can remain submerged in shallow water indefinitely while maintaining Stealth.',
        effects: [],
      },
    ],
    source: 'People of the River',
  },

  // ──────────────────────────────────────────────
  // 63. Border Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Border Guardian',
    className: 'Ranger',
    description:
      'A ranger tasked with patrolling and defending a specific border or frontier, the border guardian develops exceptional awareness and defensive capabilities to repel invaders.',
    replacedFeatures: ["Hunter's Bond", 'Endurance', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Border Knowledge',
        level: 1,
        description:
          'A border guardian selects a specific border region. He gains a +2 bonus on Perception and Survival checks within 30 miles of that border. He always knows when creatures cross the border he guards, as if under a constant alarm spell in that area.',
        effects: [],
      },
      {
        name: 'Defensive Bond',
        level: 4,
        description:
          'At 4th level, the border guardian can grant allies within 30 feet his favored terrain bonus as a move action for a number of rounds equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Rapid Response',
        level: 9,
        description:
          'At 9th level, the border guardian can always act in a surprise round while in his border region, and gains a +4 bonus on initiative checks there.',
        effects: [],
      },
      {
        name: 'Inviolable Border',
        level: 20,
        description:
          'At 20th level, the border guardian can designate a 1-mile-radius area as inviolable once per day. Favored enemies in that area are automatically detected by the border guardian, and he gains a +4 morale bonus on all attacks and saves within it for 24 hours.',
        effects: [],
      },
    ],
    source: 'Lands of Conflict',
  },

  // ──────────────────────────────────────────────
  // 64. Bushcrafter
  // ──────────────────────────────────────────────
  {
    name: 'Bushcrafter',
    className: 'Ranger',
    description:
      'A ranger who excels at wilderness survival and crafting tools from natural materials, the bushcrafter can thrive indefinitely in the wild, fashioning everything needed from the environment.',
    replacedFeatures: ['Wild Empathy', "Hunter's Bond", 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Craft Expertise',
        level: 1,
        description:
          'A bushcrafter gains Craft (traps), Craft (weapons), and Survival as class skills and adds half his level (minimum 1) to all three. He can create improvised weapons and simple traps from natural materials in the wild without raw materials, treating the wild as if he had materials of up to 10 gp value per ranger level.',
        effects: [],
      },
      {
        name: 'Improvised Weapons',
        level: 3,
        description:
          'At 3rd level, the bushcrafter does not take the -4 penalty for attacking with improvised weapons. Improvised weapons he crafts are treated as masterwork for attack purposes.',
        effects: [],
      },
      {
        name: 'Natural Shelter',
        level: 7,
        description:
          'At 7th level, the bushcrafter can construct a shelter in 1 hour that protects against weather and provides a +4 bonus on saves against environmental hazards for all occupants. The shelter can house a number of Medium creatures equal to his ranger level.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 65. Desert Shadow
  // ──────────────────────────────────────────────
  {
    name: 'Desert Shadow',
    className: 'Ranger',
    description:
      'A ranger who uses the blinding heat, mirages, and featureless expanses of the desert to his advantage, the desert shadow is nearly impossible to track or detect in arid environments.',
    replacedFeatures: ['Woodland Stride', 'Camouflage', 'Hide in Plain Sight'],
    modifiedFeatures: ['Favored Terrain (must select desert first)'],
    newFeatures: [
      {
        name: 'Heat Shimmer',
        level: 3,
        description:
          'At 3rd level, the desert shadow can use the heat distortion of desert environments to conceal himself. He gains a +4 bonus on Stealth checks in desert terrain. At 8th level, this increases to +8.',
        effects: [],
      },
      {
        name: 'Mirage',
        level: 7,
        description:
          'At 7th level, once per day the desert shadow can create a visual illusion in desert terrain as minor image (CL equals ranger level), using only the heat and light of the desert.',
        effects: [],
      },
      {
        name: 'Desert Ambush',
        level: 12,
        description:
          'At 12th level, the desert shadow can hide in desert terrain even while being observed, as the hide in plain sight ability, but only in desert environments.',
        effects: [],
      },
    ],
    source: 'People of the Sands',
  },

  // ──────────────────────────────────────────────
  // 66. Dune Drifter
  // ──────────────────────────────────────────────
  {
    name: 'Dune Drifter',
    className: 'Ranger',
    description:
      'A nomadic ranger of the great deserts, the dune drifter combines desert survival expertise with mounted combat skills suited to sandy wastelands.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride', 'Evasion'],
    modifiedFeatures: ['Favored Terrain (must select desert first)'],
    newFeatures: [
      {
        name: 'Desert Rider',
        level: 1,
        description:
          'A dune drifter gains a camel or horse as a mount at 1st level, functioning as a druid animal companion at his ranger level. He gains Mounted Combat as a bonus feat and does not take penalties from desert heat on Ride checks.',
        effects: [],
      },
      {
        name: 'Sand Stride',
        level: 3,
        description:
          'At 3rd level, the dune drifter and his mount can move across loose sand and dunes at normal movement rate. He also gains heat endurance, requiring no checks against hot environments.',
        effects: [],
      },
      {
        name: 'Wind Rider',
        level: 9,
        description:
          'At 9th level, the dune drifter and his mount gain a +4 bonus on saves against blinding, the effects of sandstorms and severe wind, and the supernatural abilities of creatures native to desert environments.',
        effects: [],
      },
    ],
    source: 'People of the Sands',
  },

  // ──────────────────────────────────────────────
  // 67. Feral Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Feral Hunter',
    className: 'Ranger',
    description:
      'A ranger who has largely abandoned civilization and lives as an animal, the feral hunter relies on primal instincts and natural weapons rather than crafted tools.',
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Feral Focus',
        level: 1,
        description:
          'At 1st level, the feral hunter gains low-light vision, the scent ability, and two claw attacks (1d4 for Medium). He can make these claw attacks in addition to any weapon attacks he makes.',
        effects: [],
      },
      {
        name: 'Pack Leader',
        level: 4,
        description:
          "At 4th level, the feral hunter can attract a pack of animals as his hunter's bond. He gains an animal companion as a druid of his level, plus up to two additional animals of the same species as lesser companions (functioning as animal companions at ranger level -4).",
        effects: [],
      },
      {
        name: 'Primal Senses',
        level: 9,
        description:
          'At 9th level, the feral hunter gains blindsense 30 feet and tremorsense 10 feet. He can track by scent, ignoring visual concealment of tracked creatures.',
        effects: [],
      },
      {
        name: 'Apex Predator',
        level: 20,
        description:
          "At 20th level, the feral hunter's natural attacks are treated as epic for the purposes of overcoming damage reduction. He gains a pounce ability, allowing a full attack at the end of a charge.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 68. Greenbond
  // ──────────────────────────────────────────────
  {
    name: 'Greenbond',
    className: 'Ranger',
    description:
      'A ranger who forges a spiritual connection with the living forest, the greenbond acts as a voice for the wilderness and gains power from his bond with plant life.',
    replacedFeatures: ["Hunter's Bond", 'Endurance', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Forest Bond',
        level: 4,
        description:
          'At 4th level, the greenbond forms a spiritual connection with the plant life around him. While in a natural forested or jungle environment, he gains fast healing 1 for each of his favored terrain types that includes forest, as plants channel vitality into him.',
        effects: [],
      },
      {
        name: 'Woodland Communion',
        level: 4,
        description:
          'At 4th level, the greenbond can communicate empathically with plant creatures and gains speak with plants as a spell-like ability usable a number of times per day equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Green Guardian',
        level: 9,
        description:
          'At 9th level, the greenbond can animate plants in his favored terrain as a standard action, as the animate plants spell (CL equals ranger level). He can use this a number of times per day equal to his Wisdom modifier.',
        effects: [],
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 69. Island Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Island Ranger',
    className: 'Ranger',
    description:
      'Adapted to life on isolated island environments, the island ranger is equally skilled at navigating both jungle terrain and coastal waters.',
    replacedFeatures: ['Endurance', 'Woodland Stride', 'Evasion'],
    modifiedFeatures: ['Favored Terrain (must select aquatic or coastal terrain first)'],
    newFeatures: [
      {
        name: 'Island Adaptation',
        level: 1,
        description:
          'An island ranger gains a swim speed of 15 feet and a climb speed of 15 feet. He can hold his breath for a number of rounds equal to 4 times his Constitution score. He gains a +2 bonus on Survival checks on islands and coastal terrain.',
        effects: [],
      },
      {
        name: 'Coastwatcher',
        level: 3,
        description:
          'At 3rd level, the island ranger can predict weather within 24 hours with a DC 15 Survival check. He gains a +4 bonus on Perception checks to spot ships, sea creatures, or approaching threats from coastal vantage points.',
        effects: [],
      },
      {
        name: 'Sea Legs',
        level: 7,
        description:
          'At 7th level, the island ranger is never penalized for fighting on unstable surfaces such as ship decks, floating platforms, or crashing waves. He gains evasion while in or adjacent to water.',
        effects: [],
      },
    ],
    source: 'Isles of the Shackles',
  },

  // ──────────────────────────────────────────────
  // 70. Keeper of the Current
  // ──────────────────────────────────────────────
  {
    name: 'Keeper of the Current',
    className: 'Ranger',
    description:
      'A guardian of rivers, streams, and waterways, the keeper of the current patrols aquatic passages and protects the communities that depend on them.',
    replacedFeatures: ['Woodland Stride', 'Endurance', 'Camouflage', 'Hide in Plain Sight'],
    modifiedFeatures: ['Favored Terrain (must select aquatic first)'],
    newFeatures: [
      {
        name: 'Current Mastery',
        level: 3,
        description:
          'At 3rd level, the keeper of the current gains a swim speed of 30 feet and can breathe water for a number of rounds per day equal to his ranger level. These rounds need not be consecutive.',
        effects: [],
      },
      {
        name: 'Aquatic Tracking',
        level: 3,
        description:
          'At 3rd level, the keeper of the current can track creatures through water without penalty and can follow the trail of a creature that has swum through water for up to 24 hours.',
        effects: [],
      },
      {
        name: "River's Wrath",
        level: 12,
        description:
          'At 12th level, once per day the keeper of the current can call upon the force of the river. This creates a 30-foot line of rushing water dealing 6d6 bludgeoning damage (Reflex DC 10 + half ranger level + Wisdom modifier for half) and pushing creatures 10 feet downstream.',
        effects: [],
      },
    ],
    source: 'People of the River',
  },

  // ──────────────────────────────────────────────
  // 71. Monster Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Monster Hunter',
    className: 'Ranger',
    description:
      'An expert at identifying and exploiting the weaknesses of monstrous creatures, the monster hunter adds specialized knowledge and lore about specific creature types to his arsenal.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Monster Lore',
        level: 1,
        description:
          'A monster hunter adds half his level (minimum 1) to all Knowledge checks to identify creatures and their special powers or vulnerabilities. He can make Knowledge checks untrained to identify any creature type.',
        effects: [],
      },
      {
        name: 'Creature Sense',
        level: 3,
        description:
          'At 3rd level, when a monster hunter successfully identifies a creature with a Knowledge check, he gains a +2 insight bonus on attack and damage rolls against that creature type for 24 hours. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Exploit Weakness',
        level: 9,
        description:
          'At 9th level, when the monster hunter successfully identifies a creature, he can as a swift action designate one special attack or defense of that creature. He gains a +4 bonus on saves against that ability, and his attacks ignore any damage reduction the creature possesses (but not energy resistance).',
        effects: [],
      },
    ],
    source: "Monster Hunter's Handbook",
  },

  // ──────────────────────────────────────────────
  // 72. Mountaineer
  // ──────────────────────────────────────────────
  {
    name: 'Mountaineer',
    className: 'Ranger',
    description:
      'A specialist in high-altitude environments, the mountaineer excels at climbing, surviving harsh conditions, and fighting in difficult vertical terrain.',
    replacedFeatures: ['Endurance', 'Woodland Stride', 'Camouflage'],
    modifiedFeatures: ['Favored Terrain (must select mountain first)'],
    newFeatures: [
      {
        name: 'Sure Climber',
        level: 3,
        description:
          'At 3rd level, the mountaineer gains a climb speed of 20 feet and can always take 10 on Climb checks, even when rushed or threatened. He is not flat-footed while climbing.',
        effects: [],
      },
      {
        name: 'Alpine Endurance',
        level: 3,
        description:
          'At 3rd level, the mountaineer gains the Endurance feat as a bonus feat and also gains immunity to altitude sickness and a +4 bonus on Fortitude saves against the effects of extreme cold.',
        effects: [],
      },
      {
        name: 'High Ground Fighter',
        level: 7,
        description:
          'At 7th level, when the mountaineer is on higher ground than his opponent, he gains an additional +2 bonus on attack rolls and a +2 bonus to his AC. He does not take penalties for fighting on sloped or uneven terrain.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 73. Nomadic Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Nomadic Ranger',
    className: 'Ranger',
    description:
      'A wandering ranger without a fixed home, the nomadic ranger adapts quickly to new environments and is never at a disadvantage in unfamiliar terrain.',
    replacedFeatures: [
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Camouflage',
      'Hide in Plain Sight',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Adaptable Terrain',
        level: 3,
        description:
          'At 3rd level, the nomadic ranger gains a +1 bonus on all Survival checks, regardless of terrain. After spending 24 hours in any terrain type, he treats that terrain as a favored terrain with a +2 bonus for the next 7 days. He can maintain this temporary familiarity with a number of terrains equal to his Wisdom modifier simultaneously.',
        effects: [],
      },
      {
        name: 'Wide Wanderer',
        level: 8,
        description:
          'At 8th level, the adaptable terrain bonus increases to +4, and the nomadic ranger can establish familiarity with a new terrain in 1 hour instead of 24 hours.',
        effects: [],
      },
      {
        name: 'At Home Everywhere',
        level: 13,
        description:
          'At 13th level, the nomadic ranger treats any terrain he has visited before as a favored terrain indefinitely. He also gains the ability to always find shelter and clean water in any natural environment.',
        effects: [],
      },
    ],
    source: 'Pathfinder Society Field Guide',
  },

  // ──────────────────────────────────────────────
  // 74. Orc Killer
  // ──────────────────────────────────────────────
  {
    name: 'Orc Killer',
    className: 'Ranger',
    description:
      'A ranger from communities besieged by orcs, the orc killer has devoted himself to destroying this savage menace and protecting his people.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: ['Favored Enemy (must select humanoids [orc] first)'],
    newFeatures: [
      {
        name: 'Blood Vengeance',
        level: 1,
        description:
          'An orc killer gains a +2 morale bonus on attack and damage rolls against orcs when any ally has been injured in the current combat. This bonus stacks with his favored enemy bonus.',
        effects: [],
      },
      {
        name: 'Death Before Dishonor',
        level: 3,
        description:
          'At 3rd level, the orc killer gains a +2 bonus on Will saves against fear effects and the supernatural abilities of orcs and half-orcs. He cannot be shaken while adjacent to an orc he has designated as his favored enemy target.',
        effects: [],
      },
      {
        name: 'Orc Slaying Strike',
        level: 9,
        description:
          'At 9th level, once per day the orc killer can make a slaying strike. If the attack hits an orc, the orc must succeed on a Fortitude save (DC 10 + half ranger level + Strength modifier) or be slain instantly.',
        effects: [],
      },
    ],
    source: 'Orcs of Golarion',
  },

  // ──────────────────────────────────────────────
  // 75. Planar Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Planar Ranger',
    className: 'Ranger',
    description:
      'A ranger who extends his hunting grounds beyond the Material Plane, the planar ranger is a tracker of outsiders and planar entities across multiple dimensions.',
    replacedFeatures: [
      'Favored Terrain 1st',
      'Favored Terrain 2nd',
      'Favored Terrain 3rd',
      'Favored Terrain 4th',
      'Woodland Stride',
      'Camouflage',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Favored Plane',
        level: 3,
        description:
          'At 3rd level, the planar ranger selects a plane of existence as a favored plane, gaining all the benefits of favored terrain while on that plane. He gains additional favored planes at 8th, 13th, and 18th levels.',
        effects: [],
      },
      {
        name: 'Planar Knowledge',
        level: 1,
        description:
          'A planar ranger gains Knowledge (planes) as a class skill and adds half his level (minimum 1) to Knowledge (planes) checks. He can identify outsiders and extraplanar creatures with a DC 10 check.',
        effects: [],
      },
      {
        name: 'Planar Tracking',
        level: 7,
        description:
          'At 7th level, the planar ranger can track creatures across planar boundaries. After a creature uses plane shift, gate, or similar travel, the ranger can follow its trail for 24 hours as if it had traveled normally.',
        effects: [],
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 76. Polar Strider
  // ──────────────────────────────────────────────
  {
    name: 'Polar Strider',
    className: 'Ranger',
    description:
      'A ranger of the frozen north, the polar strider traverses ice sheets and arctic wastes, hunting prey across the endless white expanse.',
    replacedFeatures: ['Endurance', 'Woodland Stride', 'Evasion'],
    modifiedFeatures: ['Favored Terrain (must select cold first)'],
    newFeatures: [
      {
        name: 'Arctic Native',
        level: 1,
        description:
          'A polar strider gains cold resistance 5 and the Endurance feat as a bonus feat. He takes no penalties from cold weather or icy terrain and leaves no tracks on snow or ice.',
        effects: [],
      },
      {
        name: 'Ice Mastery',
        level: 3,
        description:
          'At 3rd level, the polar strider can move across ice and snow at full speed without Acrobatics checks. He also gains a +4 bonus on Perception checks to spot creatures or hazards in snowy conditions.',
        effects: [],
      },
      {
        name: 'Cold Blood',
        level: 9,
        description:
          'At 9th level, the polar strider gains cold resistance 20. He also gains a +2 bonus on attack and damage rolls against creatures with the cold subtype.',
        effects: [],
      },
      {
        name: 'Blizzard Survivor',
        level: 17,
        description:
          'At 17th level, the polar strider becomes immune to cold. He can also see clearly through snow, sleet, and blizzard conditions.',
        effects: [],
      },
    ],
    source: 'People of the North',
  },

  // ──────────────────────────────────────────────
  // 77. River Warden
  // ──────────────────────────────────────────────
  {
    name: 'River Warden',
    className: 'Ranger',
    description:
      'A river warden patrols the great rivers of the Inner Sea, combining aquatic skills with ranger expertise to protect riverways from pirates and monsters.',
    replacedFeatures: ['Woodland Stride', 'Camouflage', 'Hide in Plain Sight'],
    modifiedFeatures: ['Favored Terrain (must select aquatic first)'],
    newFeatures: [
      {
        name: 'River Expertise',
        level: 1,
        description:
          'A river warden gains Profession (sailor) and Knowledge (geography) as class skills and adds half his level (minimum 1) to both. He can swim in medium armor without penalty.',
        effects: [],
      },
      {
        name: 'Aquatic Combat',
        level: 3,
        description:
          'At 3rd level, the river warden suffers no penalties on attack rolls while fighting in or under water. He gains a swim speed of 20 feet.',
        effects: [],
      },
      {
        name: 'Underwater Ambush',
        level: 12,
        description:
          'At 12th level, the river warden can use Stealth to hide while fully submerged in water, even without cover. He may launch an ambush attack from beneath the surface, treating the target as flat-footed on the first attack of a surprise round.',
        effects: [],
      },
    ],
    source: 'People of the River',
  },

  // ──────────────────────────────────────────────
  // 78. Shadow Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Ranger',
    className: 'Ranger',
    description:
      'A ranger who has learned to use shadows and darkness as weapons, the shadow ranger is a master of stealth who strikes from concealment and fades back into the dark.',
    replacedFeatures: ['Wild Empathy', 'Endurance', 'Woodland Stride'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shadow Blend',
        level: 1,
        description:
          'A shadow ranger gains a +4 bonus on Stealth checks while in dim light or darkness. He can move at his full speed while using Stealth without penalty.',
        effects: [],
      },
      {
        name: 'Dark Vision',
        level: 3,
        description:
          'At 3rd level, the shadow ranger gains darkvision 60 feet. If he already has darkvision, the range increases by 30 feet.',
        effects: [],
      },
      {
        name: 'Shadow Strike',
        level: 7,
        description:
          'At 7th level, when the shadow ranger attacks a creature that is denied its Dexterity bonus to AC or is flanked, his attack deals an additional 2d6 precision damage. This increases by 1d6 at 12th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'One with Shadow',
        level: 12,
        description:
          'At 12th level, the shadow ranger can Hide in Plain Sight while in any area of dim light or darkness, functioning as the hide in plain sight class ability.',
        effects: [],
      },
    ],
    source: 'Agents of Evil',
  },

  // ──────────────────────────────────────────────
  // 79. Shore Strider
  // ──────────────────────────────────────────────
  {
    name: 'Shore Strider',
    className: 'Ranger',
    description:
      'A ranger of coastlines, tidal zones, and beaches, the shore strider is equally at home on land and in shallow water, patrolling the boundary between sea and shore.',
    replacedFeatures: ['Endurance', 'Woodland Stride', 'Camouflage'],
    modifiedFeatures: ['Favored Terrain (must select aquatic or coastal terrain first)'],
    newFeatures: [
      {
        name: 'Tidal Expert',
        level: 3,
        description:
          'At 3rd level, the shore strider can move through shallow water and surf at normal speed without penalty. He gains a swim speed of 15 feet and takes no penalties on attack rolls made in shallow water (up to waist depth).',
        effects: [],
      },
      {
        name: 'Shoreline Stealth',
        level: 3,
        description:
          'At 3rd level, the shore strider gains a +4 bonus on Stealth checks made in coastal terrain. He can hide in coastal terrain even while being observed, as long as he is adjacent to the waterline.',
        effects: [],
      },
      {
        name: 'Riptide Maneuver',
        level: 7,
        description:
          'At 7th level, once per combat the shore strider can use the power of water to assist a combat maneuver. When in or adjacent to water, he adds his favored terrain bonus to any single CMB check.',
        effects: [],
      },
    ],
    source: 'Isles of the Shackles',
  },

  // ──────────────────────────────────────────────
  // 80. Spell Ambusher
  // ──────────────────────────────────────────────
  {
    name: 'Spell Ambusher',
    className: 'Ranger',
    description:
      'A ranger who combines his knowledge of magic with ambush tactics, the spell ambusher uses his limited spellcasting to set up devastating surprise attacks.',
    replacedFeatures: ['Wild Empathy', "Hunter's Bond", 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ambush Spells',
        level: 4,
        description:
          'At 4th level, the spell ambusher can cast ranger spells with a casting time of 1 standard action as a swift action when he is hidden from the target. Doing so does not break his Stealth.',
        effects: [],
      },
      {
        name: 'Improved Ambush Spells',
        level: 8,
        description:
          'At 8th level, if the spell ambusher successfully hits a creature with a spell while hidden, that creature is flat-footed against his next melee or ranged attack within the same round.',
        effects: [],
      },
      {
        name: 'Arcane Ambush',
        level: 12,
        description:
          'At 12th level, when the spell ambusher casts a spell that deals damage while hidden, the spell deals an additional +1d6 precision damage per spell level.',
        effects: [],
      },
    ],
    source: 'Magic Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 81. Subterranean Ranger
  // ──────────────────────────────────────────────
  {
    name: 'Subterranean Ranger',
    className: 'Ranger',
    description:
      'A specialist in underground environments, the subterranean ranger is an expert at navigating caverns, Darklands passages, and underground ecosystems.',
    replacedFeatures: ['Wild Empathy', 'Woodland Stride', 'Camouflage'],
    modifiedFeatures: ['Favored Terrain (must select underground first)'],
    newFeatures: [
      {
        name: 'Underground Expert',
        level: 1,
        description:
          'A subterranean ranger gains darkvision 60 feet and adds Knowledge (dungeoneering) to his class skills with a +2 bonus. He gains a +2 bonus on Perception checks to locate unusual stonework and secret doors.',
        effects: [],
      },
      {
        name: 'Tunnel Fighter',
        level: 3,
        description:
          'At 3rd level, the subterranean ranger does not take penalties when fighting in cramped conditions. He threatens all adjacent squares even when using a two-handed weapon in a small space.',
        effects: [],
      },
      {
        name: 'Stone Sense',
        level: 9,
        description:
          'At 9th level, the subterranean ranger gains tremorsense 15 feet while in contact with stone or earth. He can navigate underground without light as effectively as in daylight.',
        effects: [],
      },
    ],
    source: "Dungeoneer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 82. Sword and Pistol
  // ──────────────────────────────────────────────
  {
    name: 'Sword and Pistol',
    className: 'Ranger',
    description:
      'Combining a melee weapon with a firearm, the sword and pistol ranger is a versatile combatant who fires at distance and finishes foes up close.',
    replacedFeatures: ['Wild Empathy', 'Endurance', "Hunter's Bond"],
    modifiedFeatures: [
      'Combat Style Feats (adds combination fighting style with firearm and melee)',
    ],
    newFeatures: [
      {
        name: 'Firearm Familiarity',
        level: 1,
        description:
          'A sword and pistol ranger is proficient with all firearms. He gains the Amateur Gunslinger feat as a bonus feat and gains a grit pool equal to his Wisdom modifier.',
        effects: [],
      },
      {
        name: "Pistolero's Expertise",
        level: 3,
        description:
          'At 3rd level, the sword and pistol ranger can draw a firearm as a free action and does not provoke attacks of opportunity when firing within a threatened square.',
        effects: [],
      },
      {
        name: 'Combined Arms',
        level: 9,
        description:
          'At 9th level, when the sword and pistol ranger hits with both a melee attack and a firearm attack against the same target in the same round, he deals an additional 2d6 points of damage.',
        effects: [],
      },
    ],
    source: "Adventurer's Armory 2",
  },

  // ──────────────────────────────────────────────
  // 83. Warden of the Rune
  // ──────────────────────────────────────────────
  {
    name: 'Warden of the Rune',
    className: 'Ranger',
    description:
      'A ranger trained in the ancient Thassilonian rune magic tradition, the warden of the rune uses runeplates and runic inscriptions to augment his hunting abilities.',
    replacedFeatures: ['Wild Empathy', "Hunter's Bond", 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Rune Expertise',
        level: 1,
        description:
          'A warden of the rune gains Linguistics (Thassilonian) as a class skill and can inscribe ranger spell effects into runeplates. Once per day, he can inscribe a runeplate with a ranger spell of 1st level. The runeplate activates when a designated trigger condition is met, as if the ranger had cast the spell.',
        effects: [],
      },
      {
        name: 'Expanded Runeplates',
        level: 5,
        description:
          "At 5th level and every 4 levels thereafter, the warden can create one additional runeplate per day and can inscribe spells of up to his maximum spell level. A creature carrying an active runeplate gains the spell's benefit when the trigger fires.",
        effects: [],
      },
      {
        name: 'Master of Runes',
        level: 14,
        description:
          'At 14th level, the warden of the rune can inscribe three runeplates per day and can create a runeplate that triggers on contact, dealing spell damage to the creature that triggers it.',
        effects: [],
      },
    ],
    source: 'Pathfinder Adventure Path #4 (Fortress of the Stone Giants)',
  },

  // ──────────────────────────────────────────────
  // 84. Wild Warden
  // ──────────────────────────────────────────────
  {
    name: 'Wild Warden',
    className: 'Ranger',
    description:
      "A ranger who acts as a living instrument of nature's will, the wild warden forms a mystical bond with a specific wilderness region and gains powers to protect it.",
    replacedFeatures: [
      'Favored Enemy 1st',
      'Favored Enemy 2nd',
      'Favored Enemy 3rd',
      'Favored Enemy 4th',
      'Favored Enemy 5th',
      "Hunter's Bond",
      'Master Hunter',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Warden's Bond",
        level: 1,
        description:
          'At 1st level, the wild warden selects a specific natural region as his warden territory. Within this territory (a 10-mile radius area) he gains a +4 bonus on all Perception, Survival, and Stealth checks. He always knows the general condition of his territory and can sense significant disruptions to the natural order within it.',
        effects: [],
      },
      {
        name: "Nature's Fury",
        level: 4,
        description:
          "At 4th level, three times per day the wild warden can call upon nature's fury within his warden territory. He can cast one of the following as a spell-like ability: entangle, sleet storm, or call lightning (CL equals ranger level).",
        effects: [],
      },
      {
        name: 'One with the Wild',
        level: 12,
        description:
          'At 12th level, within his warden territory the wild warden cannot be tracked, always wins initiative, and gains DR 5/— against attacks from those he has identified as despoilers of the natural world.',
        effects: [],
      },
      {
        name: 'Avatar of the Wild',
        level: 20,
        description:
          "At 20th level, once per day the wild warden can merge with the land, becoming the wilderness itself for 1 minute per ranger level. He is immune to all attacks, can perceive everything happening within his territory, and can use any of his nature's fury abilities as free actions.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 85. Divine Marksman
  // ──────────────────────────────────────────────
  {
    name: 'Divine Marksman',
    className: 'Ranger',
    description:
      'A divine marksman is a ranger who forgoes the normal connection to the natural world in favor of a divinely blessed precision with ranged weapons, channeling sacred energy into every shot.',
    replacedFeatures: [
      'Track',
      'Wild Empathy',
      'Spellcasting',
      'Swift Tracker',
      'Quarry',
      'Improved Quarry',
    ],
    modifiedFeatures: ['Combat Style Feats (must choose archery)'],
    newFeatures: [
      {
        name: 'Bullseye Shot',
        level: 1,
        description:
          'At 1st level, a divine marksman gains Bullseye Shot as a bonus feat, even if he does not meet the prerequisites.',
      },
      {
        name: 'Archery Style',
        level: 2,
        description:
          'At 2nd level, a divine marksman must select archery as his combat style. This modifies the combat style feat class feature.',
      },
      {
        name: 'Vicious Aim',
        level: 4,
        description:
          'At 4th level, a divine marksman adds half the highest favored enemy bonus he has earned to all ranged attack rolls and ranged damage rolls. This bonus does not stack with his favored enemy bonus against qualifying creatures. The divine marksman is not considered to have a caster level. This ability replaces all spellcasting.',
      },
      {
        name: 'Divine Influence',
        level: 8,
        description:
          'At 8th level, a divine marksman gains Weapon Focus (longsword) as a bonus feat. This ability replaces swift tracker.',
      },
      {
        name: 'Pinpoint Targeting',
        level: 11,
        description:
          'At 11th level, a divine marksman gains Pinpoint Targeting as a bonus feat, even if he does not meet the prerequisites. This ability replaces quarry.',
      },
      {
        name: 'Quarry (Delayed)',
        level: 19,
        description:
          'At 19th level, a divine marksman gains the quarry class feature, receiving it at 19th level instead of the normal 11th level. This ability replaces improved quarry.',
      },
    ],
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
  },
];
