import { ArchetypeData } from '../types';

export const BARD_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Animal Speaker
  // ──────────────────────────────────────────────
  {
    name: 'Animal Speaker',
    className: 'Bard',
    description:
      'An animal speaker focuses on the ability to communicate with and influence animals, using bardic performance to soothe savage beasts rather than inspire allies.',
    replacedFeatures: [
      'Fascinate',
      'Inspire Courage',
      'Inspire Greatness',
      'Inspire Heroics',
      'Suggestion',
      'Mass Suggestion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Animal Friend',
        level: 1,
        description:
          'An animal speaker selects a particular type of animal as his totem. He gains a +4 bonus on Handle Animal checks with creatures of that type, and can influence animals of that type as if using wild empathy (using his bard level as his druid level).',
      },
      {
        name: "Nature's Speaker",
        level: 1,
        description:
          'An animal speaker can use bardic performance to fascinate animals. This works like the fascinate bardic performance, except it only affects animals and magical beasts with Intelligence 1 or 2.',
      },
      {
        name: 'Attract Rats',
        level: 1,
        description:
          "An animal speaker can use bardic performance to summon a swarm of rats. This functions as summon swarm, except the swarm follows the bard's simple commands.",
      },
      {
        name: 'Inspire Ferocity',
        level: 6,
        description:
          'An animal speaker can use bardic performance to inspire ferocity in a single animal ally within 30 feet. The animal gains a +2 morale bonus on attack and damage rolls. At 12th level this bonus increases to +4, and at 18th level to +6.',
      },
      {
        name: "Summon Nature's Ally",
        level: 9,
        description:
          "The animal speaker can use bardic performance to cast summon nature's ally as a spell-like ability, summoning only animals. The spell level equals 1/3 his bard level.",
      },
      {
        name: "Mass Nature's Speaker",
        level: 18,
        description:
          'The animal speaker can use bardic performance to simultaneously fascinate and direct all animals and magical beasts within 60 feet.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Arcane Duelist
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Duelist',
    className: 'Bard',
    description:
      'A master of the martial applications of steel and spell, the arcane duelist blends the cutting arts with arcane might to devastating effect.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Countersong',
      'Distraction',
      'Versatile Performance',
      'Well-Versed',
      'Lore Master',
      'Jack-of-All-Trades',
      'Fascinate',
      'Inspire Competence',
      'Suggestion',
      'Dirge of Doom',
      'Soothing Performance',
      'Mass Suggestion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Arcane Strike',
        level: 1,
        description:
          'An arcane duelist gains Arcane Strike as a bonus feat at 1st level. He does not need to meet the prerequisites.',
      },
      {
        name: 'Rallying Cry',
        level: 1,
        description:
          'At 1st level, the arcane duelist can use bardic performance to rally flagging allies. Each round, allies within 30 feet who can hear the bard may reroll a single saving throw against a fear or despair effect. This replaces countersong.',
      },
      {
        name: 'Bladethirst',
        level: 6,
        description:
          'An arcane duelist of 6th level or higher may use performance to grant one weapon of an ally within 30 feet a +1 enhancement bonus. For every 4 levels beyond 6th, this bonus increases by +1. The arcane duelist can also grant one weapon special ability at certain levels.',
      },
      {
        name: 'Bonus Feats',
        level: 2,
        description:
          'At 2nd, 6th, 10th, 14th, and 18th level, the arcane duelist gains a bonus combat feat. The arcane duelist must meet the prerequisites of these feats.',
      },
      {
        name: 'Arcane Bond',
        level: 5,
        description:
          'At 5th level, the arcane duelist gains the arcane bond ability as a wizard, using a weapon as his bonded item. He cannot choose a familiar.',
      },
      {
        name: 'Arcane Armor',
        level: 10,
        description:
          'At 10th level, the arcane duelist gains Medium Armor Proficiency and can cast bard spells in medium armor without arcane spell failure. At 16th level, he gains Heavy Armor Proficiency and can cast in heavy armor without spell failure.',
      },
      {
        name: 'Mass Bladethirst',
        level: 18,
        description:
          'At 18th level, the arcane duelist can use bladethirst to enhance the weapons of all allies within 30 feet.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 3. Archivist
  // ──────────────────────────────────────────────
  {
    name: 'Archivist',
    className: 'Bard',
    description:
      'Some bards greatly prefer the study of ancient tomes and the pursuit of scholastic knowledge over performance. The archivist is the master of lore, able to aid allies through knowledge rather than art.',
    replacedFeatures: [
      'Inspire Courage',
      'Inspire Competence',
      'Inspire Greatness',
      'Inspire Heroics',
      'Fascinate',
      'Distraction',
      'Soothing Performance',
      'Suggestion',
      'Mass Suggestion',
      'Deadly Performance',
    ],
    modifiedFeatures: ['Bardic Performance'],
    newFeatures: [
      {
        name: 'Naturalist',
        level: 1,
        description:
          'An archivist who identifies a creature with a Knowledge check can use bardic performance to grant all allies within 30 feet an insight bonus on attack rolls, damage rolls, and saving throws against that creature type equal to half the bonus granted by inspire courage.',
      },
      {
        name: 'Lamentable Belaborment',
        level: 6,
        description:
          'At 6th level, the archivist can bewilder a creature already fascinated by his performance. The target must succeed at a Will save or become confused for as long as the archivist continues performing.',
      },
      {
        name: 'Pedantic Lecture',
        level: 9,
        description:
          'At 9th level, the archivist can affect a fascinated creature so that it takes a -2 penalty on saving throws, attack rolls, and skill checks as long as the bard continues performing. A successful Will save negates this effect.',
      },
      {
        name: 'Binding Aura',
        level: 14,
        description:
          'At 14th level, the archivist can fascinate all enemies within 30 feet. While performing, these creatures take a -4 penalty to saving throws against enchantment effects.',
      },
      {
        name: 'Probable Path',
        level: 2,
        description:
          'At 2nd level, the archivist can spend a round of bardic performance to gain a +1 insight bonus on attack rolls, saving throws, and skill checks for 1 round. This bonus increases by 1 for every 5 levels after 2nd.',
      },
      {
        name: 'Magic Lore',
        level: 2,
        description:
          'An archivist gains a bonus on Spellcraft checks to identify magic items and decipher scrolls equal to half his level. At 10th level he can take 10 on these checks.',
      },
      {
        name: 'Jack-of-All-Trades (Improved)',
        level: 5,
        description:
          'At 5th level, the archivist can use any skill. At 11th level he takes 10 on all skill checks. At 17th level he takes 20 once per day on any skill check.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 4. Celebrity
  // ──────────────────────────────────────────────
  {
    name: 'Celebrity',
    className: 'Bard',
    description:
      'Known for their larger-than-life personalities, celebrities are masters of public opinion, winning crowds with charm and leveraging their fame for influence.',
    replacedFeatures: ['Bardic Knowledge', 'Inspire Competence', 'Lore Master'],
    modifiedFeatures: ['Inspire Courage'],
    newFeatures: [
      {
        name: 'Famous',
        level: 1,
        description:
          'A celebrity gains a bonus equal to half his bard level on Diplomacy and Intimidate checks in communities where he is famous. Starting at 1st level, he is famous in one community. At 5th level and every 5 levels thereafter he becomes famous in an additional community.',
      },
      {
        name: 'Gather Crowd',
        level: 5,
        description:
          'At 5th level, a celebrity can gather a crowd in a settlement where he is famous. This takes 1d10 minutes and gathers 1d6 people per bard level.',
      },
      {
        name: 'Shining Star',
        level: 5,
        description:
          'At 5th level, a celebrity can spend a round of bardic performance to improve the attitude of all NPCs in a crowd he has gathered by one step.',
      },
      {
        name: 'Devastating Aria',
        level: 11,
        description:
          'At 11th level, a celebrity can use bardic performance to cause a creature to become dazed for 1 round (Will negates). A creature that fails its save by 5 or more is stunned instead.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 5. Court Bard
  // ──────────────────────────────────────────────
  {
    name: 'Court Bard',
    className: 'Bard',
    description:
      'Spending years in royal courts and noble houses, court bards are experts at manipulation, satire, and political intrigue rather than simple entertainment.',
    replacedFeatures: [
      'Inspire Courage',
      'Inspire Greatness',
      'Inspire Heroics',
      'Countersong',
      'Soothing Performance',
      'Deadly Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Satire',
        level: 1,
        description:
          'A court bard can use performance to undermine the confidence of enemies within 30 feet who can hear him, causing them to take a -1 penalty on attack and damage rolls and a -1 penalty on saves against fear and charm effects. This penalty increases by -1 at 5th level and every 6 levels thereafter.',
      },
      {
        name: 'Mockery',
        level: 3,
        description:
          'At 3rd level, a court bard can subtly ridicule and demoralize a single enemy within 30 feet. The target takes a -2 penalty on attack rolls, damage rolls, saving throws, and skill checks as long as the bard maintains this performance.',
      },
      {
        name: 'Glorious Epic',
        level: 9,
        description:
          'At 9th level, a court bard can weave a tale of heroism that inspires all allies within 30 feet. Allies gain a +2 morale bonus to attack rolls, saves, and skill checks, and temporary hit points equal to 1d10 + bard level.',
      },
      {
        name: 'Scandal',
        level: 14,
        description:
          'At 14th level, a court bard can produce a performance that causes a fascinated creature to turn on its former allies if it fails a Will save.',
      },
      {
        name: 'Heraldic Expertise',
        level: 1,
        description:
          'A court bard gains a bonus equal to half his level on Diplomacy, Knowledge (history), Knowledge (local), and Knowledge (nobility) checks. Once per day he can reroll one of these checks.',
      },
      {
        name: 'Wide Audience',
        level: 5,
        description:
          'At 5th level, a court bard can choose to affect a 60-foot cone instead of a 30-foot radius with bardic performances that affect an area.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 6. Dawnflower Dervish
  // ──────────────────────────────────────────────
  {
    name: 'Dawnflower Dervish',
    className: 'Bard',
    description:
      'Followers of Sarenrae, Dawnflower Dervishes combine whirling dance with divine inspiration, using their art to channel the power of the Dawnflower in battle.',
    replacedFeatures: [
      'Inspire Courage',
      'Inspire Greatness',
      'Inspire Heroics',
      'Versatile Performance',
      'Well-Versed',
      'Lore Master',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: ['Bardic Performance'],
    newFeatures: [
      {
        name: 'Battle Dance',
        level: 1,
        description:
          'A Dawnflower Dervish is trained in the use of the Perform (dance) skill to create magical effects on himself. This works like bardic performance, except the bard can only target himself with his performances. Battle dance is treated as bardic performance for feats and abilities that affect it.',
      },
      {
        name: 'Dervish Dance',
        level: 1,
        description:
          'The Dawnflower Dervish gains Dervish Dance as a bonus feat. He does not need to meet the prerequisites for this feat.',
      },
      {
        name: 'Fleet',
        level: 1,
        description:
          'While performing a battle dance, the Dawnflower Dervish gains a +10 enhancement bonus to his base land speed.',
      },
      {
        name: 'Inspire Courage (Self Only)',
        level: 1,
        description:
          'At 1st level, the Dawnflower Dervish can inspire courage as normal, but it only affects himself. The bonus is double the normal inspire courage bonus.',
      },
      {
        name: 'Inspire Greatness (Self Only)',
        level: 9,
        description:
          'At 9th level, the Dawnflower Dervish can inspire greatness as normal, but only in himself.',
      },
      {
        name: 'Inspire Heroics (Self Only)',
        level: 15,
        description:
          'At 15th level, the Dawnflower Dervish can inspire heroics as normal, but only in himself.',
      },
      {
        name: 'Leaf on the Wind',
        level: 5,
        description:
          'At 5th level, while performing battle dance, the Dawnflower Dervish can take 10 on Acrobatics, Climb, Fly, and Swim checks even if distracted or endangered.',
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Detective
  // ──────────────────────────────────────────────
  {
    name: 'Detective',
    className: 'Bard',
    description:
      'Masters of deduction and investigation, detective bards use their talents and keen eyes to solve mysteries and uncover hidden truths.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Inspire Courage',
      'Inspire Greatness',
      'Inspire Heroics',
      'Countersong',
      'Fascinate',
      'Suggestion',
      'Mass Suggestion',
      'Deadly Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Eye for Detail',
        level: 1,
        description:
          'A detective gains a bonus equal to half his level on Knowledge (local), Perception, and Sense Motive checks.',
      },
      {
        name: 'Arcane Insight',
        level: 2,
        description:
          "At 2nd level, a detective can find and disable magical traps, like a rogue's trapfinding ability. He gains a +1 bonus on Perception checks to find traps and on Disable Device checks. This bonus increases by +1 at 6th level and every 4 levels thereafter.",
      },
      {
        name: 'Careful Teamwork',
        level: 1,
        description:
          'A detective can use performance to grant allies within 30 feet an insight bonus on Disable Device, Perception, and Sense Motive checks equal to half the inspire courage bonus.',
      },
      {
        name: 'True Confession',
        level: 9,
        description:
          'At 9th level, a detective can use performance to compel a target within 30 feet to answer his questions truthfully (Will negates). This is a mind-affecting compulsion effect.',
      },
      {
        name: 'Show Them the Way',
        level: 6,
        description:
          'At 6th level, when a detective successfully aids another on a skill check or attack roll, he grants an additional +2 bonus on top of the normal aid another bonus.',
      },
      {
        name: 'Discern Lies',
        level: 14,
        description:
          'At 14th level, a detective can use performance to gain the effect of discern lies for as long as the performance is maintained.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 8. Dirge Bard
  // ──────────────────────────────────────────────
  {
    name: 'Dirge Bard',
    className: 'Bard',
    description:
      'A dirge bard draws upon themes of extinguished life and the power of unfinished tales to fuel his art, causing fear and manipulating undead.',
    replacedFeatures: [
      'Fascinate',
      'Suggestion',
      'Mass Suggestion',
      'Inspire Competence',
      'Soothing Performance',
      'Versatile Performance',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Haunted Eyes',
        level: 2,
        description:
          'At 2nd level, a dirge bard gains a +4 bonus on saves against fear, energy drain, death effects, and necromantic effects.',
      },
      {
        name: 'Secrets of the Grave',
        level: 2,
        description:
          'At 2nd level, a dirge bard gains a bonus equal to half his level on Knowledge (religion) checks made to identify undead and their special abilities.',
      },
      {
        name: 'Haunting Refrain',
        level: 5,
        description:
          'At 5th level, a dirge bard is able to stir primal terrors in the hearts of listeners. He can use bardic performance to cause fear (as the spell) in a single creature that is already shaken, frightened, or panicked.',
      },
      {
        name: 'Dance of the Dead',
        level: 10,
        description:
          'At 10th level, a dirge bard can use bardic performance to animate dead as per the animate dead spell, using his bard level as caster level.',
      },
      {
        name: 'Inspire Courage (Undead)',
        level: 6,
        description:
          'At 6th level, a dirge bard can extend his inspire courage performance to affect undead allies. This includes mindless undead that the bard controls.',
      },
      {
        name: 'Mass Dirge of Doom',
        level: 14,
        description:
          "At 14th level, the dirge bard's dirge of doom performance causes enemies within 30 feet to become frightened instead of shaken.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 9. Duettist
  // ──────────────────────────────────────────────
  {
    name: 'Duettist',
    className: 'Bard',
    description:
      'A duettist shares a deep bond with a familiar that assists in performance, creating harmonies that are greater than either voice alone.',
    replacedFeatures: ['Distraction', 'Inspire Competence', 'Lore Master'],
    modifiedFeatures: ['Versatile Performance'],
    newFeatures: [
      {
        name: 'Familiar',
        level: 1,
        description:
          "A duettist gains a familiar as a wizard of equal level. The familiar can use the duettist's Perform skill in place of its own skill checks.",
      },
      {
        name: 'Harmonizing Familiar',
        level: 1,
        description:
          "A duettist's familiar can maintain a bardic performance on the duettist's behalf, allowing the bard to start a second performance. The familiar must be within 60 feet to maintain the performance.",
      },
      {
        name: 'Duo Performance',
        level: 3,
        description:
          'At 3rd level, when the duettist and familiar both contribute to a performance, the bard can increase the DC of the performance by +2.',
      },
      {
        name: 'Familiar Performances',
        level: 5,
        description:
          "At 5th level, the familiar can start a bardic performance on its own, spending the duettist's rounds of bardic performance.",
      },
      {
        name: 'Improved Familiar Performances',
        level: 11,
        description:
          'At 11th level, when the duettist and familiar perform together, their performances stack, granting bonuses from both simultaneously.',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 10. Flame Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Flame Dancer',
    className: 'Bard',
    description:
      'A flame dancer bard studies the secrets of flame and smoke, mastering fire-based performances and the ability to walk among burning flames.',
    replacedFeatures: [
      'Countersong',
      'Fascinate',
      'Soothing Performance',
      'Suggestion',
      'Mass Suggestion',
      'Well-Versed',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fire Dancing',
        level: 1,
        description:
          'At 1st level, a flame dancer learns to protect himself and others from fire. He can use bardic performance to grant himself and allies within 30 feet resist fire 5. This resistance increases by 5 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Song of the Fiery Gaze',
        level: 3,
        description:
          'At 3rd level, a flame dancer can use performance to grant all allies within 30 feet the ability to see through fire, fog, and smoke without penalty.',
      },
      {
        name: 'Fire Break',
        level: 7,
        description:
          'At 7th level, a flame dancer can use bardic performance to cause a wall of fire (as the spell) centered on himself. Allies within 30 feet are unaffected.',
      },
      {
        name: 'Dance of Flame',
        level: 14,
        description:
          'At 14th level, a flame dancer can use performance to transform into a Large fire elemental (as elemental body III) while maintaining his performance.',
      },
      {
        name: 'Spell Specialist (Fire)',
        level: 2,
        description:
          'At 2nd level, a flame dancer gains a +1 bonus to the DC of all spells with the fire descriptor. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 11. Geisha
  // ──────────────────────────────────────────────
  {
    name: 'Geisha',
    className: 'Bard',
    description:
      'A geisha uses her skills at art, conversation, and dance to entrance those around her, specializing in tea ceremonies and social graces.',
    replacedFeatures: ['Countersong', 'Bardic Knowledge', 'Versatile Performance', 'Lore Master'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tea Ceremony',
        level: 1,
        description:
          'A geisha can perform a tea ceremony requiring 10 minutes. Participants gain a +2 bonus on saves against mind-affecting effects for 10 minutes per level. She gains proficiency with fans and war fans.',
      },
      {
        name: 'Geisha Knowledge',
        level: 1,
        description:
          'A geisha adds half her level to Knowledge (nobility), Diplomacy, and all Perform checks.',
      },
      {
        name: 'Spell Specialist',
        level: 2,
        description:
          'A geisha selects one spell at 2nd level and every 4 levels thereafter. She can cast these spells without any somatic components.',
      },
      {
        name: 'Scribe Scroll',
        level: 1,
        description: 'A geisha gains Scribe Scroll as a bonus feat at 1st level.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 12. Juggler
  // ──────────────────────────────────────────────
  {
    name: 'Juggler',
    className: 'Bard',
    description:
      'A juggler is a master of keeping multiple objects in the air at once. Through practiced hand-eye coordination, he can perform amazing tricks while keeping the audience captivated.',
    replacedFeatures: [
      'Countersong',
      'Distraction',
      'Inspire Competence',
      'Well-Versed',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Combat Juggling',
        level: 1,
        description:
          'A juggler can draw and sheathe weapons, wands, and other items as a free action. He can juggle items and use them without penalty, drawing and throwing weapons as part of a full attack.',
      },
      {
        name: 'Deflect Arrows',
        level: 2,
        description:
          'At 2nd level, a juggler gains Deflect Arrows as a bonus feat, even if he does not meet the prerequisites. At 6th level, he can deflect one additional ranged attack per round.',
      },
      {
        name: 'Snatch Arrows',
        level: 6,
        description:
          'At 6th level, a juggler gains Snatch Arrows as a bonus feat. He can immediately throw back a snatched projectile as a free action.',
      },
      {
        name: 'Fast Reactions',
        level: 3,
        description:
          'At 3rd level, a juggler adds half his bard level to Sleight of Hand checks and can take 10 on these checks even when distracted or threatened.',
      },
      {
        name: 'Juggle Spell',
        level: 10,
        description:
          'At 10th level, a juggler can delay a spell with a casting time of 1 standard action by juggling it. The spell is held for up to a number of rounds equal to his Charisma modifier before being unleashed.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 13. Magician
  // ──────────────────────────────────────────────
  {
    name: 'Magician',
    className: 'Bard',
    description:
      'A magician bard views magic as performance art and himself as a practitioner of the highest form of entertainment.',
    replacedFeatures: [
      'Inspire Courage',
      'Inspire Competence',
      'Lore Master',
      'Countersong',
      'Soothing Performance',
      'Inspire Heroics',
      'Mass Suggestion',
      'Deadly Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Magical Talent',
        level: 2,
        description:
          'A magician can use performance to grant all allies within 30 feet a +1 bonus on caster level checks, concentration checks, and attack rolls to overcome spell resistance. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Improved Counterspell',
        level: 1,
        description: 'A magician gains Improved Counterspell as a bonus feat.',
      },
      {
        name: 'Extended Performance',
        level: 1,
        description:
          'A magician can extend the duration of bardic performance after he stops by 1 round per 2 bard levels.',
      },
      {
        name: 'Dweomercraft',
        level: 2,
        description:
          'A magician can use performance to manipulate magical energies. Allies within 30 feet gain a +1 bonus on caster level checks, concentration checks, and attack rolls with spells and spell-like abilities. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Spell Suppression',
        level: 9,
        description:
          'At 9th level, a magician can use performance to attempt to suppress the effects of a single ongoing spell on a creature or object within 30 feet (dispel check as per dispel magic).',
      },
      {
        name: 'Metamagic Mastery',
        level: 14,
        description:
          'At 14th level, a magician can use performance to apply a metamagic feat he knows to a spell as he casts it, without increasing the casting time or spell slot used. He can use this ability once per day, plus one additional time for every 4 levels beyond 14th.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 14. Sandman
  // ──────────────────────────────────────────────
  {
    name: 'Sandman',
    className: 'Bard',
    description:
      'Combining performance with stealth, a sandman specializes in putting enemies to sleep and pilfering their valuables while they slumber.',
    replacedFeatures: [
      'Inspire Courage',
      'Bardic Knowledge',
      'Inspire Competence',
      'Inspire Greatness',
      'Inspire Heroics',
      'Countersong',
      'Suggestion',
      'Mass Suggestion',
      'Deadly Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Stealspell',
        level: 1,
        description:
          'A sandman can use performance to attempt to steal an active spell effect from one creature and transfer it to himself. This requires a caster level check (DC 11 + caster level of the spell).',
      },
      {
        name: 'Slumber Song',
        level: 6,
        description:
          'At 6th level, a sandman can use performance to cause a creature already fascinated by his performance to fall asleep (as deep slumber). Unlike the spell, this does not have an HD limitation.',
      },
      {
        name: 'Dramatic Subtext',
        level: 9,
        description:
          'At 9th level, a sandman can use performance to pass secret messages to all allies within 30 feet (as message) while appearing to perform normally.',
      },
      {
        name: 'Greater Stealspell',
        level: 15,
        description:
          "At 15th level, a sandman's stealspell can steal permanent spell effects and supernatural abilities for a number of rounds equal to half his bard level.",
      },
      {
        name: 'Master of Deception',
        level: 2,
        description:
          'A sandman gains a bonus equal to half his level on Bluff, Disguise, Sleight of Hand, and Stealth checks. He can take 10 on Bluff and Disguise checks even when distracted.',
      },
      {
        name: 'Sneak Attack',
        level: 1,
        description:
          'At 1st level, a sandman gains sneak attack +1d6. This increases by +1d6 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Trap Sense',
        level: 3,
        description:
          'At 3rd level, a sandman gains trap sense +1. This increases by +1 every 3 levels after 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Savage Skald
  // ──────────────────────────────────────────────
  {
    name: 'Savage Skald',
    className: 'Bard',
    description:
      'A savage skald channels the raw fury of primal warriors through his performances, inspiring allies to feats of bestial strength and ferocity.',
    replacedFeatures: [
      'Inspire Competence',
      'Suggestion',
      'Soothing Performance',
      'Mass Suggestion',
      'Dirge of Doom',
      'Deadly Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Inspiring Blow',
        level: 1,
        description:
          'A savage skald roars his battle cries with each strike. As a swift action when he confirms a critical hit, he can start bardic performance. Additionally, the critical hit grants all allies within 30 feet extra temporary hit points equal to his Charisma modifier.',
      },
      {
        name: 'Incite Rage',
        level: 6,
        description:
          'At 6th level, a savage skald can use bardic performance to induce a rage in willing allies within 30 feet, as the rage spell. Affected allies gain +2 morale bonus to Strength and Constitution and a +1 morale bonus on Will saves, but take a -1 penalty to AC.',
      },
      {
        name: 'Song of the Fallen',
        level: 10,
        description:
          'At 10th level, a savage skald can use performance to revive a dead ally within 30 feet for 1 round per bard level, as if affected by breath of life but on a delay.',
      },
      {
        name: 'Berserkergang',
        level: 12,
        description:
          'At 12th level, the savage skald can inspire a raging ally to gain DR 3/-, the benefits of the Diehard feat, and immunity to fear effects. At 16th level the DR increases to 5/-.',
      },
      {
        name: 'Battle Song',
        level: 18,
        description:
          'At 18th level, the savage skald can affect all raging allies within 30 feet with berserkergang simultaneously.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 16. Sea Singer
  // ──────────────────────────────────────────────
  {
    name: 'Sea Singer',
    className: 'Bard',
    description:
      'The sea singer calls the ocean his home, using his art to inspire sailors, calm storms, and summon creatures from the deep.',
    replacedFeatures: [
      'Countersong',
      'Inspire Competence',
      'Suggestion',
      'Versatile Performance',
      'Well-Versed',
      'Lore Master',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sea Shanty',
        level: 1,
        description:
          'A sea singer can use bardic performance to grant a +2 competence bonus on Profession (sailor), Acrobatics, Climb, and Swim checks to all allies within 30 feet. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Still Water',
        level: 3,
        description:
          'At 3rd level, a sea singer can use bardic performance to calm rough water in a 30-foot radius. This reduces the DC of Profession (sailor) and Swim checks in the affected area by 5. At higher levels this can calm storms.',
      },
      {
        name: 'Whistle the Wind',
        level: 6,
        description:
          'At 6th level, a sea singer can use performance to alter wind forces in a 30-foot radius by one step. At 12th level he can alter wind force by two steps.',
      },
      {
        name: 'Call the Storm',
        level: 14,
        description:
          'At 14th level, a sea singer can use performance to call lightning as the call lightning storm spell. Each bolt requires a round of performance.',
      },
      {
        name: 'World Traveler',
        level: 2,
        description:
          'A sea singer gains a bonus equal to half his level on Knowledge (geography), Knowledge (local), and Linguistics checks. He can reroll one of these checks once per day.',
      },
      {
        name: 'Sea Legs',
        level: 2,
        description:
          'At 2nd level, a sea singer gains a +4 bonus on saves against air and water effects and effects that would cause him to slip, be knocked down, or be pushed. He gains a swim speed of 30 feet at 7th level.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 17. Sound Striker
  // ──────────────────────────────────────────────
  {
    name: 'Sound Striker',
    className: 'Bard',
    description:
      'A sound striker refines the living sound of bardic performance into a weapon, hurling notes like projectiles and creating destructive harmonics.',
    replacedFeatures: ['Suggestion', 'Mass Suggestion', 'Inspire Greatness'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Wordstrike',
        level: 3,
        description:
          'At 3rd level, a sound striker can spend 1 round of bardic performance as a standard action to direct a burst of sonically charged words at a creature or object. This deals 1d4+1 damage per bard level to the target (Fortitude half). This is a sonic effect.',
      },
      {
        name: 'Weird Words',
        level: 8,
        description:
          "At 8th level, a sound striker can start a performance as a standard action, lashing out with 1 sonic bolt per 4 bard levels (maximum 5). Each bolt requires a ranged touch attack and deals 1d8 points of sonic damage plus the bard's Charisma modifier.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Street Performer
  // ──────────────────────────────────────────────
  {
    name: 'Street Performer',
    className: 'Bard',
    description:
      'Street performers make their living entertaining crowds in public venues, mastering sleight of hand and misdirection to earn coin and avoid trouble.',
    replacedFeatures: [
      'Countersong',
      'Inspire Courage',
      'Inspire Greatness',
      'Inspire Heroics',
      'Bardic Knowledge',
      'Lore Master',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Gladhanding',
        level: 1,
        description:
          'A street performer earns double the normal amount of money from Perform checks. He gains a bonus equal to half his level on Bluff, Diplomacy, and Sleight of Hand checks.',
      },
      {
        name: 'Disappearing Act',
        level: 1,
        description:
          'A street performer can use performance to grant himself and allies within 30 feet a bonus on Stealth checks equal to half the inspire courage bonus (minimum +1).',
      },
      {
        name: 'Harmless Performer',
        level: 3,
        description:
          'At 3rd level, a street performer can use performance to appear completely harmless. Enemies take a -5 penalty on Sense Motive checks against him and a -2 penalty on attack rolls against him for the first round of combat.',
      },
      {
        name: 'Madcap Prank',
        level: 9,
        description:
          'At 9th level, a street performer can use performance to cause a single creature within 30 feet to take a penalty equal to half his bard level on one type of action (attacks, saves, skill checks, etc.) for as long as the performance continues.',
      },
      {
        name: 'Slip Through the Crowd',
        level: 15,
        description:
          'At 15th level, a street performer using performance does not provoke attacks of opportunity. Allies within 30 feet gain a +4 bonus on Acrobatics checks to move through threatened squares.',
      },
      {
        name: 'Quick Change',
        level: 5,
        description:
          'At 5th level, a street performer can don a disguise as a standard action by spending 1 round of bardic performance. He takes no penalty for hurried disguise.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Thundercaller
  // ──────────────────────────────────────────────
  {
    name: 'Thundercaller',
    className: 'Bard',
    description:
      'The thundercaller channels the power of storms through performance, exchanging subtle manipulation for raw, thunderous force.',
    replacedFeatures: [
      'Fascinate',
      'Inspire Competence',
      'Suggestion',
      'Dirge of Doom',
      'Mass Suggestion',
      'Soothing Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Thunder Call',
        level: 3,
        description:
          'At 3rd level, a thundercaller can use performance to create a 30-foot cone of thunderous sound. Creatures in the area take 1d8 sonic damage per 2 bard levels (maximum 5d8) and are deafened for 1d4 rounds (Fortitude halves damage and negates deafness).',
      },
      {
        name: 'Incite Rage',
        level: 6,
        description:
          'At 6th level, a thundercaller can use performance to incite a rage in willing allies within 30 feet, as the rage spell.',
      },
      {
        name: 'Call Lightning',
        level: 8,
        description:
          'At 8th level, a thundercaller can use performance to call down lightning bolts as per the call lightning spell. Each bolt requires 1 round of performance.',
      },
      {
        name: 'Storm Touched',
        level: 1,
        description:
          'A thundercaller gains electricity resistance 5. At 11th level this increases to electricity resistance 10.',
      },
      {
        name: 'Sonic Overload',
        level: 14,
        description:
          'At 14th level, the thundercaller can use performance to target a single creature within 30 feet with an intensified blast of sonic energy, dealing 1d8 per bard level (maximum 20d8) sonic damage (Fortitude half). Using this ability expends 5 rounds of bardic performance.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 20. Voice of the Wild
  // ──────────────────────────────────────────────
  {
    name: 'Voice of the Wild',
    className: 'Bard',
    description:
      'The voice of the wild eschews civilization and finds inspiration in nature, using primal melodies to influence plants, animals, and the weather.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Fascinate',
      'Countersong',
      'Suggestion',
      'Mass Suggestion',
      'Well-Versed',
      'Lore Master',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Nature Lore',
        level: 1,
        description:
          'A voice of the wild adds half his level on Knowledge (geography) and Knowledge (nature) checks and can make these checks untrained.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'A voice of the wild gains the wild empathy ability as a druid, using his bard level as his druid level.',
      },
      {
        name: 'Insect Fascinate',
        level: 1,
        description:
          'At 1st level, a voice of the wild can use performance to fascinate animals, vermin, and plant creatures.',
      },
      {
        name: "Nature's Call",
        level: 6,
        description:
          "At 6th level, a voice of the wild can use performance to summon animals as per summon nature's ally (spell level = 1/3 bard level). Only animals can be summoned.",
      },
      {
        name: "Resist Nature's Lure",
        level: 2,
        description:
          'At 2nd level, a voice of the wild gains a +4 bonus on saves against the spell-like and supernatural abilities of fey and effects that target plants.',
      },
      {
        name: 'Soothing Performance (Animals)',
        level: 12,
        description:
          'At 12th level, a voice of the wild can use soothing performance on animals, vermin, and plant creatures in addition to the normal targets.',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 21. Archaeologist
  // ──────────────────────────────────────────────
  {
    name: 'Archaeologist',
    className: 'Bard',
    description:
      'No stodgy researcher, an archaeologist braves dungeons and ruins, trusting to luck and skill to survive. He trades performance for roguish talents.',
    replacedFeatures: [
      'Bardic Performance',
      'Inspire Courage',
      'Inspire Competence',
      'Inspire Greatness',
      'Inspire Heroics',
      'Fascinate',
      'Countersong',
      'Distraction',
      'Suggestion',
      'Dirge of Doom',
      'Soothing Performance',
      'Mass Suggestion',
      'Deadly Performance',
      'Versatile Performance',
      'Well-Versed',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Archaeologist's Luck",
        level: 1,
        description:
          'An archaeologist gains a +1 luck bonus on attack rolls, saving throws, skill checks, and weapon damage rolls as a swift action. This bonus increases by +1 at 5th level and every 5 levels thereafter. He can use this ability a number of rounds per day equal to 4 + his Charisma modifier, plus 2 rounds per level after 1st.',
      },
      {
        name: 'Clever Explorer',
        level: 2,
        description:
          'At 2nd level, an archaeologist gains a bonus equal to half his level on Disable Device and Perception checks. He can disable intricate and complex devices in half the normal time and can always take 10 on Disable Device checks.',
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, an archaeologist gains uncanny dodge. At 6th level, he gains improved uncanny dodge.',
      },
      {
        name: 'Trap Sense',
        level: 3,
        description:
          'At 3rd level, an archaeologist gains trap sense +1, increasing by +1 every 3 levels after 3rd.',
      },
      {
        name: 'Rogue Talents',
        level: 4,
        description:
          'At 4th level and every 4 levels thereafter, an archaeologist can select a rogue talent for which he qualifies.',
      },
      {
        name: 'Evasion',
        level: 6,
        description:
          'At 6th level, an archaeologist gains evasion. At 12th level, he gains improved evasion.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 22. Dervish Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Dervish Dancer',
    className: 'Bard',
    description:
      'A dervish dancer channels the power of divine dance, whirling across the battlefield while inspiring himself through movement.',
    replacedFeatures: [
      'Inspire Courage',
      'Inspire Greatness',
      'Inspire Heroics',
      'Inspire Competence',
      'Suggestion',
      'Mass Suggestion',
      'Soothing Performance',
      'Deadly Performance',
      'Versatile Performance',
      'Well-Versed',
    ],
    modifiedFeatures: ['Bardic Performance'],
    newFeatures: [
      {
        name: 'Battle Dance',
        level: 1,
        description:
          'A dervish dancer is trained in the use of the Perform (dance) skill to create magical effects on himself. This works like bardic performance, except the bard can only target himself. Battle dance is treated as bardic performance for feats, abilities, and effects.',
      },
      {
        name: 'Fleet',
        level: 1,
        description:
          'While performing a battle dance, the dervish dancer gains a +10 enhancement bonus to his base speed. At 5th level this bonus increases to +15, at 9th level to +20, and at 13th level to +30.',
      },
      {
        name: 'Rain of Blows',
        level: 6,
        description:
          'At 6th level, a dervish dancer can use battle dance to grant himself one additional attack at his highest bonus when making a full attack action.',
      },
      {
        name: "Razor's Kiss",
        level: 3,
        description:
          'At 3rd level, a dervish dancer gains a bonus to weapon damage rolls equal to half his inspire courage bonus (minimum +1) while battle dancing.',
      },
      {
        name: 'Leaf on the Wind',
        level: 9,
        description:
          'At 9th level, while performing a battle dance, the dervish dancer can take 10 on Acrobatics, Climb, Fly, and Swim checks even if distracted or endangered.',
      },
      {
        name: 'Dance of Fury',
        level: 12,
        description:
          'At 12th level, a dervish dancer can attack more than once as he moves during a battle dance, taking a full-attack action and moving up to his speed.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 23. Dervish of Dawn
  // ──────────────────────────────────────────────
  {
    name: 'Dervish of Dawn',
    className: 'Bard',
    description:
      'A dervish of dawn is a whirling warrior-performer devoted to Sarenrae, combining scimitar technique with divine inspiration.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Inspire Competence',
      'Versatile Performance',
      'Lore Master',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: ['Inspire Courage'],
    newFeatures: [
      {
        name: 'Dervish Dance',
        level: 1,
        description:
          'At 1st level, a dervish of dawn gains Weapon Finesse as a bonus feat. She adds her Charisma modifier to damage with scimitars in place of her Strength modifier while wearing light or no armor.',
      },
      {
        name: "Sarenrae's Blessing",
        level: 1,
        description:
          'A dervish of dawn adds cure light wounds to her list of 1st-level spells known. At 4th level she adds cure moderate wounds, and so on.',
      },
      {
        name: 'Battle Dance',
        level: 1,
        description:
          "The dervish of dawn's inspire courage only affects herself but grants double the normal bonus.",
      },
      {
        name: 'Whirling Dervish',
        level: 5,
        description:
          'At 5th level, while performing, the dervish of dawn does not provoke attacks of opportunity when moving through threatened spaces.',
      },
      {
        name: 'Sunfire',
        level: 11,
        description:
          'At 11th level, while performing, the dervish of dawn can cause her scimitar to burst into flames, dealing an additional 1d6 fire damage per hit.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 24. Argent Voice
  // ──────────────────────────────────────────────
  {
    name: 'Argent Voice',
    className: 'Bard',
    description:
      'The argent voice uses the clarity and force of the spoken word to channel divine power, specializing in healing through song.',
    replacedFeatures: [
      'Well-Versed',
      'Lore Master',
      'Jack-of-All-Trades',
      'Dirge of Doom',
      'Deadly Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Silver Tongue',
        level: 2,
        description:
          'At 2nd level, an argent voice adds cure spells to his spell list at the same level as a cleric of the same spell level.',
      },
      {
        name: 'Healing Performance',
        level: 5,
        description:
          'At 5th level, the argent voice can use bardic performance to heal allies within 30 feet, restoring 1d6 hit points per 2 bard levels. Each use expends 3 rounds of bardic performance.',
      },
      {
        name: 'Silvered Voice',
        level: 8,
        description:
          "At 8th level, the argent voice's performances can affect creatures normally immune to mind-affecting effects, such as undead and constructs.",
      },
      {
        name: 'Purifying Song',
        level: 14,
        description:
          'At 14th level, the argent voice can use performance to remove conditions (fatigued, sickened, shaken, dazed, or stunned) from allies within 30 feet.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 25. Chelish Diva
  // ──────────────────────────────────────────────
  {
    name: 'Chelish Diva',
    className: 'Bard',
    description:
      'A Chelish diva is a master of operatic performance, using the dramatic arts of Cheliax to command attention and weave powerful enchantments.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Countersong',
      'Fascinate',
      'Suggestion',
      'Well-Versed',
      'Lore Master',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Famous',
        level: 1,
        description:
          'A Chelish diva gains a bonus equal to half her level on Diplomacy and Intimidate checks in settlements where she is famous.',
      },
      {
        name: 'Devastating Aria',
        level: 3,
        description:
          'At 3rd level, the diva can use performance to target a single creature within 30 feet with a devastating note. The target takes 1d4 sonic damage per 2 levels and is dazed for 1 round (Fortitude negates the daze).',
      },
      {
        name: 'Costume Proficiency',
        level: 2,
        description:
          'At 2nd level, a Chelish diva can cast bard spells in light armor without spell failure. At 6th level this extends to medium armor, and at 10th level to heavy armor.',
      },
      {
        name: 'Scathing Tirade',
        level: 7,
        description:
          'At 7th level, the diva can use performance to demoralize all enemies within 30 feet as a free action, using her Perform check in place of an Intimidate check.',
      },
      {
        name: 'Prima Donna',
        level: 5,
        description:
          "At 5th level, the diva's performances can inspire fear. She adds cause fear and scare to her spell list as 1st- and 2nd-level spells.",
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 26. Buccaneer
  // ──────────────────────────────────────────────
  {
    name: 'Buccaneer',
    className: 'Bard',
    description:
      'The buccaneer is a pirate bard who uses sea shanties and intimidation to lead crews, fight aboard ships, and inspire terror on the high seas.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Countersong',
      'Inspire Competence',
      'Versatile Performance',
      'Well-Versed',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hilt Bash',
        level: 1,
        description:
          'A buccaneer gains Improved Unarmed Strike as a bonus feat. She can deal nonlethal damage with swords and similar weapons without penalty.',
      },
      {
        name: 'Sea Legs',
        level: 2,
        description:
          'At 2nd level, a buccaneer gains a +2 bonus on Acrobatics, Climb, Profession (sailor), and Swim checks. She can take 10 on these checks even in stressful situations.',
      },
      {
        name: 'Song of Surrender',
        level: 3,
        description:
          'At 3rd level, a buccaneer can use performance to encourage enemies to surrender. Enemies within 30 feet must succeed at a Will save or become nonhostile (as if their attitude were indifferent) for as long as the performance continues.',
      },
      {
        name: 'Mass Intimidation',
        level: 6,
        description:
          'At 6th level, a buccaneer can use Intimidate to demoralize all enemies within 30 feet as a standard action.',
      },
    ],
    source: 'Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 27. Brazen Deceiver
  // ──────────────────────────────────────────────
  {
    name: 'Brazen Deceiver',
    className: 'Bard',
    description:
      'A brazen deceiver specializes in lies and misdirection, layering falsehoods so deftly that even magical interrogation cannot see through them.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Inspire Competence',
      'Lore Master',
      'Versatile Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Masterful Deception',
        level: 1,
        description:
          'A brazen deceiver adds half his level (minimum +1) on Bluff checks and can take 10 on Bluff checks even while distracted. At 5th level he can take 20 on Bluff checks once per day.',
      },
      {
        name: 'Deceptive Tale',
        level: 2,
        description:
          'At 2nd level, a brazen deceiver can use performance to weave a glamour around himself. Creatures within 30 feet that fail a Will save believe whatever the bard tells them for the duration of the performance.',
      },
      {
        name: 'Undetectable Lie',
        level: 5,
        description:
          'At 5th level, the brazen deceiver is immune to discern lies and similar effects. His lies detect as true under zone of truth unless the caster succeeds at a caster level check (DC 15 + bard level).',
      },
      {
        name: 'Implant False Memory',
        level: 11,
        description:
          'At 11th level, a brazen deceiver can use performance to implant a false memory in a fascinated target (Will negates). The memory seems completely real.',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 28. Songhealer
  // ──────────────────────────────────────────────
  {
    name: 'Songhealer',
    className: 'Bard',
    description:
      'A songhealer uses music to mend wounds and cure ailments, channeling restorative magic through performance rather than direct spellcasting.',
    replacedFeatures: ['Distraction', 'Dirge of Doom', 'Inspire Heroics', 'Deadly Performance'],
    modifiedFeatures: ['Soothing Performance'],
    newFeatures: [
      {
        name: 'Enhanced Healing',
        level: 1,
        description:
          'A songhealer adds +1 to the amount of damage healed by any cure spell she casts. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Healing Performance',
        level: 2,
        description:
          'At 2nd level, a songhealer can use distraction to grant fast healing 1 to all allies within 30 feet. This increases to fast healing 2 at 7th level, fast healing 3 at 12th level, and fast healing 4 at 17th level.',
      },
      {
        name: 'Absorb Condition',
        level: 8,
        description:
          'At 8th level, a songhealer can absorb a harmful condition from an ally within 30 feet as a standard action. She takes on the condition herself but its duration is halved.',
      },
      {
        name: 'Restorative Song',
        level: 14,
        description:
          'At 14th level, a songhealer can use 10 rounds of bardic performance to produce the effect of regenerate on a single target.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 29. Wit
  // ──────────────────────────────────────────────
  {
    name: 'Wit',
    className: 'Bard',
    description:
      'A wit is a social artist and razor-tongued commentator, using cutting remarks and clever bon mots to inspire allies and befuddle enemies.',
    replacedFeatures: [
      'Countersong',
      'Fascinate',
      'Inspire Courage',
      'Dirge of Doom',
      'Soothing Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Razor Wit',
        level: 1,
        description:
          'A wit can spend a round of bardic performance to make a witty remark targeting one creature within 30 feet. The target must succeed at a Will save or take a -2 penalty on attack rolls, skill checks, and saving throws for 1 round per bard level.',
      },
      {
        name: 'Cutting Remark',
        level: 3,
        description:
          'At 3rd level, a wit can use performance to deal 1d6 nonlethal damage + Charisma modifier to a single creature within 30 feet (no save). This damage increases by 1d6 at 7th level and every 4 levels thereafter.',
      },
      {
        name: 'Biting Sarcasm',
        level: 8,
        description:
          'At 8th level, a wit can use performance to cause all enemies within 30 feet to become sickened for as long as the performance continues (Will negates).',
      },
      {
        name: 'Bon Mot',
        level: 1,
        description:
          'A wit gains a bonus equal to half his bard level on Bluff and Diplomacy checks made to change creature attitudes.',
      },
      {
        name: 'Punchline',
        level: 14,
        description:
          'At 14th level, a wit can use performance to stun a creature within 30 feet for 1d4+1 rounds (Will negates).',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 30. Lore Warden (Bard)
  // ──────────────────────────────────────────────
  {
    name: 'Faith Singer',
    className: 'Bard',
    description:
      'A faith singer uses divine hymns to inspire the faithful, blending devotion and performance to support allies who share her religious convictions.',
    replacedFeatures: ['Bardic Knowledge', 'Versatile Performance', 'Well-Versed', 'Lore Master'],
    modifiedFeatures: ['Inspire Courage'],
    newFeatures: [
      {
        name: 'Divine Hymn',
        level: 1,
        description:
          "A faith singer's inspire courage bonus is +1 higher when affecting allies who worship the same deity. She adds Knowledge (religion) to her class skill list with a bonus equal to half her level.",
      },
      {
        name: 'Channeled Performance',
        level: 2,
        description:
          'At 2nd level, a faith singer can expend rounds of bardic performance to channel positive energy as a cleric of her bard level - 2. She can do this a number of times per day equal to 1 + her Charisma modifier.',
      },
      {
        name: 'Divine Aria',
        level: 5,
        description:
          'At 5th level, a faith singer adds certain divine spells to her bard spell list: bless (1st), prayer (3rd), holy smite (4th).',
      },
      {
        name: 'Hymn of Resistance',
        level: 9,
        description:
          "At 9th level, a faith singer can use performance to grant allies within 30 feet spell resistance equal to 11 + her bard level against spells from outsiders opposed to her deity's alignment.",
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 31. Negotiator
  // ──────────────────────────────────────────────
  {
    name: 'Negotiator',
    className: 'Bard',
    description:
      'A negotiator is a master of diplomacy who prefers to resolve conflicts with words. His performances focus on calming tensions and brokering agreements.',
    replacedFeatures: [
      'Countersong',
      'Fascinate',
      'Inspire Courage',
      'Inspire Greatness',
      'Well-Versed',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Master Negotiator',
        level: 1,
        description:
          'A negotiator adds half his level (minimum +1) on Diplomacy, Sense Motive, and Linguistics checks. He can make Diplomacy checks to adjust attitudes in half the normal time.',
      },
      {
        name: 'Calm Down',
        level: 1,
        description:
          'A negotiator can use performance to calm emotions (as the spell) in creatures within 30 feet. Unlike the spell, this is not language-dependent but is mind-affecting.',
      },
      {
        name: 'Irresistible Demand',
        level: 9,
        description:
          'At 9th level, a negotiator can use performance to make a single demand of a target within 30 feet (as demand, Will negates). This costs 5 rounds of bardic performance.',
      },
      {
        name: 'Counter Offer',
        level: 3,
        description:
          'At 3rd level, when a creature within 30 feet attempts to use Intimidate or a mind-affecting effect, the negotiator can spend a round of bardic performance as an immediate action to grant all allies within 30 feet a +4 bonus on saves against that effect.',
      },
      {
        name: 'Natural Diplomat',
        level: 6,
        description:
          'At 6th level, a negotiator can take 10 on all Diplomacy and Sense Motive checks. At 12th level he can take 20 on Diplomacy once per day.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 32. Phrenologist
  // ──────────────────────────────────────────────
  {
    name: 'Phrenologist',
    className: 'Bard',
    description:
      'A phrenologist studies the contours of the skull and body to read personalities, using this unusual practice to enhance his bardic abilities.',
    replacedFeatures: ['Bardic Knowledge', 'Fascinate', 'Versatile Performance', 'Well-Versed'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Psychic Sensitivity',
        level: 1,
        description:
          'A phrenologist gains Psychic Sensitivity as a bonus feat, allowing him to use occult skill unlocks for his trained skills.',
      },
      {
        name: 'Read Aura',
        level: 1,
        description:
          'A phrenologist adds half his level to Perception and Sense Motive checks to read creature auras and discern alignment, emotions, and health.',
      },
      {
        name: 'Phrenologic Touch',
        level: 2,
        description:
          "At 2nd level, a phrenologist can make a touch attack to read a creature's mental ability scores and current emotional state. He also learns the target's HD and class levels.",
      },
      {
        name: 'Hypnotic Stare',
        level: 5,
        description:
          "At 5th level, a phrenologist can use performance to create a hypnotic stare that penalizes a target's Will saves by -2. This increases to -3 at 11th level and -4 at 17th level.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 33. Prankster
  // ──────────────────────────────────────────────
  {
    name: 'Prankster',
    className: 'Bard',
    description:
      'Favored by gnomes and other trickster races, the prankster uses comedy, tricks, and humiliation to befuddle enemies and entertain allies.',
    replacedFeatures: [
      'Inspire Courage',
      'Inspire Competence',
      'Suggestion',
      'Dirge of Doom',
      'Mass Suggestion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Punchline',
        level: 1,
        description:
          "A prankster can use performance to cause an enemy within 30 feet to be flat-footed until the end of the bard's next turn (Will negates).",
      },
      {
        name: 'Mockery',
        level: 3,
        description:
          'At 3rd level, a prankster can use performance to demoralize a creature within 30 feet. The target takes a -2 penalty on attack rolls, ability checks, skill checks, and saving throws for as long as the performance continues.',
      },
      {
        name: 'Pratfall',
        level: 6,
        description:
          'At 6th level, a prankster can use performance to cause a single enemy within 30 feet to fall prone (Reflex negates). If the target fails by 5 or more, it is also stunned for 1 round.',
      },
      {
        name: 'Slapstick',
        level: 8,
        description:
          'At 8th level, a prankster can use performance to cause enemies within 30 feet to become confused for 1 round (Will negates).',
      },
      {
        name: 'Mass Punchline',
        level: 14,
        description:
          'At 14th level, a prankster can cause all enemies within 30 feet to be flat-footed for 1 round (Will negates).',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 34. Studious Librarian
  // ──────────────────────────────────────────────
  {
    name: 'Studious Librarian',
    className: 'Bard',
    description:
      'A studious librarian is a quiet scholar who uses books and scrolls rather than song, focusing on lore, information gathering, and written magic.',
    replacedFeatures: ['Countersong', 'Distraction', 'Inspire Courage', 'Fascinate'],
    modifiedFeatures: ['Bardic Performance'],
    newFeatures: [
      {
        name: 'Appearance of Literacy',
        level: 1,
        description:
          'A studious librarian uses Linguistics instead of Perform for all bardic performance effects. His performances are delivered as lectures, readings, or recitations.',
      },
      {
        name: 'Bibliophile',
        level: 1,
        description:
          'A studious librarian gains a bonus on Linguistics and all Knowledge checks equal to half his level. He can take 10 on Knowledge checks even under stress.',
      },
      {
        name: 'Scroll Mastery',
        level: 2,
        description:
          'At 2nd level, a studious librarian gains Scribe Scroll as a bonus feat and adds +2 to the DC of Use Magic Device checks to activate scrolls of spells on the bard spell list.',
      },
      {
        name: 'Cataloging Expertise',
        level: 5,
        description:
          'At 5th level, when a studious librarian successfully identifies a creature with a Knowledge check, allies within 30 feet gain a +2 insight bonus on attack rolls and AC against that creature for 1 minute.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 35. Lotus Geisha
  // ──────────────────────────────────────────────
  {
    name: 'Lotus Geisha',
    className: 'Bard',
    description:
      'A lotus geisha from Tian Xia combines grace, beauty, and subtle magic to entrance and manipulate, using enchantment-focused performances.',
    replacedFeatures: [
      'Countersong',
      'Bardic Knowledge',
      'Inspire Courage',
      'Lore Master',
      'Versatile Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Enchanting Performance',
        level: 1,
        description:
          'A lotus geisha gains +1 to the DC of enchantment spells she casts. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Enrapturing Performance',
        level: 1,
        description:
          'A lotus geisha can use performance to cause a creature within 30 feet to become fascinated (Will negates). This fascination persists for 1 round after the performance ends.',
      },
      {
        name: 'Calming Presence',
        level: 3,
        description:
          'At 3rd level, a lotus geisha can use performance to suppress hostile emotions. Enemies within 30 feet take a -2 penalty on attack rolls against the geisha and her allies.',
      },
      {
        name: 'Dominate Performance',
        level: 9,
        description:
          'At 9th level, a lotus geisha can use performance to dominate a creature already fascinated by her (as dominate person, Will negates).',
      },
      {
        name: 'Social Grace',
        level: 2,
        description:
          'At 2nd level, a lotus geisha selects one social skill. She gains a +4 bonus on that skill. Every 4 levels thereafter she selects an additional social skill.',
      },
    ],
    source: 'Dragon Empires Primer',
  },

  // ──────────────────────────────────────────────
  // 36. Demagogue
  // ──────────────────────────────────────────────
  {
    name: 'Demagogue',
    className: 'Bard',
    description:
      'A demagogue uses his oratory skills to whip crowds into a frenzy, wielding public opinion as a weapon and inspiring mobs to do his bidding.',
    replacedFeatures: [
      'Countersong',
      'Inspire Competence',
      'Dirge of Doom',
      'Lore Master',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Famous',
        level: 1,
        description:
          'A demagogue gains a bonus on Bluff, Diplomacy, and Intimidate checks equal to half his level in settlements where he is famous.',
      },
      {
        name: 'Gather Crowd',
        level: 3,
        description:
          'At 3rd level, a demagogue can gather a crowd in a settlement where he is famous, attracting 1d6 creatures per bard level over 1d10 minutes.',
      },
      {
        name: 'Incite Violence',
        level: 6,
        description:
          'At 6th level, a demagogue can use performance to incite a crowd into a violent frenzy. Creatures affected gain a +2 morale bonus on attack and damage rolls and a -2 penalty to AC.',
      },
      {
        name: 'Righteous Cause',
        level: 10,
        description:
          'At 10th level, a demagogue can use performance to direct a crowd toward a specific target or goal. The crowd acts on his orders for up to 1 hour.',
      },
      {
        name: 'Master Orator',
        level: 14,
        description:
          'At 14th level, a demagogue can affect crowds of up to 10 creatures per bard level with his performance. He can use suggestion on the entire crowd as a single action.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 37. Watersinger
  // ──────────────────────────────────────────────
  {
    name: 'Watersinger',
    className: 'Bard',
    description:
      'A watersinger draws from the power of water, using elemental melodies to shape and control liquid, and excel in aquatic environments.',
    replacedFeatures: [
      'Countersong',
      'Inspire Competence',
      'Suggestion',
      'Mass Suggestion',
      'Versatile Performance',
      'Well-Versed',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Watersong',
        level: 1,
        description:
          'A watersinger can use performance to control water within 30 feet. She can shape up to 5 cubic feet of water per bard level, creating simple shapes or barriers.',
      },
      {
        name: 'Waterstrike',
        level: 3,
        description:
          'At 3rd level, a watersinger can use performance to direct a jet of water at a target within 30 feet as a ranged touch attack dealing 1d6 bludgeoning damage per 3 bard levels.',
      },
      {
        name: 'Waterwalk',
        level: 6,
        description:
          'At 6th level, a watersinger can use performance to grant herself and allies within 30 feet the ability to walk on water (as water walk).',
      },
      {
        name: 'Water Elemental',
        level: 12,
        description:
          'At 12th level, a watersinger can use performance to transform into a Large water elemental (as elemental body III).',
      },
      {
        name: 'Swim Speed',
        level: 2,
        description:
          'At 2nd level, a watersinger gains a swim speed of 30 feet and the ability to breathe underwater.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 38. Animal Minstrel
  // ──────────────────────────────────────────────
  {
    name: 'Animal Minstrel',
    className: 'Bard',
    description:
      'An animal minstrel forms a deep bond with nature, learning the songs of animals and gaining an animal companion in place of standard bardic abilities.',
    replacedFeatures: [
      'Inspire Competence',
      'Versatile Performance',
      'Lore Master',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: ['Fascinate'],
    newFeatures: [
      {
        name: 'Animal Companion',
        level: 1,
        description:
          "An animal minstrel gains an animal companion as a druid of her bard level - 3 (minimum 1st). The companion gains the benefits of the bard's inspire courage performance.",
      },
      {
        name: "Nature's Voice",
        level: 1,
        description:
          'An animal minstrel can use fascinate on animals and magical beasts as well as humanoids.',
      },
      {
        name: 'Speak with Animals',
        level: 2,
        description:
          'At 2nd level, an animal minstrel can cast speak with animals at will as a spell-like ability.',
      },
      {
        name: 'Companion Bond',
        level: 5,
        description:
          'At 5th level, when the animal minstrel uses bardic performance, her animal companion gains double the normal bonus from the performance.',
      },
      {
        name: 'Wild Performance',
        level: 11,
        description:
          'At 11th level, an animal minstrel can use bardic performance to affect all animals and magical beasts within 60 feet as though they were allies.',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 39. Sorrowsoul
  // ──────────────────────────────────────────────
  {
    name: 'Sorrowsoul',
    className: 'Bard',
    description:
      'A sorrowsoul channels grief and loss into her performances, evoking deep emotional pain to debilitate enemies and provide catharsis for allies.',
    replacedFeatures: [
      'Inspire Courage',
      'Fascinate',
      'Suggestion',
      'Mass Suggestion',
      'Inspire Heroics',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Plaintive Song',
        level: 1,
        description:
          'A sorrowsoul can use performance to cause enemies within 30 feet to take a -1 penalty on attack rolls, weapon damage rolls, and Will saves. This penalty increases by -1 at 5th level and every 6 levels thereafter.',
      },
      {
        name: 'Haunting Lament',
        level: 3,
        description:
          'At 3rd level, a sorrowsoul can use performance to cause a single creature within 30 feet to become sickened (Will negates). At 11th level, the target is nauseated instead.',
      },
      {
        name: 'Shared Grief',
        level: 7,
        description:
          'At 7th level, when the sorrowsoul or an ally within 30 feet takes damage, she can redirect half that damage to an enemy within 30 feet (Will negates). This costs 2 rounds of performance.',
      },
      {
        name: 'Overwhelming Sorrow',
        level: 15,
        description:
          'At 15th level, a sorrowsoul can use performance to crush the will of all enemies within 30 feet. Targets must succeed at a Will save or be stunned for 1 round and staggered for 1d4 rounds thereafter.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 40. Masked Performer
  // ──────────────────────────────────────────────
  {
    name: 'Masked Performer',
    className: 'Bard',
    description:
      'A masked performer takes on different identities through a collection of magical masks, each granting different abilities and performance styles.',
    replacedFeatures: ['Bardic Knowledge', 'Versatile Performance', 'Well-Versed', 'Lore Master'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Persona Masks',
        level: 1,
        description:
          'A masked performer begins play with one persona mask. While wearing a persona mask, the bard gains a +1 bonus to a specific Perform skill and associated class feature bonuses. He gains additional masks at 4th, 8th, 12th, 16th, and 20th level.',
      },
      {
        name: 'Quick Change',
        level: 2,
        description:
          'At 2nd level, a masked performer can don or remove a persona mask as a move action. At 10th level this becomes a swift action.',
      },
      {
        name: 'Mask Synergy',
        level: 5,
        description:
          'At 5th level, a masked performer gains a +2 bonus on Disguise and Bluff checks while wearing a persona mask. This increases to +4 at 11th level and +6 at 17th level.',
      },
      {
        name: 'Many Faces',
        level: 5,
        description:
          'At 5th level, while wearing a persona mask, a masked performer can use disguise self at will as a spell-like ability.',
      },
      {
        name: 'Master of Masks',
        level: 14,
        description:
          'At 14th level, a masked performer can wear two persona masks simultaneously, gaining the benefits of both.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 41. Voice of Bravo
  // ──────────────────────────────────────────────
  {
    name: 'Voice of the Sibyl',
    className: 'Bard',
    description:
      'A voice of the sibyl has a prophetic gift, using her performances to deliver cryptic foretellings and grant allies the benefit of foresight.',
    replacedFeatures: ['Bardic Knowledge', 'Countersong', 'Inspire Competence', 'Lore Master'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sibylline Prophecy',
        level: 1,
        description:
          'Once per day, a voice of the sibyl can enter a trance and deliver a prophecy. Allies who hear the prophecy gain a +2 insight bonus on one roll of their choice in the next 24 hours.',
      },
      {
        name: 'Foresight',
        level: 2,
        description:
          'At 2nd level, the voice of the sibyl gains a +1 insight bonus on initiative checks and Reflex saves. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Prophetic Performance',
        level: 3,
        description:
          'At 3rd level, the voice of the sibyl can use performance to grant allies within 30 feet a +2 insight bonus to AC for 1 round. This increases by +1 at 7th level and every 4 levels thereafter.',
      },
      {
        name: 'Moment of Prescience',
        level: 11,
        description:
          'At 11th level, the voice of the sibyl can use 5 rounds of bardic performance to grant one ally within 30 feet the benefit of moment of prescience (as the spell).',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 42. Chronicler of Worlds
  // ──────────────────────────────────────────────
  {
    name: 'Chronicler of Worlds',
    className: 'Bard',
    description:
      'A chronicler of worlds travels the planes, recording the history and legends of distant realms and using planar lore to aid his allies.',
    replacedFeatures: ['Countersong', 'Versatile Performance', 'Well-Versed', 'Jack-of-All-Trades'],
    modifiedFeatures: ['Bardic Knowledge'],
    newFeatures: [
      {
        name: 'Planar Lore',
        level: 1,
        description:
          'A chronicler of worlds adds half his level on Knowledge (planes) checks and can make Knowledge (planes) checks untrained. His bardic knowledge bonus doubles for checks related to other planes.',
      },
      {
        name: 'Planar Resistance',
        level: 2,
        description:
          'At 2nd level, a chronicler of worlds gains a +2 bonus on saves against planar effects, outsider spell-like abilities, and extraplanar environmental dangers. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Song of the Spheres',
        level: 6,
        description:
          'At 6th level, the chronicler can use performance to grant allies within 30 feet resistance 5 to one energy type of his choice (acid, cold, electricity, fire, or sonic). This increases to resistance 10 at 12th level.',
      },
      {
        name: 'Plane Shift',
        level: 14,
        description:
          'At 14th level, the chronicler can spend 10 rounds of bardic performance to cast plane shift on himself and willing allies within 30 feet.',
      },
    ],
    source: 'Planar Adventures',
  },

  // ──────────────────────────────────────────────
  // 43. Sound Buffer
  // ──────────────────────────────────────────────
  {
    name: 'Sound Buffer',
    className: 'Bard',
    description:
      'A sound buffer uses sonic vibrations to create protective barriers, shielding allies from harm with walls of sound and disruptive frequencies.',
    replacedFeatures: [
      'Fascinate',
      'Inspire Competence',
      'Suggestion',
      'Dirge of Doom',
      'Mass Suggestion',
    ],
    modifiedFeatures: ['Countersong'],
    newFeatures: [
      {
        name: 'Sonic Shield',
        level: 1,
        description:
          'A sound buffer can use performance to create a shield of sound around an ally within 30 feet, granting a +2 deflection bonus to AC. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Resonance Barrier',
        level: 3,
        description:
          'At 3rd level, the sound buffer can use performance to grant allies within 30 feet sonic resistance 5. This increases to sonic resistance 10 at 9th level and sonic resistance 15 at 15th level.',
      },
      {
        name: 'Wall of Sound',
        level: 8,
        description:
          'At 8th level, the sound buffer can use performance to create a wall of sound (as wall of force but made of sonic energy). The wall lasts as long as the performance continues.',
      },
      {
        name: 'Dissonance',
        level: 14,
        description:
          'At 14th level, the sound buffer can use performance to disrupt spellcasting within 30 feet. Creatures casting spells must succeed at a concentration check (DC 15 + bard level) or lose the spell.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 44. Cultivator
  // ──────────────────────────────────────────────
  {
    name: 'Cultivator',
    className: 'Bard',
    description:
      'A cultivator nurtures growth and creativity in others, using performance to draw out hidden talents and push allies beyond their normal limits.',
    replacedFeatures: ['Fascinate', 'Suggestion', 'Mass Suggestion', 'Deadly Performance'],
    modifiedFeatures: ['Inspire Competence'],
    newFeatures: [
      {
        name: 'Nurture',
        level: 1,
        description:
          'A cultivator can use performance to grant one ally within 30 feet a +2 bonus to a single ability score for as long as the performance continues. At 5th level this bonus increases to +4, at 11th level to +6.',
      },
      {
        name: 'Draw Out Potential',
        level: 3,
        description:
          "At 3rd level, the cultivator's inspire competence can be used on an ally to grant a bonus on all skill checks rather than just one skill. The bonus is reduced by 1 (minimum +1).",
      },
      {
        name: 'Rekindle',
        level: 7,
        description:
          'At 7th level, when an ally within 30 feet fails a save against a mind-affecting effect, the cultivator can spend 2 rounds of performance as an immediate action to allow that ally to reroll the save.',
      },
      {
        name: 'Shared Mastery',
        level: 15,
        description:
          'At 15th level, the cultivator can share any feat or class feature he possesses with an ally within 30 feet for as long as performance continues.',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 45. Averaka Arbiter
  // ──────────────────────────────────────────────
  {
    name: 'Averaka Arbiter',
    className: 'Bard',
    description:
      'The Averaka arbiter serves as a mediator and judge in tribal communities, using oral traditions and ancient songs to settle disputes and preserve law.',
    replacedFeatures: [
      'Fascinate',
      'Countersong',
      'Suggestion',
      'Inspire Heroics',
      'Versatile Performance',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Arbiter's Authority",
        level: 1,
        description:
          'An Averaka arbiter gains a bonus equal to half his level on Diplomacy, Intimidate, and Sense Motive checks when mediating disputes or acting in an official capacity.',
      },
      {
        name: 'Voice of Law',
        level: 1,
        description:
          'The arbiter can use performance to compel creatures within 30 feet to cease hostilities for 1 round per bard level (Will negates). This is a mind-affecting compulsion effect.',
      },
      {
        name: 'Pronounce Judgment',
        level: 6,
        description:
          'At 6th level, the arbiter can use performance to pronounce judgment on a single creature within 30 feet. The target takes a -2 penalty on all d20 rolls for 1 round per bard level (Will negates).',
      },
      {
        name: 'Binding Oath',
        level: 10,
        description:
          'At 10th level, the arbiter can use performance to compel a willing creature to swear an oath. Breaking the oath subjects the creature to a bestow curse effect.',
      },
      {
        name: 'Final Verdict',
        level: 15,
        description:
          'At 15th level, the arbiter can use performance to deliver a devastating pronouncement. The target must succeed at a Will save or be affected as by imprisonment.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 46. Hoaxer
  // ──────────────────────────────────────────────
  {
    name: 'Hoaxer',
    className: 'Bard',
    description:
      'A hoaxer specializes in creating elaborate deceptions, false personas, and convincing illusions, tricking enemies into acting on false information.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Inspire Courage',
      'Inspire Competence',
      'Versatile Performance',
      'Lore Master',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Master of Disguise',
        level: 1,
        description:
          'A hoaxer gains a bonus on Bluff and Disguise checks equal to half his bard level (minimum +1). He can create a disguise in half the normal time.',
      },
      {
        name: 'Dupe',
        level: 1,
        description:
          "A hoaxer can use performance to cause a creature within 30 feet to believe an illusion of the bard's choosing. This functions as silent image but only affects the targeted creature (Will negates).",
      },
      {
        name: 'Hoax Performance',
        level: 3,
        description:
          'At 3rd level, a hoaxer can use performance to grant allies within 30 feet a +2 bonus on Bluff, Disguise, and Sleight of Hand checks. This bonus increases by +1 at 7th level and every 4 levels thereafter.',
      },
      {
        name: 'False Renown',
        level: 5,
        description:
          'At 5th level, a hoaxer can assume a false identity completely for 24 hours per bard level. During this time, divination effects confirm the false identity.',
      },
      {
        name: 'Grand Hoax',
        level: 11,
        description:
          'At 11th level, a hoaxer can create a persistent illusion affecting all senses within a 30-foot radius. This requires 10 rounds of performance and lasts 1 hour per level.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 47. Provocateur
  // ──────────────────────────────────────────────
  {
    name: 'Provocateur',
    className: 'Bard',
    description:
      'A provocateur uses inflammatory speech to goad enemies into reckless actions and inspire allies through daring defiance.',
    replacedFeatures: [
      'Countersong',
      'Fascinate',
      'Inspire Competence',
      'Suggestion',
      'Mass Suggestion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Incendiary Words',
        level: 1,
        description:
          'A provocateur can use performance to taunt an enemy within 30 feet. The target must succeed at a Will save or be compelled to attack the provocateur to the exclusion of other targets for 1 round per bard level.',
      },
      {
        name: 'Cutting Barb',
        level: 3,
        description:
          "At 3rd level, a provocateur can use performance to reduce an enemy's morale bonus on saves by an amount equal to half the inspire courage bonus.",
      },
      {
        name: 'Infuriate',
        level: 8,
        description:
          'At 8th level, a provocateur can use performance to cause all enemies within 30 feet to become enraged (as the confusion spell but they can only attack the nearest creature). Will negates.',
      },
      {
        name: 'Words of Challenge',
        level: 6,
        description:
          'At 6th level, when a provocateur uses incendiary words, the target also takes a -2 penalty on attack rolls against targets other than the provocateur.',
      },
      {
        name: 'Scandal',
        level: 14,
        description:
          "At 14th level, a provocateur can use performance to permanently destroy a target's reputation in a settlement. The target's Diplomacy checks in that settlement take a -10 penalty.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 48. Busker
  // ──────────────────────────────────────────────
  {
    name: 'Busker',
    className: 'Bard',
    description:
      'A busker is a street entertainer who uses his art to distract marks and slip through urban environments unnoticed.',
    replacedFeatures: [
      'Bardic Knowledge',
      'Countersong',
      'Lore Master',
      'Inspire Greatness',
      'Jack-of-All-Trades',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Streetwise',
        level: 1,
        description:
          'A busker adds half his level (minimum +1) on Knowledge (local), Perception, Sleight of Hand, and Stealth checks in urban environments.',
      },
      {
        name: 'Distracting Performance',
        level: 1,
        description:
          'A busker can use performance to allow allies within 30 feet to make Stealth and Sleight of Hand checks without penalty even while being observed.',
      },
      {
        name: 'Crowd Camouflage',
        level: 3,
        description:
          'At 3rd level, a busker can use Stealth to hide in a crowd even without cover or concealment. He gains a +4 bonus on Stealth checks in urban areas.',
      },
      {
        name: 'Misdirection',
        level: 9,
        description:
          'At 9th level, a busker can use performance to redirect attention. A creature within 30 feet that fails a Will save cannot perceive the busker or one ally for the duration of the performance.',
      },
      {
        name: 'Escape Artist',
        level: 5,
        description:
          'At 5th level, a busker gains a bonus equal to his bard level on Escape Artist checks and can use Escape Artist in place of combat maneuver checks to escape grapples.',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 49. Daredevil
  // ──────────────────────────────────────────────
  {
    name: 'Daredevil',
    className: 'Bard',
    description:
      'A daredevil bard uses acrobatic feats and death-defying stunts as his performance medium, wowing crowds while dodging danger.',
    replacedFeatures: [
      'Countersong',
      'Inspire Competence',
      'Versatile Performance',
      'Well-Versed',
      'Lore Master',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Daredevil Stunt',
        level: 1,
        description:
          'A daredevil gains a competence bonus equal to half his level on Acrobatics, Climb, Escape Artist, and Fly checks.',
      },
      {
        name: 'Canny Foe',
        level: 2,
        description:
          'At 2nd level, a daredevil gains a +1 dodge bonus to AC. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Agile',
        level: 2,
        description:
          'At 2nd level, a daredevil gains evasion. At 10th level, he gains improved evasion.',
      },
      {
        name: 'Death-Defying',
        level: 6,
        description:
          'At 6th level, a daredevil is not flat-footed when balancing or climbing, and does not lose his Dexterity bonus to AC when doing so.',
      },
      {
        name: 'Derring-Do',
        level: 3,
        description:
          'At 3rd level, a daredevil can spend a round of bardic performance as a swift action to add +1d6 to an Acrobatics, Climb, Escape Artist, Fly, or Swim check. This increases to +2d6 at 9th level and +3d6 at 15th level.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 50. Storyteller
  // ──────────────────────────────────────────────
  {
    name: 'Storyteller',
    className: 'Bard',
    description:
      'A storyteller weaves tales so vivid they take on a life of their own, inspiring allies with legendary accounts and creating shadowy manifestations of fabled creatures.',
    replacedFeatures: [
      'Countersong',
      'Distraction',
      'Inspire Competence',
      'Lore Master',
      'Soothing Performance',
    ],
    modifiedFeatures: ['Bardic Knowledge'],
    newFeatures: [
      {
        name: 'Master Storyteller',
        level: 1,
        description:
          'A storyteller adds double his bardic knowledge bonus on all Knowledge checks related to legends, myths, and famous figures.',
      },
      {
        name: 'Inspiring Tale',
        level: 1,
        description:
          'A storyteller can use performance to recount legends of heroes. Allies within 30 feet who hear the tale gain a +1 morale bonus on saves against fear and +1 hit point per Hit Die as temporary hit points. These bonuses increase at 5th and every 6 levels thereafter.',
      },
      {
        name: 'Manifest Legend',
        level: 3,
        description:
          'At 3rd level, a storyteller can use performance to conjure a shadowy manifestation of a legendary creature. This functions as summon monster (spell level equals 1/3 bard level) but the summoned creature is quasi-real (50% hit points and damage).',
      },
      {
        name: 'Epic Recounting',
        level: 8,
        description:
          'At 8th level, a storyteller can use performance to grant allies within 30 feet the benefits of heroism for as long as the performance continues.',
      },
      {
        name: 'Living Legend',
        level: 14,
        description:
          'At 14th level, the storyteller can weave a tale so compelling that it temporarily rewrites reality. One ally within 30 feet gains the benefits of transformation for 1 round per bard level.',
      },
    ],
    source: 'Ultimate Magic',
  },
];
