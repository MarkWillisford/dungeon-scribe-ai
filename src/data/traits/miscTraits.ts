import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const MISC_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Rise of the Runelords ====================
  {
    id: 'scholar_of_the_ancients',
    name: 'Scholar of the Ancients',
    description:
      'Growing up with access to Old Light and other Thassilonian ruins has given you insight into the lost empire. You gain a +1 trait bonus on Knowledge (arcana) and Knowledge (history) checks, and one of these skills (your choice) becomes a class skill for you.',
    shortDescription: '+1 Knowledge (arcana) and Knowledge (history); one becomes class skill',
    source: "Rise of the Runelords Player's Guide",
    category: 'campaign',
    subcategory: 'Rise of the Runelords',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_arcana',
        value: 1,
        source: 'Scholar of the Ancients',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Scholar of the Ancients',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['Knowledge (arcana)', 'Knowledge (history)'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['knowledge', 'thassilon', 'history', 'arcana'],
  },
  {
    id: 'giant_slayer',
    name: 'Giant Slayer',
    description:
      'Your family has a long tradition of fighting giants. You gain a +1 trait bonus on Bluff, Perception, and Sense Motive checks against creatures of the giant subtype, and a +1 trait bonus on attack rolls and damage rolls against creatures of the giant subtype.',
    shortDescription: '+1 attack, damage, Bluff, Perception, Sense Motive vs giants',
    source: "Rise of the Runelords Player's Guide",
    category: 'campaign',
    subcategory: 'Rise of the Runelords',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack',
        value: 1,
        source: 'Giant Slayer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the giant subtype',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage',
        value: 1,
        source: 'Giant Slayer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the giant subtype',
        },
      },
    ],
    tags: ['giant', 'attack', 'damage'],
  },
  {
    id: 'hagfish_hopeful',
    name: 'Hagfish Hopeful',
    description:
      'You have visited Sandpoint and attempted to drink from the Hagfish tank. Whether or not you succeeded, the experience hardened your stomach. You gain a +2 trait bonus on Fortitude saves against disease and nausea effects.',
    shortDescription: '+2 Fortitude saves vs disease and nausea',
    source: "Rise of the Runelords Player's Guide",
    category: 'campaign',
    subcategory: 'Rise of the Runelords',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 2,
        source: 'Hagfish Hopeful',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against disease and nausea effects',
        },
      },
    ],
    tags: ['fortitude', 'disease', 'nausea', 'sandpoint'],
  },

  // ==================== CAMPAIGN TRAITS — Curse of the Crimson Throne ====================
  {
    id: 'drug_addict_recovered',
    name: 'Drug Addict (Recovered)',
    description:
      'You were once addicted to shiver, a dangerous and addictive drug. Having kicked the habit, you are now more resilient to its effects. You gain a +1 trait bonus on Fortitude saving throws.',
    shortDescription: '+1 Fortitude saves',
    source: "Curse of the Crimson Throne Player's Guide",
    category: 'campaign',
    subcategory: 'Curse of the Crimson Throne',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Drug Addict (Recovered)',
      },
    ],
    tags: ['fortitude', 'save'],
  },
  {
    id: 'unhappy_childhood',
    name: 'Unhappy Childhood',
    description:
      'Your childhood was harsh, but it toughened you. You gain a +1 trait bonus on Will saving throws.',
    shortDescription: '+1 Will saves',
    source: "Curse of the Crimson Throne Player's Guide",
    category: 'campaign',
    subcategory: 'Curse of the Crimson Throne',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Unhappy Childhood',
      },
    ],
    tags: ['will', 'save'],
  },
  {
    id: 'framed',
    name: 'Framed',
    description:
      'Someone you care about was falsely accused of murder by a fisherman who had been intimidated and manipulated by the crime lord Gaedren Lamm. Though the accused was eventually exonerated when the fisherman\'s coercion was exposed, the reputational damage was severe. You are determined to find Gaedren and gather evidence to fully clear the accused\'s name. Choose one of the following: Dropout — you were the accused; forced to leave your school or church after the false accusation, you gain a +1 trait bonus on Spellcraft checks, and Spellcraft is a class skill for you. Family Honor — the framed person was a family member; using your persuasive abilities, you extracted the truth, and you gain a +1 trait bonus on Bluff checks, and Bluff is a class skill for you.',
    shortDescription: '+1 Spellcraft (class skill) or +1 Bluff (class skill)',
    source: "Curse of the Crimson Throne Player's Guide",
    category: 'campaign',
    subcategory: 'Curse of the Crimson Throne',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose background',
        options: ['Dropout (Spellcraft)', 'Family Honor (Bluff)'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['spellcraft', 'bluff', 'class skill', 'korvosa'],
  },
  {
    id: 'love_lost',
    name: 'Love Lost',
    description:
      'A loved one was murdered and their ring stolen, and you suspect the crime lord Gaedren Lamm is responsible. You have recently located the ring for sale but cannot yet afford it. Choose one of the following: All Alone — your murdered loved one was a romantic partner; you gain a +1 trait bonus on Intimidate checks, and Intimidate is a class skill for you. Orphaned — your murdered loved one was your only surviving parent; you gain a +1 trait bonus on Survival checks, and Survival is a class skill for you.',
    shortDescription: '+1 Intimidate (class skill) or +1 Survival (class skill)',
    source: "Curse of the Crimson Throne Player's Guide",
    category: 'campaign',
    subcategory: 'Curse of the Crimson Throne',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose background',
        options: ['All Alone (Intimidate)', 'Orphaned (Survival)'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['intimidate', 'survival', 'class skill', 'korvosa'],
  },
  {
    id: 'missing_child',
    name: 'Missing Child',
    description:
      'A child you know has been abducted by the crime lord Gaedren Lamm, who uses children as pickpockets and thieves. Despite your efforts, the Korvosan Guard has proven unhelpful, leaving the rescue to you. Choose one of the following: Missing Sibling — you gain a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you. Missing Son or Daughter — you gain a +1 trait bonus on Will saves.',
    shortDescription: '+1 Sense Motive (class skill) or +1 Will saves',
    source: "Curse of the Crimson Throne Player's Guide",
    category: 'campaign',
    subcategory: 'Curse of the Crimson Throne',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose background',
        options: ['Missing Sibling (Sense Motive)', 'Missing Son or Daughter (Will save)'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['sense motive', 'will', 'save', 'korvosa'],
  },

  // ==================== CAMPAIGN TRAITS — Kingmaker ====================
  {
    id: 'sword_scion',
    name: 'Sword Scion',
    description:
      'You have lived all your life in and around the city of Restov, growing up on tales of Baron Aldori and the exploits of the Swordlords. You gain a +1 trait bonus on attack and damage rolls with longswords and Aldori dueling swords.',
    shortDescription: '+1 attack and damage with longswords and Aldori dueling swords',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack',
        value: 1,
        source: 'Sword Scion',
        condition: {
          type: 'weapon_type',
          params: { weapon: 'longsword' },
          description: 'With longswords and Aldori dueling swords',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage',
        value: 1,
        source: 'Sword Scion',
        condition: {
          type: 'weapon_type',
          params: { weapon: 'longsword' },
          description: 'With longswords and Aldori dueling swords',
        },
      },
    ],
    tags: ['longsword', 'aldori', 'attack', 'damage'],
  },
  {
    id: 'pioneer',
    name: 'Pioneer',
    description:
      'You have long lived along the fringes of civilization, where you have learned the hard way that living things and the environment itself can pose significant dangers. You gain a +1 trait bonus on Perception checks, and Perception becomes a class skill for you.',
    shortDescription: '+1 Perception; Perception becomes class skill',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Pioneer',
      },
    ],
    tags: ['perception', 'class skill'],
  },
  {
    id: 'bastard_km',
    name: 'Bastard',
    description:
      'One of your parents was a member of a great Brevic noble family, yet you lack substantive proof of your heritage. You have lived knowing you deserve the comforts and esteem of nobility while facing their contempt. You take a -1 penalty on all Charisma-based skill checks when dealing with members of nobility, but your stubbornness and individuality grant you a +1 trait bonus on Will saves. This penalty is removed if you ever establish yourself as a true noble.',
    shortDescription: '+1 Will saves; -1 Charisma skills vs nobles',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Bastard',
      },
      {
        type: 'penalty',
        bonusType: BonusType.TRAIT,
        target: 'skill.charisma_based',
        value: -1,
        source: 'Bastard',
        condition: {
          type: 'custom',
          params: {},
          description: 'When dealing with members of nobility',
        },
      },
    ],
    tags: ['will', 'save', 'brevoy', 'nobility'],
  },
  {
    id: 'brigand',
    name: 'Brigand',
    description:
      'You come from the River Kingdoms or the more lawless reaches of Brevoy, and have lived by ambushing travelers, bullying merchants, evading the law, and hiding in wild places. Facing trouble with the law or with rival criminals, you have joined an expedition into the Stolen Lands to disappear into places pursuers will not dare follow. You begin play with an extra 100 gp in ill-gotten gains, and gain a +1 trait bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks when dealing with brigands, thieves, bandits, and their ilk.',
    shortDescription: '+100 gp starting wealth; +1 Bluff/Diplomacy/Intimidate/Sense Motive vs criminals',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special',
        value: 0,
        source: 'Brigand',
      },
    ],
    tags: ['bluff', 'diplomacy', 'intimidate', 'sense motive', 'bandits'],
  },
  {
    id: 'noble_born',
    name: 'Noble Born',
    description:
      'You have a distant connection to one of Brevoy\'s noble families. Though your immediate family lacks significant wealth or influence, you have decided to prove your worth independent of your family name by testing yourself in the Stolen Lands. Choose one of the following family heritages: Garess (+2 Appraise for natural stones/metals; ignore movement penalty for first 5 feet of rocky difficult terrain), Lebeda (bonus language: Dwarven, Elven, Gnome, Giant, Halfling, Skald, or Sylvan), Lodovka (+1 Swim; Swim is a class skill), Medvyed (+2 Diplomacy with fey; +1 Will vs fey spells/abilities), Orlovsky (+1 CMD; +1 to one of Acrobatics, Diplomacy, or Stealth), or Surtova (+2 damage against flat-footed opponents with light or one-handed weapons).',
    shortDescription: 'Choose one of six Brevic noble family bonuses',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose noble family',
        options: ['Garess', 'Lebeda', 'Lodovka', 'Medvyed', 'Orlovsky', 'Surtova'],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    tags: ['brevoy', 'nobility', 'family'],
  },
  {
    id: 'rostlander',
    name: 'Rostlander',
    description:
      'You were raised in the south of Brevoy, a land of dense forests and rolling plains, of crystalline rivers and endless sapphire skies. You come from hearty stock and were raised with simple sensibilities of hard work winning well-deserved gains, the importance of charity and compassion, and the value of personal and familial honor. Yours is the country of the Aldori swordlords and the heroes who refused to bend before the armies of a violent conqueror. You care little for matters of politics and nobles or of deception and schemes. Your hardy nature grants you a +1 trait bonus on all Fortitude saves.',
    shortDescription: '+1 Fortitude saves',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Rostlander',
      },
    ],
    tags: ['fortitude', 'save', 'brevoy'],
  },
  {
    id: 'tough_minded',
    name: 'Tough Minded',
    description:
      'You have trained yourself to resist the mental attacks and trickery of those who would see you fail. You gain a +1 trait bonus on all Will saves made to resist mind-affecting effects.',
    shortDescription: '+1 Will saves vs mind-affecting effects',
    source: "Kingmaker Player's Guide",
    category: 'campaign',
    subcategory: 'Kingmaker',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Tough Minded',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against mind-affecting effects',
        },
      },
    ],
    tags: ['will', 'save', 'mind-affecting'],
  },

  // ==================== CAMPAIGN TRAITS — Carrion Crown ====================
  {
    id: 'making_good_on_promises',
    name: 'Making Good on Promises',
    description:
      'You promised Professor Lorrimor that you would look after his daughter. You gain a +2 trait bonus on Diplomacy checks, and Diplomacy becomes a class skill for you.',
    shortDescription: '+2 Diplomacy; Diplomacy becomes class skill',
    source: "Carrion Crown Player's Guide",
    category: 'campaign',
    subcategory: 'Carrion Crown',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Making Good on Promises',
      },
    ],
    tags: ['diplomacy', 'class skill'],
  },
  {
    id: 'teachers_pet',
    name: "Teacher's Pet",
    description:
      'Professor Lorrimor traveled the Inner Sea region lecturing and teaching, and you were one of his best students. You gain a +2 trait bonus on one Knowledge skill of your choice, and that Knowledge skill becomes a class skill for you.',
    shortDescription: '+2 to one Knowledge skill (your choice); becomes class skill',
    source: "Carrion Crown Player's Guide",
    category: 'campaign',
    subcategory: 'Carrion Crown',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose Knowledge skill',
        options: [
          'Knowledge (arcana)',
          'Knowledge (dungeoneering)',
          'Knowledge (engineering)',
          'Knowledge (geography)',
          'Knowledge (history)',
          'Knowledge (local)',
          'Knowledge (nature)',
          'Knowledge (nobility)',
          'Knowledge (planes)',
          'Knowledge (religion)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['knowledge', 'class skill'],
  },
  {
    id: 'chance_savior',
    name: 'Chance Savior',
    description:
      'Fate smiled on you and Professor Lorrimor when you were in a position to save his life. Tossed together by chance, the professor took an interest in you and, when he died, left you something in his will. He may have saved your life in return, or helped you in some other way. Regardless, he named you as a potential heir. You gain a +2 trait bonus on Initiative checks.',
    shortDescription: '+2 Initiative',
    source: "Carrion Crown Player's Guide",
    category: 'campaign',
    subcategory: 'Carrion Crown',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Chance Savior',
      },
    ],
    tags: ['initiative'],
  },
  {
    id: 'inspired_by_greatness',
    name: 'Inspired by Greatness',
    description:
      'Professor Lorrimor\'s career and discoveries motivated you to excel. As you honed your craft, you and the professor corresponded, and he was delighted to hear that he had directly or indirectly motivated you to strive for your full potential. His death has left you determined to honor his memory. Choose one spell you can cast. You always cast that spell at +1 caster level.',
    shortDescription: '+1 caster level for one chosen spell',
    source: "Carrion Crown Player's Guide",
    category: 'campaign',
    subcategory: 'Carrion Crown',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special',
        value: 0,
        source: 'Inspired by Greatness',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose spell for +1 caster level',
        options: [],
        affectsEffects: true,
        effectTargetTemplate: 'caster_level.{choice}',
      },
    ],
    tags: ['caster level', 'spell', 'lorrimor'],
  },
  {
    id: 'on_the_payroll',
    name: 'On the Payroll',
    description:
      'Professor Lorrimor was never shy about hiring professionals to help him attain his goals. Over the course of his long career, he employed thousands of skilled individuals and remembered those who served him well. You were among those he called upon repeatedly, and he has left you a bequest in recognition of your skilled service. You gain an additional 150 gp in starting wealth.',
    shortDescription: '+150 gp starting wealth',
    source: "Carrion Crown Player's Guide",
    category: 'campaign',
    subcategory: 'Carrion Crown',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special',
        value: 0,
        source: 'On the Payroll',
      },
    ],
    tags: ['wealth', 'starting gold', 'lorrimor'],
  },
  {
    id: 'subject_of_study',
    name: 'Subject of Study',
    description:
      'Professor Lorrimor approached you to study you after you survived an encounter with a creature that most people would have found lethal. Through his study of you, he noted incredible details about the encounter and helped you to better understand the creature that nearly killed you. Choose a non-humanoid creature type (and subtype if outsider). You gain a +1 bonus on damage rolls against creatures of the chosen type.',
    shortDescription: '+1 damage vs chosen creature type',
    source: "Carrion Crown Player's Guide",
    category: 'campaign',
    subcategory: 'Carrion Crown',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage',
        value: 1,
        source: 'Subject of Study',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures of the chosen type',
        },
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose creature type',
        options: [
          'Aberration',
          'Animal',
          'Construct',
          'Dragon',
          'Fey',
          'Magical Beast',
          'Monstrous Humanoid',
          'Ooze',
          'Plant',
          'Undead',
          'Vermin',
          'Outsider (air)',
          'Outsider (chaotic)',
          'Outsider (earth)',
          'Outsider (evil)',
          'Outsider (fire)',
          'Outsider (good)',
          'Outsider (lawful)',
          'Outsider (native)',
          'Outsider (water)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'damage.{choice}',
      },
    ],
    tags: ['damage', 'creature type'],
  },

  // ==================== CAMPAIGN TRAITS — Skull & Shackles ====================
  {
    id: 'besmaras_blessing',
    name: "Besmara's Blessing",
    description:
      'You were born aboard a ship and shark-souled Besmara has marked you as her own. You gain a +1 trait bonus on Perception checks and Profession (sailor) checks. You can also hold your breath for 2 additional rounds.',
    shortDescription: '+1 Perception and Profession (sailor); +2 rounds breath holding',
    source: "Skull & Shackles Player's Guide",
    category: 'campaign',
    subcategory: 'Skull & Shackles',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: "Besmara's Blessing",
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_sailor',
        value: 1,
        source: "Besmara's Blessing",
      },
    ],
    tags: ['perception', 'profession', 'sailor', 'swim'],
  },
  {
    id: 'ships_surgeon',
    name: "Ship's Surgeon",
    description:
      "On your last ship, you served as the ship's surgeon. You gain a +1 trait bonus on Heal checks, and Heal becomes a class skill for you. In addition, once per day when you treat a creature's deadly wounds, you can also cure 1d4 points of ability damage to one ability score.",
    shortDescription:
      '+1 Heal (class skill); 1/day cure 1d4 ability damage when treating deadly wounds',
    source: "Skull & Shackles Player's Guide",
    category: 'campaign',
    subcategory: 'Skull & Shackles',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.heal',
        value: 1,
        source: "Ship's Surgeon",
      },
    ],
    tags: ['heal', 'class skill', 'ability damage'],
  },

  // ==================== CAMPAIGN TRAITS — Wrath of the Righteous ====================
  {
    id: 'exposed_to_awfulness',
    name: 'Exposed to Awfulness',
    description:
      'When you were a child, you were nearly slain by a demon that attacked your village. The experience left you frightened, but also blessed you with an extraordinary will to survive. You gain a +2 trait bonus on saves against fear effects, and a +1 trait bonus on Initiative checks.',
    shortDescription: '+2 saves vs fear; +1 Initiative',
    source: "Wrath of the Righteous Player's Guide",
    category: 'campaign',
    subcategory: 'Wrath of the Righteous',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Exposed to Awfulness',
        condition: { type: 'custom', params: {}, description: 'Against fear effects' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Exposed to Awfulness',
      },
    ],
    tags: ['fear', 'initiative', 'demon'],
  },
  {
    id: 'riftwarden_orphan',
    name: 'Riftwarden Orphan',
    description:
      'You bear a strange birthmark on your body that matches the symbol of the Riftwardens, an organization devoted to fighting extraplanar threats. You gain a +2 trait bonus on concentration checks, and Knowledge (planes) becomes a class skill for you.',
    shortDescription: '+2 concentration; Knowledge (planes) is class skill',
    source: "Wrath of the Righteous Player's Guide",
    category: 'campaign',
    subcategory: 'Wrath of the Righteous',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'concentration',
        value: 2,
        source: 'Riftwarden Orphan',
      },
    ],
    tags: ['concentration', 'planes', 'class skill', 'riftwarden'],
  },

  // ==================== CAMPAIGN TRAITS — Hell's Rebels ====================
  {
    id: 'bruised_but_not_broken',
    name: 'Bruised But Not Broken',
    description:
      'Thrune and her cronies may have beaten you down physically, but your spirit remains unbroken. You gain a +1 trait bonus on Will saves.',
    shortDescription: '+1 Will saves',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Bruised But Not Broken',
      },
    ],
    tags: ['will', 'save'],
  },
  {
    id: 'ex_asmodean',
    name: 'Ex-Asmodean',
    description:
      'You used to be a follower of Asmodeus but have since renounced the Prince of Darkness. Your time as one of his faithful has given you an understanding of his church. You gain a +1 trait bonus on Knowledge (religion) checks, and Knowledge (religion) becomes a class skill for you.',
    shortDescription: '+1 Knowledge (religion); becomes class skill',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Ex-Asmodean',
      },
    ],
    tags: ['knowledge', 'religion', 'class skill', 'asmodeus'],
  },

  // ==================== CAMPAIGN TRAITS — Strange Aeons ====================
  {
    id: 'former_sailor',
    name: 'Former Sailor',
    description:
      'You spent time as a sailor before losing your memory. You gain a +1 trait bonus on Profession (sailor) and Swim checks, and one of these becomes a class skill for you.',
    shortDescription: '+1 Profession (sailor) and Swim; one becomes class skill',
    source: "Strange Aeons Player's Guide",
    category: 'campaign',
    subcategory: 'Strange Aeons',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_sailor',
        value: 1,
        source: 'Former Sailor',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 1,
        source: 'Former Sailor',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['Profession (sailor)', 'Swim'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['swim', 'profession', 'sailor', 'class skill'],
  },
  {
    id: 'lost_linguist',
    name: 'Lost Linguist',
    description:
      'Before your memory loss, you studied languages extensively. You gain a +1 trait bonus on Linguistics checks, and Linguistics becomes a class skill for you. You also begin play knowing one additional language.',
    shortDescription: '+1 Linguistics (class skill); +1 bonus language',
    source: "Strange Aeons Player's Guide",
    category: 'campaign',
    subcategory: 'Strange Aeons',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Lost Linguist',
      },
    ],
    tags: ['linguistics', 'class skill', 'language'],
  },

  // ==================== EQUIPMENT TRAITS — Melee/Ranged Tactics Toolbox ====================
  {
    id: 'heirloom_weapon',
    name: 'Heirloom Weapon',
    description:
      'You carry a non-masterwork simple or martial weapon that has been passed down from generation to generation in your family. When you select this trait, choose a specific weapon. You gain proficiency with that specific weapon. In addition, you gain a +1 trait bonus to attack rolls with that weapon when you attempt to confirm a critical hit.',
    shortDescription: 'Proficiency with one weapon; +1 to confirm critical hits with it',
    source: 'Melee Tactics Toolbox',
    category: 'equipment',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'weapon',
        label: 'Choose heirloom weapon',
        affectsEffects: true,
        effectTargetTemplate: 'proficiency.{choice}',
      },
    ],
    tags: ['weapon', 'proficiency', 'critical'],
  },
  {
    id: 'rough_and_ready',
    name: 'Rough and Ready',
    description:
      'Your extensive background working with a particular profession has made you handy with any of its tools. You treat all improvised weapons related to your profession as if they were martial weapons. In addition, you gain a +1 trait bonus on damage rolls with these improvised weapons.',
    shortDescription: 'Profession tools as martial weapons; +1 damage with them',
    source: 'Melee Tactics Toolbox',
    category: 'equipment',
    prerequisites: [],
    effects: [],
    tags: ['improvised', 'weapon', 'profession', 'damage'],
  },

  // ==================== RACE TRAITS — Blood of Angels ====================
  {
    id: 'celestial_lore',
    name: 'Celestial Lore',
    description:
      'Your aasimar heritage has given you insight into the nature of celestial beings. You gain a +1 trait bonus on Knowledge (planes) checks regarding good-aligned outsiders, and Knowledge (planes) becomes a class skill for you.',
    shortDescription: '+1 Knowledge (planes) vs good outsiders; class skill',
    source: 'Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Celestial Lore',
        condition: { type: 'custom', params: {}, description: 'Regarding good-aligned outsiders' },
      },
    ],
    tags: ['knowledge', 'planes', 'aasimar', 'class skill'],
  },
  {
    id: 'incorruptible',
    name: 'Incorruptible',
    description:
      'Your aasimar blood bolsters your resistance to corruption and temptation. You gain a +2 trait bonus on saving throws against the spells and abilities of evil outsiders.',
    shortDescription: '+2 saves vs evil outsiders',
    source: 'Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Incorruptible',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells and abilities of evil outsiders',
        },
      },
    ],
    tags: ['save', 'aasimar', 'evil', 'outsider'],
  },

  // ==================== RACE TRAITS — Blood of Fiends ====================
  {
    id: 'fiendish_sprinter',
    name: 'Fiendish Sprinter',
    description:
      'Some tieflings have elongated legs and hooves, granting them a disproportionately swift stride. You gain a +5 foot bonus to your base land speed when using the charge, run, or withdraw actions.',
    shortDescription: '+5 ft speed when charging, running, or withdrawing',
    source: 'Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'speed',
        value: 5,
        source: 'Fiendish Sprinter',
        condition: {
          type: 'custom',
          params: {},
          description: 'When charging, running, or withdrawing',
        },
      },
    ],
    tags: ['speed', 'tiefling', 'charge', 'run'],
  },
  {
    id: 'pitborn',
    name: 'Pitborn',
    description:
      'Your fiendish heritage traces back to the deepest pits of the Abyss. You gain a +1 trait bonus on Intimidate checks, and Intimidate becomes a class skill for you.',
    shortDescription: '+1 Intimidate; Intimidate becomes class skill',
    source: 'Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Pitborn',
      },
    ],
    tags: ['intimidate', 'tiefling', 'class skill'],
  },

  // ==================== RELIGION TRAITS — Faiths & Philosophies ====================
  {
    id: 'open_hand',
    name: 'Open Hand',
    description:
      'The philosophy of the Open Hand teaches that true strength comes from helping others. You gain a +1 trait bonus on Heal checks and Heal becomes a class skill for you.',
    shortDescription: '+1 Heal; Heal becomes class skill',
    source: 'Faiths & Philosophies',
    category: 'religion',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.heal',
        value: 1,
        source: 'Open Hand',
      },
    ],
    tags: ['heal', 'class skill'],
  },
  {
    id: 'truth_seeker',
    name: 'Truth Seeker',
    description:
      'Your pursuit of truth has sharpened your ability to detect deception. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive becomes a class skill for you.',
    shortDescription: '+1 Sense Motive; becomes class skill',
    source: 'Faiths & Philosophies',
    category: 'religion',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Truth Seeker',
      },
    ],
    tags: ['sense motive', 'class skill'],
  },
  {
    id: 'chains_of_honor',
    name: 'Chains of Honor',
    description:
      'You follow a strict code of conduct that grants you inner peace and resolve. You gain a +1 trait bonus on Will saves against compulsion effects.',
    shortDescription: '+1 Will saves vs compulsion',
    source: 'Faiths & Philosophies',
    category: 'religion',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Chains of Honor',
        condition: { type: 'custom', params: {}, description: 'Against compulsion effects' },
      },
    ],
    tags: ['will', 'save', 'compulsion'],
  },

  // ==================== SOCIAL TRAITS — Bastards of Golarion ====================
  {
    id: 'bastard',
    name: 'Bastard',
    description:
      'You were born out of wedlock. You have always had to work harder to earn respect. You gain a +1 trait bonus on Will saves against charm and compulsion effects.',
    shortDescription: '+1 Will saves vs charm and compulsion',
    source: 'Bastards of Golarion',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Bastard',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm and compulsion effects',
        },
      },
    ],
    tags: ['will', 'save', 'charm', 'compulsion'],
  },
  {
    id: 'self_made',
    name: 'Self-Made',
    description:
      'You had to rely on yourself from a young age, building your own success through hard work and determination. You gain a +1 trait bonus on Profession checks, and one Profession skill of your choice becomes a class skill for you.',
    shortDescription: '+1 Profession checks; one Profession becomes class skill',
    source: 'Bastards of Golarion',
    category: 'social',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose Profession skill',
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['profession', 'class skill'],
  },
  {
    id: 'kin_guardian',
    name: 'Kin Guardian',
    description:
      'You are dedicated to protecting your family and those you consider kin. You gain a +1 trait bonus on attack of opportunity attack rolls and a +2 trait bonus on CMD against bull rush, grapple, and overrun attempts.',
    shortDescription: '+1 AoO attack rolls; +2 CMD vs bull rush/grapple/overrun',
    source: 'Bastards of Golarion',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd',
        value: 2,
        source: 'Kin Guardian',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against bull rush, grapple, and overrun attempts',
        },
      },
    ],
    tags: ['aoo', 'cmd', 'combat'],
  },

  // ==================== COMBAT TRAITS — Various Player Companions ====================
  {
    id: 'bred_for_war',
    name: 'Bred for War',
    description:
      'You are imposing and intimidating on the battlefield. You gain a +1 trait bonus on Intimidate checks and a +1 trait bonus on CMB checks to make bull rush attempts.',
    shortDescription: '+1 Intimidate; +1 CMB for bull rush',
    source: 'Humans of Golarion',
    category: 'combat',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Bred for War',
      },
    ],
    tags: ['intimidate', 'bull rush', 'cmb'],
  },
  {
    id: 'blood_of_dragons',
    name: 'Blood of Dragons',
    description:
      'You have a trace of draconic blood in your veins. You gain a +1 trait bonus on Perception checks and a +1 trait bonus on saves vs sleep and paralysis effects.',
    shortDescription: '+1 Perception; +1 saves vs sleep and paralysis',
    source: 'Kobolds of Golarion',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Blood of Dragons',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Blood of Dragons',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against sleep and paralysis effects',
        },
      },
    ],
    tags: ['perception', 'save', 'sleep', 'paralysis', 'dragon'],
  },
  {
    id: 'serpentine_squeeze',
    name: 'Serpentine Squeeze',
    description:
      'Your body is unusually lithe and you can fit into tight spaces with ease. You gain a +1 trait bonus on Escape Artist checks, and Escape Artist becomes a class skill for you.',
    shortDescription: '+1 Escape Artist; becomes class skill',
    source: 'Kobolds of Golarion',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escape_artist',
        value: 1,
        source: 'Serpentine Squeeze',
      },
    ],
    tags: ['escape artist', 'class skill'],
  },

  // ==================== MAGIC TRAITS — Various Player Companions ====================
  {
    id: 'eldritch_smith',
    name: 'Eldritch Smith',
    description:
      'You have studied the art of imbuing weapons and armor with magical properties. You gain a +1 trait bonus on Spellcraft checks to identify the properties of magic items, and Spellcraft becomes a class skill for you.',
    shortDescription: '+1 Spellcraft to identify magic item properties; class skill',
    source: "Adventurer's Armory",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Eldritch Smith',
        condition: {
          type: 'custom',
          params: {},
          description: 'To identify the properties of magic items',
        },
      },
    ],
    tags: ['spellcraft', 'magic items', 'class skill'],
  },
  {
    id: 'arcane_temper',
    name: 'Arcane Temper',
    description:
      'You have quick reflexes and a hair-trigger temper when it comes to magical threats. You gain a +1 trait bonus on concentration checks and Initiative checks.',
    shortDescription: '+1 concentration and Initiative checks',
    source: 'Blood of the Moon',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'concentration',
        value: 1,
        source: 'Arcane Temper',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Arcane Temper',
      },
    ],
    tags: ['concentration', 'initiative'],
  },
  {
    id: 'shrouded_casting',
    name: 'Shrouded Casting',
    description:
      'You have learned to conceal your spellcasting from others. You gain a +1 trait bonus on Bluff checks to disguise your spellcasting and a +1 trait bonus on Sleight of Hand checks to conceal spell components.',
    shortDescription: '+1 Bluff to disguise casting; +1 Sleight of Hand to hide components',
    source: 'Heroes of the Streets',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Shrouded Casting',
        condition: { type: 'custom', params: {}, description: 'To disguise spellcasting' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sleight_of_hand',
        value: 1,
        source: 'Shrouded Casting',
        condition: { type: 'custom', params: {}, description: 'To conceal spell components' },
      },
    ],
    tags: ['bluff', 'sleight of hand', 'stealth casting'],
  },

  // ==================== SOCIAL TRAITS — Various Player Companions ====================
  {
    id: 'noble_scion_trait',
    name: 'Noble Scion',
    description:
      'You are a member of a noble family. You gain a +2 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) becomes a class skill for you.',
    shortDescription: '+2 Knowledge (nobility); becomes class skill',
    source: 'Inner Sea Primer',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 2,
        source: 'Noble Scion',
      },
    ],
    tags: ['knowledge', 'nobility', 'class skill'],
  },
  {
    id: 'criminal_record',
    name: 'Criminal Record',
    description:
      'You have a criminal past that has left you with useful skills. You gain a +1 trait bonus on Disable Device checks, and Disable Device becomes a class skill for you.',
    shortDescription: '+1 Disable Device; becomes class skill',
    source: 'Heroes of the Streets',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disable_device',
        value: 1,
        source: 'Criminal Record',
      },
    ],
    tags: ['disable device', 'class skill'],
  },
  {
    id: 'crowd_dodger',
    name: 'Crowd Dodger',
    description:
      'You grew up in a densely packed city and learned to navigate crowds with ease. You gain a +2 trait bonus on Acrobatics checks to move through threatened squares and through enemy-occupied squares.',
    shortDescription: '+2 Acrobatics to move through threatened/occupied squares',
    source: 'Heroes of the Streets',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Crowd Dodger',
        condition: {
          type: 'custom',
          params: {},
          description: 'To move through threatened or enemy-occupied squares',
        },
      },
    ],
    tags: ['acrobatics', 'movement'],
  },

  // ==================== FAITH TRAITS — Various Sources ====================
  {
    id: 'dusk_agent',
    name: 'Dusk Agent',
    description:
      'Your devotion to Zon-Kuthon has taught you to operate in darkness. You gain a +2 trait bonus on Stealth checks in dim light or darkness.',
    shortDescription: '+2 Stealth in dim light or darkness',
    source: 'Inner Sea Gods',
    category: 'faith',
    prerequisites: [{ type: 'deity', deityName: 'Zon-Kuthon' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 2,
        source: 'Dusk Agent',
        condition: { type: 'custom', params: {}, description: 'In dim light or darkness' },
      },
    ],
    tags: ['stealth', 'darkness', 'zon-kuthon'],
  },
  {
    id: 'redeemed_criminal',
    name: 'Redeemed Criminal',
    description:
      'You once lived a life of crime but found redemption through faith. You gain a +1 trait bonus on Bluff and Sleight of Hand checks, but take a -1 penalty on these skills when interacting with law enforcement.',
    shortDescription: '+1 Bluff and Sleight of Hand',
    source: 'Champions of Purity',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Redeemed Criminal',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sleight_of_hand',
        value: 1,
        source: 'Redeemed Criminal',
      },
    ],
    tags: ['bluff', 'sleight of hand'],
  },
  {
    id: 'caretaker_of_the_dead',
    name: 'Caretaker of the Dead',
    description:
      'You have spent time tending to the dead and ensuring their peaceful rest. You gain a +1 trait bonus on Knowledge (religion) checks regarding undead and a +1 trait bonus on Will saves against the supernatural abilities of undead creatures.',
    shortDescription: '+1 Knowledge (religion) on undead; +1 Will saves vs undead abilities',
    source: "Undead Slayer's Handbook",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Caretaker of the Dead',
        condition: { type: 'custom', params: {}, description: 'Regarding undead' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Caretaker of the Dead',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against supernatural abilities of undead',
        },
      },
    ],
    tags: ['knowledge', 'religion', 'undead', 'will', 'save'],
  },

  // ==================== REGIONAL TRAITS — Various Nation Books ====================
  {
    id: 'hermean_paragon',
    name: 'Hermean Paragon',
    description:
      'You were raised on the island of Hermea, where only the best and brightest are welcomed. You gain a +1 trait bonus on any one saving throw of your choice.',
    shortDescription: '+1 to one saving throw (your choice)',
    source: 'Inner Sea World Guide',
    category: 'regional',
    prerequisites: [{ type: 'region', regionName: 'Hermea' }],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose saving throw',
        options: ['Fortitude', 'Reflex', 'Will'],
        affectsEffects: true,
        effectTargetTemplate: 'save.{choice}',
      },
    ],
    tags: ['save', 'hermea'],
  },
  {
    id: 'mendevian_crusader',
    name: 'Mendevian Crusader',
    description:
      'You have served in the crusade against the Worldwound and are hardened against demonic corruption. You gain a +1 trait bonus on Will saves against the spells, spell-like abilities, and supernatural abilities of demons.',
    shortDescription: '+1 Will saves vs demon abilities',
    source: 'Inner Sea World Guide',
    category: 'regional',
    prerequisites: [{ type: 'region', regionName: 'Mendev' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Mendevian Crusader',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells, spell-like, and supernatural abilities of demons',
        },
      },
    ],
    tags: ['will', 'save', 'demon', 'mendev'],
  },
  {
    id: 'hermit',
    name: 'Hermit',
    description:
      'You have spent much of your life living alone in the wilderness, far from civilization. You gain a +1 trait bonus on Survival checks, and Survival becomes a class skill for you.',
    shortDescription: '+1 Survival; becomes class skill',
    source: 'Ultimate Campaign',
    category: 'regional',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Hermit',
      },
    ],
    tags: ['survival', 'class skill'],
  },

  // ==================== COMBAT TRAITS — Adventurer's Armory / Other ====================
  {
    id: 'shield_trained',
    name: 'Shield-Trained',
    description:
      'You were trained to use a shield as both defense and weapon. Heavy and light shields are considered simple weapons rather than martial weapons for you. This trait also grants a +1 trait bonus to your CMD.',
    shortDescription: 'Shields are simple weapons; +1 CMD',
    source: "Adventurer's Armory",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd',
        value: 1,
        source: 'Shield-Trained',
      },
    ],
    tags: ['shield', 'cmd', 'proficiency'],
  },
  {
    id: 'savanna_hunter',
    name: 'Savanna Hunter',
    description:
      'You grew up hunting on the vast savannas. You gain a +1 trait bonus on attack rolls with longbows and shortbows.',
    shortDescription: '+1 attack with longbows and shortbows',
    source: 'Sargava, the Lost Colony',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack',
        value: 1,
        source: 'Savanna Hunter',
        condition: {
          type: 'weapon_type',
          params: { weapon: 'bow' },
          description: 'With longbows and shortbows',
        },
      },
    ],
    tags: ['bow', 'longbow', 'shortbow', 'attack'],
  },

  // ==================== SOCIAL TRAITS — More Sources ====================
  {
    id: 'talented_organizer',
    name: 'Talented Organizer',
    description:
      'You have a natural gift for leadership and organization. You gain a +1 trait bonus on Diplomacy checks to influence crowds, and Diplomacy becomes a class skill for you.',
    shortDescription: '+1 Diplomacy to influence crowds; class skill',
    source: 'Heroes of the Streets',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Talented Organizer',
        condition: { type: 'custom', params: {}, description: 'To influence crowds' },
      },
    ],
    tags: ['diplomacy', 'class skill', 'leadership'],
  },
  {
    id: 'worldly',
    name: 'Worldly',
    description:
      'You have traveled extensively and picked up knowledge from many cultures. You gain a +1 trait bonus on Knowledge (geography) and Knowledge (local) checks.',
    shortDescription: '+1 Knowledge (geography) and Knowledge (local)',
    source: 'Inner Sea Primer',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Worldly',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Worldly',
      },
    ],
    tags: ['knowledge', 'geography', 'local'],
  },
];
