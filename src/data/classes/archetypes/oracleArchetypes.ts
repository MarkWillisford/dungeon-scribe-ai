import { ArchetypeData, ClassFeatureData } from '../types';

export const ORACLE_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Ancient Lorekeeper
  // ──────────────────────────────────────────────
  {
    name: 'Ancient Lorekeeper',
    className: 'Oracle',
    description:
      'An elven oracle who draws on the long memory of her race to gain access to arcane secrets, adding wizard spells to her repertoire.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Elven Arcana',
        level: 1,
        description:
          'The ancient lorekeeper adds one spell from the sorcerer/wizard spell list to her oracle spells known at each oracle level. The spell must be at least one level lower than the highest-level oracle spell she can cast.',
      },
      {
        name: 'Arcane Archivist',
        level: 3,
        description:
          'At 3rd level, the ancient lorekeeper gains a +5 competence bonus on a single Knowledge check per day by consulting her collective memories. This replaces the revelation gained at 3rd level.',
      },
      {
        name: 'Wisdom of the Ancients',
        level: 7,
        description:
          'At 7th level, the ancient lorekeeper may take 20 on any Knowledge check once per day, even if not trained in that skill. This replaces the revelation gained at 7th level.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Black-Blooded Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Black-Blooded Oracle',
    className: 'Oracle',
    description:
      'Touched by the dark influence of black blood from the Darklands, this oracle gains resistances and powers tied to that strange substance.',
    replacedFeatures: ['Revelations (1st, 3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Black Blood',
        level: 1,
        description:
          'The oracle gains cold resistance 5 and is immune to the effects of black blood. Whenever she takes piercing or slashing damage, her black blood sprays outward, dealing 1d4 acid damage to adjacent creatures. This replaces the 1st-level revelation.',
      },
      {
        name: 'Black Blood Spray',
        level: 3,
        description:
          'At 3rd level, the oracle can channel her black blood as a ranged touch attack within 30 feet as a standard action, dealing 1d8 acid damage plus 1d8 per 4 oracle levels. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Abnormal Reach',
        level: 7,
        description:
          'At 7th level, the oracle can extend tendrils of black blood to increase her natural reach by 5 feet for a number of rounds per day equal to her oracle level. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 3. Community Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Community Guardian',
    className: 'Oracle',
    description:
      'A halfling oracle devoted to protecting her community, gaining abilities to shield allies and bolster their defenses.',
    replacedFeatures: ['Revelations (3rd, 7th, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Gather the Flock',
        level: 3,
        description:
          'At 3rd level, the community guardian can grant allies within 30 feet a +2 morale bonus on saving throws against fear effects for a number of rounds equal to her Charisma modifier. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Watchful Guardian',
        level: 7,
        description:
          'At 7th level, allies within 30 feet gain a +2 insight bonus to AC and CMD when the community guardian uses a move action to direct them. This lasts for 1 round and replaces the 7th-level revelation.',
      },
      {
        name: 'Rally the Flock',
        level: 15,
        description:
          'At 15th level, the community guardian can grant all allies within 30 feet temporary hit points equal to her oracle level and a +4 morale bonus on attack rolls for 1 round. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Halflings of Golarion',
  },

  // ──────────────────────────────────────────────
  // 4. Divine Herbalist
  // ──────────────────────────────────────────────
  {
    name: 'Divine Herbalist',
    className: 'Oracle',
    description:
      'A healer who combines divine magic with herbal remedies, gaining an herb-based healing touch and alchemical skills.',
    replacedFeatures: ['Revelations (1st)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Herbalist',
        level: 1,
        description:
          'The divine herbalist gains Heal as a class skill and can use her Charisma modifier instead of Wisdom on Heal checks. She also gains a competence bonus on Craft (alchemy) checks equal to half her oracle level (minimum 1).',
      },
      {
        name: 'Healing Herbs',
        level: 1,
        description:
          'The divine herbalist can create herbal remedies that duplicate the effects of her cure spells. She can create a number of remedies per day equal to her Charisma modifier, which last for 24 hours. This replaces the 1st-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 5. Dual-Cursed Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Dual-Cursed Oracle',
    className: 'Oracle',
    description:
      'Burdened by two oracle curses rather than one, the dual-cursed oracle gains unique revelations that manipulate fortune and fate.',
    replacedFeatures: ['Revelations (1st, 3rd, 7th)'],
    modifiedFeatures: ["Oracle's Curse"],
    newFeatures: [
      {
        name: 'Dual Curse',
        level: 1,
        description:
          "The oracle gains a second oracle's curse. She must choose a second curse at 1st level. She gains the 1st-level effect of the second curse but never advances its effects beyond 1st level. The first curse advances normally.",
      },
      {
        name: 'Misfortune',
        level: 1,
        description:
          'At 1st level, as an immediate action, the oracle can force a creature within 30 feet to reroll any one d20 roll and take the worse result. The target can negate this with a Will save. A creature can only be targeted by this once per day. This replaces the 1st-level revelation.',
      },
      {
        name: 'Fortune',
        level: 3,
        description:
          'At 3rd level, as an immediate action, the oracle can force a creature within 30 feet to reroll any one d20 roll and take the better result. A creature can only benefit from this once per day. This replaces the 3rd-level revelation.',
      },
      {
        name: "Accursed Spell (Su) - Oracle's Burden",
        level: 5,
        description:
          "The dual-cursed oracle adds oracle's burden to her spell list as a 5th-level spell. The target takes on the dual-cursed oracle's second curse for the duration.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 6. Enlightened Philosopher
  // ──────────────────────────────────────────────
  {
    name: 'Enlightened Philosopher',
    className: 'Oracle',
    description:
      'An oracle who approaches the mysteries of the divine through logic, reason, and philosophical inquiry rather than raw faith.',
    replacedFeatures: ['Mystery', 'Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Focused Trance',
        level: 1,
        description:
          'The enlightened philosopher gains access to the Lore mystery regardless of her actual mystery. She may choose revelations from either her mystery or the Lore mystery.',
      },
      {
        name: 'Mental Acuity',
        level: 3,
        description:
          'At 3rd level, the enlightened philosopher gains a +2 bonus on all saving throws against illusions, charm effects, and compulsion effects. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Clarity of Mind',
        level: 7,
        description:
          'At 7th level, the enlightened philosopher can reroll any failed Will saving throw once per day. She must take the result of the reroll. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 7. Hermit
  // ──────────────────────────────────────────────
  {
    name: 'Hermit',
    className: 'Oracle',
    description:
      'A reclusive oracle who has withdrawn from society, gaining survivalist abilities and deeper connection to her mystery through solitary contemplation.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Reclusive',
        level: 1,
        description:
          'The hermit gains Survival as a class skill and adds her Charisma modifier to Survival checks. She takes a -2 penalty on Diplomacy and Bluff checks made to influence those who are not close companions.',
      },
      {
        name: 'Fade from Memory',
        level: 3,
        description:
          'At 3rd level, the hermit becomes difficult to remember. Any creature that interacts with her must succeed on a Will save or forget about her within 1 hour. This replaces the 3rd-level revelation.',
      },
      {
        name: "Hermit's Insight",
        level: 7,
        description:
          'At 7th level, the hermit gains the ability to use augury once per day as a spell-like ability. At 11th level, she can use divination once per day. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 8. Inerrant Voice
  // ──────────────────────────────────────────────
  {
    name: 'Inerrant Voice',
    className: 'Oracle',
    description:
      'An oracle who serves as a mouthpiece for divine forces, delivering prophecies and pronouncements with unerring authority.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Voice of Authority',
        level: 1,
        description:
          'The inerrant voice adds her Charisma modifier to Intimidate checks and can demoralize a foe as a swift action. She gains Intimidate as a class skill. This replaces the 1st-level revelation.',
      },
      {
        name: 'Pronouncement of Fate',
        level: 7,
        description:
          "At 7th level, the inerrant voice can pronounce a doom upon a creature within 30 feet as a standard action. The target takes a -2 penalty on all d20 rolls for a number of rounds equal to the oracle's Charisma modifier (Will negates). This replaces the 7th-level revelation.",
      },
    ],
    source: 'Pathfinder Player Companion: Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 9. Lone Strider
  // ──────────────────────────────────────────────
  {
    name: 'Lone Strider',
    className: 'Oracle',
    description:
      'A wandering oracle who trades the company of allies for speed and independence, becoming a tireless traveler.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sure-Footed',
        level: 1,
        description:
          'The lone strider ignores the first 10 feet of difficult terrain each round and gains a +2 bonus on Acrobatics checks. She gains Acrobatics as a class skill.',
      },
      {
        name: 'Swift Travel',
        level: 3,
        description:
          'At 3rd level, the lone strider gains a +10-foot enhancement bonus to her base land speed. This bonus increases by +5 feet at 7th level and every 4 levels thereafter. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Uncanny Dodge',
        level: 7,
        description:
          'At 7th level, the lone strider gains uncanny dodge as the rogue ability. At 11th level, she gains improved uncanny dodge. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 10. Pei Zin Practitioner
  // ──────────────────────────────────────────────
  {
    name: 'Pei Zin Practitioner',
    className: 'Oracle',
    description:
      'A healer who blends divine magic with the traditions of Tian Xia herbalism, gaining the ability to brew healing teas and poultices.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Pei Zin Herbalism',
        level: 1,
        description:
          'The Pei Zin practitioner gains Heal and Knowledge (nature) as class skills. She can create herbal remedies that duplicate the effects of her cure spells, lasting 24 hours. She can create a number per day equal to her Charisma modifier. This replaces the 1st-level revelation.',
      },
      {
        name: 'Master Herbalist',
        level: 7,
        description:
          'At 7th level, the Pei Zin practitioner can prepare herbal remedies that duplicate remove disease, remove blindness/deafness, and neutralize poison. She gains a competence bonus equal to half her oracle level on Heal checks. This replaces the 7th-level revelation.',
      },
    ],
    source: "Pathfinder Player Companion: Healer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 11. Planar Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Planar Oracle',
    className: 'Oracle',
    description:
      'An oracle tied to the forces of the outer planes, gaining planar resistances and the ability to channel extraplanar energies.',
    replacedFeatures: ['Revelations (3rd, 7th, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Planar Resistance',
        level: 3,
        description:
          'At 3rd level, the planar oracle gains resistance 5 to two energy types associated with her chosen plane. At 11th level, these resistances increase to 10. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Planar Infusion',
        level: 7,
        description:
          'At 7th level, the planar oracle gains additional abilities tied to her chosen plane, such as energy damage on melee attacks or a fly speed, depending on the plane selected. This replaces the 7th-level revelation.',
      },
      {
        name: 'Planar Shift',
        level: 15,
        description:
          'At 15th level, the planar oracle can use plane shift as a spell-like ability once per day, targeting herself and willing creatures. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 12. Possessed Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Possessed Oracle',
    className: 'Oracle',
    description:
      'An oracle whose body plays host to an outside entity, which grants strange powers but occasionally seizes control.',
    replacedFeatures: ['Revelations (1st, 7th, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Two Minds',
        level: 1,
        description:
          'The possessed oracle gains a +2 bonus on Will saving throws against enchantment (compulsion) effects and mind-affecting effects. If she fails a save, she can attempt a new save at the start of her next turn. This replaces the 1st-level revelation.',
      },
      {
        name: 'Shared Skill',
        level: 1,
        description:
          'At 1st level, the possessing entity grants the oracle access to its own skills. The oracle chooses two additional class skills from the following: Bluff, Disguise, Intimidate, Knowledge (any), Perception, or Stealth.',
      },
      {
        name: 'Puppet Master',
        level: 7,
        description:
          'At 7th level, once per day the possessing entity can take over, granting the oracle a +4 enhancement bonus to one ability score for a number of rounds equal to her oracle level. However, the GM may have the entity take unexpected actions. This replaces the 7th-level revelation.',
      },
      {
        name: 'Spirit of Many',
        level: 15,
        description:
          'At 15th level, the oracle can channel the possessing entity to gain the benefit of haste for a number of rounds per day equal to her oracle level. These rounds need not be consecutive. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 13. Psychic Searcher
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Searcher',
    className: 'Oracle',
    description:
      'An oracle who uses her divine powers to enhance investigative skills, blending psychic impressions with divine revelation.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Inspiration',
        level: 1,
        description:
          'The psychic searcher gains an inspiration pool equal to half her oracle level + her Charisma modifier. She can use inspiration on Knowledge, Linguistics, and Spellcraft checks without expending a use. This functions as the investigator class feature. This replaces the 1st-level revelation.',
      },
      {
        name: 'Psychic Search',
        level: 7,
        description:
          'At 7th level, the psychic searcher can use psychometry as a spell-like ability at will, reading the psychic impressions left on objects and locations. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 14. Purifier
  // ──────────────────────────────────────────────
  {
    name: 'Purifier',
    className: 'Oracle',
    description:
      'A holy oracle dedicated to eradicating evil and corruption, gaining celestial powers and the ability to sense fiendish influence.',
    replacedFeatures: ["Oracle's Curse", 'Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Diminished Curse',
        level: 1,
        description:
          "The purifier's curse is less severe. She suffers only the effects of a 1st-level oracle's curse and it never improves, but she gains detect evil at will as a spell-like ability.",
      },
      {
        name: 'Celestial Armor',
        level: 3,
        description:
          'At 3rd level, the purifier gains a +2 sacred bonus to AC. This bonus increases by +1 for every 6 oracle levels beyond 3rd. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Purifying Flames',
        level: 7,
        description:
          'At 7th level, the purifier can channel purifying flames as a standard action, dealing 1d8 damage per 2 oracle levels to evil creatures in a 20-foot burst (Reflex half). Good creatures in the area are healed for half this amount. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 15. Ravener Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Ravener Hunter',
    className: 'Oracle',
    description:
      'An oracle who focuses on hunting the enemies of her faith, gaining combat abilities and slaying powers against specific foes.',
    replacedFeatures: ['Mystery', 'Revelations (1st, 3rd, 11th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Holy Stalker',
        level: 1,
        description:
          "The ravener hunter must select the battle, bones, flame, life, nature, stone, or waves mystery. She gains revelations from this mystery as normal. Additionally, she gains the inquisitor's stern gaze ability, adding half her oracle level to Intimidate and Sense Motive checks.",
      },
      {
        name: 'Combat Style',
        level: 1,
        description:
          'At 1st level, the ravener hunter selects a combat style from those available to rangers (such as archery or two-weapon combat). She gains a style feat from her chosen style at 1st, 3rd, and 11th levels without needing to meet prerequisites. These replace the revelations at those levels.',
      },
    ],
    source: 'Pathfinder Player Companion: Advanced Class Origins',
  },

  // ──────────────────────────────────────────────
  // 16. Seeker
  // ──────────────────────────────────────────────
  {
    name: 'Seeker',
    className: 'Oracle',
    description:
      'An oracle who combines divine magic with trapfinding and rogue-like skills, exploring ruins and dangerous sites in search of divine truth.',
    replacedFeatures: ['Revelations (3rd, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tinkering',
        level: 1,
        description:
          'The seeker gains Disable Device as a class skill. She adds half her oracle level on Perception checks to locate traps and on Disable Device checks (minimum +1). She can use Disable Device to disarm magical traps.',
      },
      {
        name: 'Seeker Lore',
        level: 3,
        description:
          'At 3rd level, the seeker gains a +2 bonus on Knowledge (arcana), Knowledge (history), and Knowledge (religion) checks and can make these checks untrained. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Seeker Magic',
        level: 15,
        description:
          'At 15th level, the seeker can add metamagic feats she knows to her spells without increasing casting time once per day per metamagic feat she knows. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 17. Shigenjo
  // ──────────────────────────────────────────────
  {
    name: 'Shigenjo',
    className: 'Oracle',
    description:
      'A Tian Xia tradition that blends divine oracle powers with monastic martial discipline, gaining ki abilities and unarmed combat training.',
    replacedFeatures: ['Revelations (1st, 7th, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ki Pool',
        level: 1,
        description:
          'The shigenjo gains a ki pool equal to half her oracle level + her Charisma modifier. She can spend ki points to gain a +4 dodge bonus to AC for 1 round or to add 20 feet to her base speed for 1 round. This replaces the 1st-level revelation.',
      },
      {
        name: 'Monastic Training',
        level: 1,
        description:
          'The shigenjo gains Improved Unarmed Strike as a bonus feat and deals unarmed damage as a monk of her oracle level - 4 (minimum 1st). She is proficient with monk weapons.',
      },
      {
        name: 'Ki Revelation',
        level: 7,
        description:
          'At 7th level, the shigenjo can spend 1 point from her ki pool to gain the benefit of a revelation she does not normally have for 1 minute. The revelation must be from her mystery and must be one she qualifies for. This replaces the 7th-level revelation.',
      },
      {
        name: 'Ki Mastery',
        level: 15,
        description:
          'At 15th level, the shigenjo can spend 2 ki points to cast restoration without material components or spend 3 ki points to cast heal once per day. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
  },

  // ──────────────────────────────────────────────
  // 18. Spirit Guide
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Guide',
    className: 'Oracle',
    description:
      'An oracle who forms a bond with a wandering spirit each day, gaining access to shaman spirit abilities and flexible hex-like powers.',
    replacedFeatures: ['Revelations (3rd, 7th, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bonded Spirit',
        level: 3,
        description:
          'At 3rd level, the spirit guide can form a temporary bond with a spirit from the shaman spirit list each day after 8 hours of rest. She gains the spirit ability of the chosen spirit. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Bonded Spirit Hex',
        level: 7,
        description:
          'At 7th level, the spirit guide gains a hex from the list available to her bonded spirit. She can change this hex each day when she selects her bonded spirit. This replaces the 7th-level revelation.',
      },
      {
        name: 'Greater Bonded Spirit',
        level: 15,
        description:
          'At 15th level, the spirit guide gains the greater spirit ability of her bonded spirit for the day. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 19. Stargazer
  // ──────────────────────────────────────────────
  {
    name: 'Stargazer',
    className: 'Oracle',
    description:
      'An oracle who reads omens in the movement of the stars, gaining divination abilities and cosmic insights tied to the heavens mystery.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Star Reading',
        level: 1,
        description:
          'The stargazer can spend 10 minutes observing the night sky (or meditating during the day) to gain an insight bonus equal to half her oracle level on one Knowledge, Perception, or Survival check within the next 24 hours. This replaces the 1st-level revelation.',
      },
      {
        name: 'Celestial Navigation',
        level: 7,
        description:
          'At 7th level, the stargazer cannot become lost and gains a +4 bonus on saving throws against confusion, daze, and stun effects. She can use her Charisma modifier on Survival checks in place of Wisdom. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 20. Warsighted
  // ──────────────────────────────────────────────
  {
    name: 'Warsighted',
    className: 'Oracle',
    description:
      'An oracle who channels her divine visions into martial prowess, gaining combat feats and weapon training through supernatural insight.',
    replacedFeatures: ['Revelations (1st, 7th, 11th, 15th, 19th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Martial Flexibility',
        level: 1,
        description:
          "The warsighted gains the brawler's martial flexibility class feature. She can use a move action to gain the benefit of a combat feat she does not possess for 1 minute. She gains uses per day equal to 3 + half her oracle level. This replaces the 1st-level revelation.",
      },
      {
        name: 'Weapon Training',
        level: 7,
        description:
          'At 7th level, the warsighted gains weapon training as the fighter class feature with one weapon group, gaining a +1 bonus on attack and damage rolls. This bonus increases by +1 at 11th, 15th, and 19th levels. At 11th level and each 4 levels after, she selects another weapon group. This replaces the revelations gained at 7th, 11th, 15th, and 19th levels.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 21. Ocean's Echo
  // ──────────────────────────────────────────────
  {
    name: "Ocean's Echo",
    className: 'Oracle',
    description:
      'A merfolk oracle who channels the power of the sea through song, gaining bardic performance-like abilities tied to the waves mystery.',
    replacedFeatures: ['Revelations (1st, 3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Inspiring Song',
        level: 1,
        description:
          "The ocean's echo gains a bardic performance ability (inspire courage) that functions as a bard of her oracle level. She can use this a number of rounds per day equal to 4 + her Charisma modifier, plus 2 additional rounds per oracle level. This replaces the 1st-level revelation.",
      },
      {
        name: 'Song of the Waves',
        level: 3,
        description:
          "At 3rd level, the ocean's echo gains inspire competence as the bardic performance. At 7th level, she gains suggestion. These replace the 3rd- and 7th-level revelations.",
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Sea',
  },

  // ──────────────────────────────────────────────
  // 22. Seer
  // ──────────────────────────────────────────────
  {
    name: 'Seer',
    className: 'Oracle',
    description:
      'An oracle with an unparalleled gift for divination, gaining the ability to cast divination spells with greater potency.',
    replacedFeatures: ['Revelations (3rd, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Natural Divination',
        level: 3,
        description:
          'At 3rd level, the seer gains augury as a spell-like ability once per day, plus an additional use at 7th level and every 4 levels thereafter. At 11th level, she can use divination instead. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Gift of Prophecy',
        level: 15,
        description:
          'At 15th level, the seer can add any divination spell from the cleric or wizard spell list to her spells known, provided she can cast spells of that level. She can have a maximum number of such spells equal to her Charisma modifier. This replaces the 15th-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 23. Cyclopean Seer
  // ──────────────────────────────────────────────
  {
    name: 'Cyclopean Seer',
    className: 'Oracle',
    description:
      'An oracle who draws upon the ancient prophetic traditions of the cyclopes, gaining flash of insight abilities and strange visions of the future.',
    replacedFeatures: ['Revelations (1st, 7th, 15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Flash of Insight',
        level: 1,
        description:
          'Once per day, the cyclopean seer can use flash of insight as an immediate action. She can replace any one d20 roll she just made with a result of 20. At 7th level and every 6 levels thereafter, she gains an additional daily use. This replaces the 1st-level revelation.',
      },
      {
        name: 'Assumed Fate',
        level: 7,
        description:
          'At 7th level, the cyclopean seer can touch a creature and absorb one condition or ongoing effect (such as nauseated or stunned), taking it upon herself. She can end the absorbed condition as a swift action. This replaces the 7th-level revelation.',
      },
      {
        name: 'Foreseen Conclusion',
        level: 15,
        description:
          'At 15th level, the cyclopean seer can use her flash of insight ability on any d20 roll made by a creature within 30 feet. This replaces the 15th-level revelation.',
      },
    ],
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
  },

  // ──────────────────────────────────────────────
  // 24. Elementalist Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Elementalist Oracle',
    className: 'Oracle',
    description:
      'An oracle who focuses purely on elemental power, gaining enhanced command over a chosen element at the cost of some mystical versatility.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: ['Mystery'],
    newFeatures: [
      {
        name: 'Elemental Focus',
        level: 1,
        description:
          'The elementalist oracle must choose the flame, stone, waves, or wind mystery. All variable-type energy damage she deals with oracle spells is converted to her elemental type (fire, acid, cold, or electricity respectively).',
      },
      {
        name: 'Elemental Resistance',
        level: 3,
        description:
          'At 3rd level, the elementalist oracle gains energy resistance 10 against her chosen element. At 11th level, this increases to 20. At 17th level, she gains immunity. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Elemental Movement',
        level: 7,
        description:
          'At 7th level, the elementalist oracle gains a movement mode tied to her element: flame grants +30 ft land speed, stone grants a burrow speed of 20 ft, waves grants a swim speed of 60 ft, and wind grants a fly speed of 60 ft. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Wastes',
  },

  // ──────────────────────────────────────────────
  // 25. Wasting Curse Oracle (Curator)
  // ──────────────────────────────────────────────
  {
    name: 'Curator',
    className: 'Oracle',
    description:
      'An oracle devoted to preserving knowledge and relics of the past, gaining abilities related to identifying and safeguarding objects and lore.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Relic Reader',
        level: 1,
        description:
          'The curator gains a +2 bonus on Appraise, Knowledge (history), and Use Magic Device checks. These all count as class skills for the curator.',
      },
      {
        name: 'Locate Object',
        level: 3,
        description:
          'At 3rd level, the curator can use locate object as a spell-like ability a number of times per day equal to her Charisma modifier. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Object Reading',
        level: 7,
        description:
          'At 7th level, the curator can use object reading (as the psychometry occult skill unlock) at will by handling an object for 1 minute. She uses her oracle level as her caster level. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Magical Marketplace',
  },

  // ──────────────────────────────────────────────
  // 26. Priest of the Fallen
  // ──────────────────────────────────────────────
  {
    name: 'Priest of the Fallen',
    className: 'Oracle',
    description:
      'An oracle who channels the power of dead or fallen deities, drawing upon the remnants of divine power that linger in the void.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: ["Oracle's Curse"],
    newFeatures: [
      {
        name: 'Fallen Grace',
        level: 1,
        description:
          "The priest of the fallen's curse manifests as an echo of a dead deity's portfolio. She gains a +2 bonus on Knowledge (religion) checks regarding dead deities and their former faiths. This replaces the 1st-level revelation.",
      },
      {
        name: 'Remnant Channel',
        level: 7,
        description:
          'At 7th level, the priest of the fallen can channel energy as a cleric of her oracle level - 3, using her Charisma modifier for the save DC. She can channel positive or negative energy based on her fallen deity. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 27. River Soul
  // ──────────────────────────────────────────────
  {
    name: 'River Soul',
    className: 'Oracle',
    description:
      'An oracle whose divine connection flows through rivers and waterways, granting water-based powers and aquatic adaptability.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Water Sight',
        level: 1,
        description:
          'The river soul can see through fog, mist, and murky water without penalty. She gains a swim speed equal to her base land speed. This replaces the 1st-level revelation.',
      },
      {
        name: "River's Blessing",
        level: 7,
        description:
          'At 7th level, the river soul can breathe water freely and gains cold resistance 10. She can speak with any aquatic creature as if using speak with animals. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Ancients',
  },

  // ──────────────────────────────────────────────
  // 28. Scion of the Wild
  // ──────────────────────────────────────────────
  {
    name: 'Scion of the Wild',
    className: 'Oracle',
    description:
      'An oracle attuned to primal wilderness spirits, gaining wild empathy and nature-based powers alongside her divine gifts.',
    replacedFeatures: ['Revelations (1st, 3rd)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The scion of the wild gains wild empathy as the druid class feature, using her oracle level as her druid level and Charisma in place of Charisma. This replaces the 1st-level revelation.',
      },
      {
        name: 'Nature Sense',
        level: 3,
        description:
          'At 3rd level, the scion of the wild gains a +2 bonus on Knowledge (nature) and Survival checks. She can use her Charisma modifier on these checks instead of Intelligence or Wisdom. This replaces the 3rd-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 29. Ley Line Guardian (Oracle version: Ley-Line Channeler)
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Warden',
    className: 'Oracle',
    description:
      'An oracle who serves as a bulwark against undead and incorporeal threats, gaining abilities to detect, harm, and ward against the undead.',
    replacedFeatures: ['Revelations (1st, 3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit Sight',
        level: 1,
        description:
          'The spirit warden can detect undead at will as a spell-like ability. She gains a +2 sacred bonus on Perception checks to notice haunts. This replaces the 1st-level revelation.',
      },
      {
        name: 'Ward the Living',
        level: 3,
        description:
          'At 3rd level, the spirit warden gains channel positive energy as a cleric of her oracle level - 2. She can only use this channel to harm undead, not to heal the living. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Ghost Touch Aura',
        level: 7,
        description:
          'At 7th level, as a swift action, the spirit warden can grant her weapon and armor the ghost touch property for a number of rounds per day equal to her oracle level. These rounds need not be consecutive. This replaces the 7th-level revelation.',
      },
    ],
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 30. Keleshite Prophet
  // ──────────────────────────────────────────────
  {
    name: 'Keleshite Prophet',
    className: 'Oracle',
    description:
      'An oracle from Kelesh who draws on the traditions of the genie-binders, gaining the ability to call upon genie-kind for aid.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Genie Whispers',
        level: 3,
        description:
          'At 3rd level, the Keleshite prophet can communicate telepathically with any genie within 100 feet. She gains a +2 bonus on Diplomacy and Knowledge (planes) checks regarding genies. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Call to Service',
        level: 7,
        description:
          'At 7th level, the Keleshite prophet can summon a lesser genie (such as a janni) once per day as a spell-like ability. The genie serves for 1 round per oracle level. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Sands',
  },

  // ──────────────────────────────────────────────
  // 31. Flame Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Flame Dancer',
    className: 'Oracle',
    description:
      'An oracle who expresses divine power through mesmerizing dances amid flame, gaining bardic fire-themed performances.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: ['Mystery'],
    newFeatures: [
      {
        name: 'Fire Dance',
        level: 1,
        description:
          'The flame dancer must select the flame mystery. She gains a bardic performance ability (fascinate) that functions only when dancing near an open flame of at least campfire size. She can use this for a number of rounds per day equal to 4 + her Charisma modifier. This replaces the 1st-level revelation.',
      },
      {
        name: 'Dance of the Flame',
        level: 7,
        description:
          'At 7th level, the flame dancer can use her fire dance to grant allies within 30 feet fire resistance 10 and a +1 morale bonus on attack rolls and saving throws. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Humans of Golarion',
  },

  // ──────────────────────────────────────────────
  // 32. Reincarnated Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Reincarnated Oracle',
    className: 'Oracle',
    description:
      'An oracle who has lived many lives, retaining fragmentary memories of past incarnations that grant unique insights and resistances to death.',
    replacedFeatures: ['Revelations (1st, 3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Past Life Memories',
        level: 1,
        description:
          'The reincarnated oracle can add half her oracle level to any two Knowledge skills of her choice. She can make these Knowledge checks untrained. These skills are always class skills for her. This replaces the 1st-level revelation.',
      },
      {
        name: 'Resist Death',
        level: 3,
        description:
          'At 3rd level, the reincarnated oracle gains a +2 insight bonus on saving throws against death effects, negative energy, and negative levels. This bonus increases by +1 for every 4 oracle levels beyond 3rd. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Reincarnate',
        level: 7,
        description:
          'At 7th level, once per day when the reincarnated oracle is slain, she can automatically reincarnate (as the spell) 24 hours later. She gains two permanent negative levels upon returning to life. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 33. Deaf Oracle (Deaf Archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Deaf Oracle',
    className: 'Oracle',
    description:
      'An oracle who has embraced deafness as a form of divine connection, gaining enhanced perception through other senses and silent spellcasting.',
    replacedFeatures: ['Revelations (1st)'],
    modifiedFeatures: ["Oracle's Curse"],
    newFeatures: [
      {
        name: 'Enforced Deaf Curse',
        level: 1,
        description:
          'The deaf oracle must select the deaf curse. She gains Silent Spell as a bonus feat at 1st level, and all her spells are treated as if modified by Silent Spell without increasing their spell level or casting time.',
      },
      {
        name: 'Compensating Senses',
        level: 1,
        description:
          'At 1st level, the deaf oracle gains scent as an extraordinary ability and a +2 competence bonus on Perception checks that do not rely on hearing. This replaces the 1st-level revelation.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 34. Woodland Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Woodland Oracle',
    className: 'Oracle',
    description:
      'An oracle tied to the deep forests, drawing power from ancient trees and the spirits of the woodland to gain druidic abilities.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tree Speech',
        level: 1,
        description:
          'The woodland oracle can communicate with trees and plants as if using speak with plants at will. She gains Knowledge (nature) as a class skill. This replaces the 1st-level revelation.',
      },
      {
        name: 'Woodland Stride',
        level: 7,
        description:
          'At 7th level, the woodland oracle can move through any sort of undergrowth (natural or magical) at her normal speed without taking damage or suffering impairment, as the druid ability. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 35. Overseer
  // ──────────────────────────────────────────────
  {
    name: 'Overseer',
    className: 'Oracle',
    description:
      'An oracle who commands others through divine authority, gaining leadership abilities and the power to direct allies in combat.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Commanding Presence',
        level: 3,
        description:
          'At 3rd level, the overseer can issue commands as a move action, granting one ally within 30 feet an immediate move or attack action. She can use this ability a number of times per day equal to her Charisma modifier. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Divine Leadership',
        level: 7,
        description:
          'At 7th level, the overseer gains Leadership as a bonus feat (even if she does not meet the prerequisites). Her leadership score gains a +2 bonus. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Agents of Evil',
  },

  // ──────────────────────────────────────────────
  // 36. Wrecking Mystic
  // ──────────────────────────────────────────────
  {
    name: 'Wrecking Mystic',
    className: 'Oracle',
    description:
      'An oracle who channels divine energy through destructive force, specializing in breaking objects and sundering equipment.',
    replacedFeatures: ['Revelations (1st, 3rd)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Destructive Insight',
        level: 1,
        description:
          'The wrecking mystic gains a +2 bonus on sunder combat maneuver checks and damage rolls against objects. She adds half her oracle level on Strength checks to break objects. This replaces the 1st-level revelation.',
      },
      {
        name: 'Mystic Smash',
        level: 3,
        description:
          'At 3rd level, the wrecking mystic can imbue her weapon with destructive divine energy as a swift action, dealing an additional 1d6 damage against objects and constructs for 1 round. This damage increases by 1d6 at 7th level and every 4 levels thereafter. This replaces the 3rd-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
  },

  // ──────────────────────────────────────────────
  // 37. Dynamic Channeler
  // ──────────────────────────────────────────────
  {
    name: 'Dynamic Channeler',
    className: 'Oracle',
    description:
      'An oracle who gains the ability to channel energy like a cleric, drawing upon her mystery to shape the channeled energy in unique ways.',
    replacedFeatures: ['Revelations (1st, 3rd)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Channel Energy',
        level: 1,
        description:
          'The dynamic channeler gains channel energy as a cleric of her oracle level. She channels positive energy if she has a good alignment and negative energy if she has an evil alignment; neutral oracles choose at 1st level. This replaces the 1st-level revelation.',
      },
      {
        name: 'Channeled Enhancement',
        level: 3,
        description:
          'At 3rd level, when the dynamic channeler channels energy, she can choose to grant allies in the burst a +1 sacred (or profane) bonus to attack rolls, saving throws, or skill checks for 1 round instead of healing them. This bonus increases by +1 at 7th level and every 4 levels thereafter. This replaces the 3rd-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Elements',
  },

  // ──────────────────────────────────────────────
  // 38. Ancestor Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Ancestor Oracle',
    className: 'Oracle',
    description:
      'An oracle who communes with the spirits of her ancestors, gaining martial training and ancestral knowledge through their guidance.',
    replacedFeatures: ['Revelations (3rd, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ancestral Communion',
        level: 3,
        description:
          'At 3rd level, the ancestor oracle can meditate for 10 minutes to gain proficiency with a single martial or exotic weapon of her choice for 24 hours. She can change this weapon each day. This replaces the 3rd-level revelation.',
      },
      {
        name: 'Ancestral Guidance',
        level: 7,
        description:
          'At 7th level, the ancestor oracle can call upon ancestral spirits for counsel once per day, functioning as commune but limited to questions about history, genealogy, and the spirit world. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Ancients',
  },

  // ──────────────────────────────────────────────
  // 39. Temple Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Temple Oracle',
    className: 'Oracle',
    description:
      'A formal oracle trained within a temple hierarchy, gaining domain access and structured divine abilities at the cost of some mystical flexibility.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Domain',
        level: 1,
        description:
          'The temple oracle selects one domain available to her deity. She gains the granted powers of the domain, using her oracle level as her cleric level. She does not gain domain spell slots. This replaces the 1st-level revelation.',
      },
      {
        name: 'Temple Training',
        level: 7,
        description:
          'At 7th level, the temple oracle gains a second domain available to her deity. She gains the granted powers of this domain using her oracle level as her cleric level. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 40. Volcano Oracle
  // ──────────────────────────────────────────────
  {
    name: 'Volcano Oracle',
    className: 'Oracle',
    description:
      'An oracle tied to volcanic forces, wielding the destructive power of magma and tectonic fury through her divine connection.',
    replacedFeatures: ['Revelations (1st, 7th)'],
    modifiedFeatures: ['Mystery'],
    newFeatures: [
      {
        name: 'Volcanic Focus',
        level: 1,
        description:
          'The volcano oracle must choose the flame or stone mystery. She gains fire resistance 5 and a +1 bonus on caster level checks for spells with the fire or earth descriptor. At 11th level, fire resistance increases to 10. This replaces the 1st-level revelation.',
      },
      {
        name: 'Eruption',
        level: 7,
        description:
          'At 7th level, the volcano oracle can cause a 10-foot-radius eruption at a point within 60 feet as a standard action, dealing 1d6 fire damage per oracle level (Reflex half) and creating difficult terrain. She can use this once per day, plus once more at 15th level. This replaces the 7th-level revelation.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Wastes',
  },
];
